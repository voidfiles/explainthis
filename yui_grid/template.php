<?php
/*
* Initialize theme settings
*/
if (is_null(theme_get_setting('yui_page_width'))) {
  global $theme_key;

  /*
   * The default values for the theme variables. Make sure $defaults exactly
   * matches the $defaults in the theme-settings.php file.
   */
  $defaults = array(
    'yui_page_width' => 'doc4',
    'yui_sidebar' => 'yui-t2',
  );

  // Get default theme settings.
  $settings = theme_get_settings($theme_key);
  // Don't save the toggle_node_info_ variables.
  if (module_exists('node')) {
    foreach (node_get_types() as $type => $name) {
      unset($settings['toggle_node_info_' . $type]);
    }
  }
  // Save default theme settings.
  variable_set(
    str_replace('/', '_', 'theme_'. $theme_key .'_settings'),
    array_merge($defaults, $settings)
  );
  // Force refresh of Drupal internals.
  theme_get_setting('', TRUE);
}

function ago($timestamp){
   $difference = time() - $timestamp;
   $periods = array("second", "minute", "hour", "day", "week", "month", "years", "decade");
   $lengths = array("60","60","24","7","4.35","12","10");
   for($j = 0; $difference >= $lengths[$j]; $j++)
   $difference /= $lengths[$j];
   $difference = round($difference);
   if($difference != 1) $periods[$j].= "s";
   $text = "$difference $periods[$j] ago";
   return $text;
}

function yui_grid_node_submitted($node) {
    $user = user_load(array("uid"=>$node->uid));
    $vars = array("account"=>$user);
    gravatar_preprocess_user_picture($vars);
    $html = <<<HTML
    

<div class="usercard clearfix">
    <div class="submitted margin_bottom_1em">@datetime</div>
    <div class="left">
        !picture
    </div>
    <div class="right">
        <div class="name">!username</div>
        <div>
            <!-- <span class="role">Journalist</span> not sure how to do this part yet --> 
            <span class="points">!points</span>
        </div>
    </div>
</div>
HTML;
  return t($html,
    array(
      '!username' => theme('username', $node),
      '!picture' => $vars["picture"],
      '!points' => userpoints_get_current_points($node->uid),
      
      '@datetime' => ago($node->created),
    ));
}

function _phptemplate_variables($hook, $vars) {
  switch ($hook) {
    case 'node':
      $vars['storylink_url'] = check_url($vars['node']->vote_storylink_url);
      if (arg(1) != 'add' && arg(2) != 'edit') {
        $style = variable_get('vote_up_down_widget_style_node', 0) == 1 ? '_alt' : '';
        $vars['vote_up_down_widget'] = theme("vote_up_down_widget$style", $vars['node']->nid, 'node');
        $vars['vote_up_down_points'] = theme("vote_up_down_points$style", $vars['node']->nid, 'node');
      }
      $vars['vote_storylink_via'] = theme('vote_storylink_via', $vars['node']->vote_storylink_url);
      if (arg(1) == 'top') {
        static $count;
        $count = is_array($count) ? $count : array();
        $count[$hook] = is_int($count[$hook]) ? $count[$hook] : 1;
        $vars['seqid'] = $count[$hook]++;
      }
      break;
  }
  return $vars;
}



function yui_grid_preprocess_node(&$vars) {
  $vars['comments'] = '';
  $vars['comments_form'] = '';
  $vars['comments_control'] = '';
  if (function_exists('comment_render') && !empty($vars['node']) && $vars['node']->comment) {
    $arg2 = arg(2);
    $vars['comments'] .= comment_display_comment_render_without_form($vars['node'], ($arg2 && is_numeric($arg2) ? $arg2 : NULL));
    $vars['comments_form'] .= comment_display_comment_form_render($vars['node'], 'comment_form');
    $vars['comments_controls'] .= comment_display_comment_form_render($vars['node'], 'comment_controls');

    // Reconstruct CSS and JS variables.
    $vars['css'] = drupal_add_css();
    $vars['styles'] = drupal_get_css();
    $vars['scripts'] = drupal_get_js();

  }
}
 
/**
 * Renders comment(s) without forms.
 *
 * @param $node
 *   The node which comment(s) needs rendering.
 * @param $cid
 *   Optional, if given, only one comment is rendered.
 *
 * @see comment_render.
 */
