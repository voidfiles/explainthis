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
            <span class="role">Journalist</span> 
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