function comment_display_comment_render_without_form($node, $cid = 0) {
  global $user;

  $output = '';

  if (user_access('access comments')) {
    // Pre-process variables.
    $nid = $node->nid;
    if (empty($nid)) {
      $nid = 0;
    }

    $mode = _comment_get_display_setting('mode', $node);
    $order = _comment_get_display_setting('sort', $node);
    $comments_per_page = _comment_get_display_setting('comments_per_page', $node);

    if ($cid && is_numeric($cid)) {
      // Single comment view.
      $query = 'SELECT c.cid, c.pid, c.nid, c.subject, c.comment, c.format, c.timestamp, c.name, c.mail, c.homepage, u.uid, u.name AS registered_name, u.signature, u.picture, u.data, c.status FROM {comments} c INNER JOIN {users} u ON c.uid = u.uid WHERE c.cid = %d';
      $query_args = array($cid);
      if (!user_access('administer comments')) {
        $query .= ' AND c.status = %d';
        $query_args[] = COMMENT_PUBLISHED;
      }

      $query = db_rewrite_sql($query, 'c', 'cid');
      $result = db_query($query, $query_args);

      if ($comment = db_fetch_object($result)) {
        $comment->name = $comment->uid ? $comment->registered_name : $comment->name;
        $links = module_invoke_all('link', 'comment', $comment, 1);
        drupal_alter('link', $links, $node);

        $output .= theme('comment_view', $comment, $node, $links);
      }
    }
    else {
      // Multiple comment view
      $query_count = 'SELECT COUNT(*) FROM {comments} c WHERE c.nid = %d';
      $query = 'SELECT c.cid as cid, c.pid, c.nid, c.subject, c.comment, c.format, c.timestamp, c.name, c.mail, c.homepage, u.uid, u.name AS registered_name, u.signature, u.picture, u.data, c.thread, c.status FROM {comments} c INNER JOIN {users} u ON c.uid = u.uid WHERE c.nid = %d';

      $query_args = array($nid);
      if (!user_access('administer comments')) {
        $query .= ' AND c.status = %d';
        $query_count .= ' AND c.status = %d';
        $query_args[] = COMMENT_PUBLISHED;
      }

      if ($order == COMMENT_ORDER_NEWEST_FIRST) {
        if ($mode == COMMENT_MODE_FLAT_COLLAPSED || $mode == COMMENT_MODE_FLAT_EXPANDED) {
          $query .= ' ORDER BY c.cid DESC';
        }
        else {
          $query .= ' ORDER BY c.thread DESC';
        }
      }
      else if ($order == COMMENT_ORDER_OLDEST_FIRST) {
        if ($mode == COMMENT_MODE_FLAT_COLLAPSED || $mode == COMMENT_MODE_FLAT_EXPANDED) {
          $query .= ' ORDER BY c.cid';
        }
        else {
          // See comment above. Analysis reveals that this doesn't cost too
          // much. It scales much much better than having the whole comment
          // structure.
          $query .= ' ORDER BY SUBSTRING(c.thread, 1, (LENGTH(c.thread) - 1))';
        }
      }
      $query = db_rewrite_sql($query, 'c', 'cid');
      $query_count = db_rewrite_sql($query_count, 'c', 'cid');

      // Start a form, for use with comment control.
      $result = pager_query($query, $comments_per_page, 0, $query_count, $query_args);

      $divs = 0;
      $num_rows = FALSE;
      $comments = '';
      drupal_add_css(drupal_get_path('module', 'comment') .'/comment.css');
      while ($comment = db_fetch_object($result)) {
        $comment = drupal_unpack($comment);
        $comment->name = $comment->uid ? $comment->registered_name : $comment->name;
        $comment->depth = count(explode('.', $comment->thread)) - 1;

        if ($mode == COMMENT_MODE_THREADED_COLLAPSED || $mode == COMMENT_MODE_THREADED_EXPANDED) {
          if ($comment->depth > $divs) {
            $divs++;
            $comments .= '<div class="indented">';
          }
          else {
            while ($comment->depth < $divs) {
              $divs--;
              $comments .= '</div>';
            }
          }
        }

        if ($mode == COMMENT_MODE_FLAT_COLLAPSED) {
          $comments .= theme('comment_flat_collapsed', $comment, $node);
        }
        else if ($mode == COMMENT_MODE_FLAT_EXPANDED) {
          $comments .= theme('comment_flat_expanded', $comment, $node);
        }
        else if ($mode == COMMENT_MODE_THREADED_COLLAPSED) {
          $comments .= theme('comment_thread_collapsed', $comment, $node);
        }
        else if ($mode == COMMENT_MODE_THREADED_EXPANDED) {
          $comments .= theme('comment_thread_expanded', $comment, $node);
        }

        $num_rows = TRUE;
      }
      while ($divs-- > 0) {
        $comments .= '</div>';
      }

      $output .= $comments;
      $output .= theme('pager', NULL, $comments_per_page, 0);
    }

    $output = theme('comment_wrapper', $output, $node);
  }

  return $output;
}

/**
 * Renders a comment form.
 *
 * @param $node
 *   The node which comment(s) needs rendering.
 * @param $form
 *   Which form should be rendered: 'comment_form' or 'comment_controls'.
 */
function comment_display_comment_form_render($node, $form = 'comment') {
  $output = '';
  $nid = $node->nid;

  $mode = _comment_get_display_setting('mode', $node);
  $order = _comment_get_display_setting('sort', $node);
  $comments_per_page = _comment_get_display_setting('comments_per_page', $node);

  if ($form == 'comment_form') {
    // If enabled, show new comment form if it's not already being displayed.
    $reply = arg(0) == 'comment' && arg(1) == 'reply';
    if (user_access('post comments') && node_comment_mode($nid) == COMMENT_NODE_READ_WRITE && (variable_get('comment_form_location_'. $node->type, COMMENT_FORM_SEPARATE_PAGE) == COMMENT_FORM_BELOW) && !$reply) {
      $output .= comment_form_box(array('nid' => $nid), t('Post new comment'));
    }
  }
  elseif ($form == 'comment_controls') {
    $output .= drupal_get_form('comment_controls', $mode, $order, $comments_per_page);
  }

  return $output;
}



