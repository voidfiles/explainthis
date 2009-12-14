<?php
// $Id: arrayshift.profile,v 1.1.2.2 2009/12/11 06:22:44 eaton Exp $

/**
 * Return an array of the modules to be enabled when this profile is installed.
 *
 * @return
 *   An array of modules to enable.
 */
function arrayshift_profile_modules() {
  return array('block', 'filter', 'node', 'system', 'user',
                   'comment', 'dblog', 'help', 'menu', 'path', 'search', 'statistics', 'taxonomy', 'install_profile_api',
                   'token', 'views', 'nodecomment', 'flag', 'votingapi', 'userpoints', 'pathauto',
                   'vote_up_down', 'flag_terms', 'similarterms', 'term_node_count', 'active_tags',
                   'wikify', 'nodeformsettings', 'gravatar', 'markdown', 'bueditor', 'markdowneditor',
                   'as_tweaks', 'as_exports');
  // 'userpoints_role' -- part of userpoints_contrib, but no official release yet. doh.
}

/**
 * Return a description of the profile for the initial installation screen.
 *
 * @return
 *   An array with keys 'name' and 'description' describing this profile,
 *   and optional 'language' to override the language selection for
 *   language-specific profiles.
 */
function arrayshift_profile_details() {
  return array(
    'name' => 'ArrayShift',
    'description' => 'Select this profile to enable all required modules and perform configuration tasks for the ArrayShift question/answer site.'
  );
}

/**
 * Return a list of tasks that this profile supports.
 *
 * @return
 *   A keyed array of tasks the profile will perform during
 *   the final stage. The keys of the array will be used internally,
 *   while the values will be displayed to the user in the installer
 *   task list.
 */
function arrayshift_profile_task_list() {
}

/**
 * Perform any final installation tasks for this profile.
 *
 * The installer goes through the profile-select -> locale-select
 * -> requirements -> database -> profile-install-batch
 * -> locale-initial-batch -> configure -> locale-remaining-batch
 * -> finished -> done tasks, in this order, if you don't implement
 * this function in your profile.
 *
 * If this function is implemented, you can have any number of
 * custom tasks to perform after 'configure', implementing a state
 * machine here to walk the user through those tasks. First time,
 * this function gets called with $task set to 'profile', and you
 * can advance to further tasks by setting $task to your tasks'
 * identifiers, used as array keys in the hook_profile_task_list()
 * above. You must avoid the reserved tasks listed in
 * install_reserved_tasks(). If you implement your custom tasks,
 * this function will get called in every HTTP request (for form
 * processing, printing your information screens and so on) until
 * you advance to the 'profile-finished' task, with which you
 * hand control back to the installer. Each custom page you
 * return needs to provide a way to continue, such as a form
 * submission or a link. You should also set custom page titles.
 *
 * You should define the list of custom tasks you implement by
 * returning an array of them in hook_profile_task_list(), as these
 * show up in the list of tasks on the installer user interface.
 *
 * Remember that the user will be able to reload the pages multiple
 * times, so you might want to use variable_set() and variable_get()
 * to remember your data and control further processing, if $task
 * is insufficient. Should a profile want to display a form here,
 * it can; the form should set '#redirect' to FALSE, and rely on
 * an action in the submit handler, such as variable_set(), to
 * detect submission and proceed to further tasks. See the configuration
 * form handling code in install_tasks() for an example.
 *
 * Important: Any temporary variables should be removed using
 * variable_del() before advancing to the 'profile-finished' phase.
 *
 * @param $task
 *   The current $task of the install system. When hook_profile_tasks()
 *   is first called, this is 'profile'.
 * @param $url
 *   Complete URL to be used for a link or form action on a custom page,
 *   if providing any, to allow the user to proceed with the installation.
 *
 * @return
 *   An optional HTML string to display to the user. Only used if you
 *   modify the $task, otherwise discarded.
 */
function arrayshift_profile_tasks(&$task, $url) {
  // This just sets up our basic 'page' content type, its settings, and
  // permissions for the default user roles. The arrayshift_exports module handles
  // the tweaky stuff like making vocabularies and so on.
 
  install_include(as_profile_modules());
 
  $types = array(
    array(
      'type' => 'page',
      'name' => st('Page'),
      'module' => 'node',
      'description' => st("A <em>page</em> is a simple piece of static content, such as an \"About us\" section of a website. By default, a <em>page</em> entry does not allow visitor comments and is not featured on the site's initial home page."),
      'custom' => TRUE,
      'modified' => TRUE,
      'locked' => FALSE,
      'help' => '',
      'min_word_count' => '',
    ),
    array(
      'type' => 'question',
      'name' => st('Question'),
      'module' => 'node',
      'description' => st("A <em>question</em> posted to the ArrayShift web site for others to answer."),
      'custom' => TRUE,
      'modified' => TRUE,
      'locked' => FALSE,
      'help' => '',
      'min_word_count' => 10,
    ),
  );

  foreach ($types as $type) {
    $type = (object) _node_type_set_defaults($type);
    node_type_save($type);
  }

  // Default page to not be promoted and have comments disabled.
  variable_set('node_options_page', array('status'));
  variable_set('comment_page', COMMENT_NODE_DISABLED);

  // Don't display date and author information for page nodes by default.
  $theme_settings = variable_get('theme_settings', array());
  $theme_settings['toggle_node_info_page'] = FALSE;
  $theme_settings['toggle_node_user_picture'] = TRUE;
  $theme_settings['toggle_primary_links'] = TRUE;
  variable_set('theme_settings', $theme_settings);

  $contrib_rid = install_add_role('contributor');
  $mod_rid = install_add_role('moderator');

  install_set_filter(1, 'filter', 2, -10);
  install_set_filter(1, 'filter', 0, -9);
  install_set_filter(1, 'filter', 3, -8);
  install_add_filter(1, 'markdown', 0, -7);
  install_set_filter(1, 'filter', 1, -6);

  install_add_permissions($contrib_rid, array('mark content as wikify')); // Contributor
  install_add_permissions($mod_rid, array('edit any comment content', 'edit any question content', 'revert revisions')); // Moderator. Whut?
  install_add_permissions(1, array('access comments', 'use gravatar', 'access content', 'create question content', 'view revisions', 'search content', 'access similarterms content', 'access user profiles')); // Anon
  install_add_permissions(2, array('access comments', 'post comments', 'post comments without approval', 'use gravatar', 'access content', 'create comment content', 'create question content', 'delete own comment content', 'delete own question content', 'edit own comment content', 'edit own question content', 'view revisions', 'search content', 'access similarterms content', 'access user profiles', 'use vote down', 'use vote up', 'edit wikified content')); // Authenticated
 
  install_admin_theme('garland');
  // install_default_theme('arrayshift');

  // Set up all kinds of variables. Loads of them. Oodles.
  arrayshift_initialize_variables();

  variable_set('site_frontpage', "front");
  views_invalidate_cache();

  // Update the menu router information.
  menu_rebuild();

  $aboutsite = install_create_custom_block("ArrayShift was built for the 2009 Do It With Drupal conference in 24 hours. It's based on (read, a shameless clone of) <a href='http://stackoverflow.com'>Stack Overflow</a>.", t('What the..?'), 2);
  $moreblock = install_create_custom_block('<br clear="both" /><h2>Looking for more? Browse the complete <a href="/questions">list of questions</a>, or <a href="/tags">popular tags</a>. Help us answer <a href="/unanswered">unanswered questions</a>.</h2>', t('Looking for more'), 2);
  $notwhatyouwant = install_create_custom_block("<h2>Not the answer you're looking for? Browse <a href='/questions'>other questions</a> or <a href='/questions/ask'>ask your own.</a></h2>", t('Not what you want?'), 2);

  // install_add_block('block', $aboutsite, 'arrayshift', 1, -10, 'right', 0, '', 0, 0, t('What the...?'));
  // install_add_block('block', $moreblock, 'arrayshift', 1, -1, 'content', 1, 'front*');
  // install_add_block('block', $notwhatyouwant, 'arrayshift', 1, -1, 'content', 1, 'node/*');

  install_add_block('block', $aboutsite, 'garland', 1, -10, 'right', 0, '', 0, 0, t('What the...?'));
  install_add_block('block', $moreblock, 'garland', 1, -1, 'content', 1, 'front*');
  install_add_block('block', $notwhatyouwant, 'garland', 1, -1, 'content', 1, 'node/*');

  // install_disable_block('user', 0, 'arrayshift');
  // install_disable_block('user', 1, 'arrayshift');

  install_disable_block('user', 0, 'garland');
  install_disable_block('user', 1, 'garland');
 
  arrayshift_add_pages();
  arrayshift_add_demo_content();
 
  // Update the menu router information.
  menu_rebuild();
  variable_set('as_install_stage', 1);
  node_access_rebuild(FALSE);  
}

/**
 * Implementation of hook_form_alter().
 *
 * Allows the profile to alter the site-configuration form. This is
 * called through custom invocation, so $form_state is not populated.
 */
function arrayshift_form_alter(&$form, $form_state, $form_id) {
  if ($form_id == 'install_configure') {
    // Set default for site name field.
    $form['site_information']['site_name']['#default_value'] = st('Array Shift');
  }
}

function arrayshift_initialize_variables() {
  variable_set('active_tags_' . variable_get('as_exports_vid', 1), 1);
  variable_set('allowed_html_1', "<a> <em> <strong> <cite> <code> <ul> <ol> <li> <dl> <dt> <dd>");

  variable_set('hidetitle_comment', 1);
  variable_set('hidetitle_question', 0);
  
  variable_set('gravatar_default', 3);
  variable_set('gravatar_rating', "G");
  variable_set('gravatar_url', "http://www.gravatar.com/avatar/");

  variable_set('node_comment_plural_question', "answers");
  variable_set('node_comment_type_question', "comment");
  variable_set('node_comment_view_question', "as_nodecomments");

  variable_set('pathauto_case', 1);
  variable_set('pathauto_ignore_words', "a,an,as,at,before,but,by,for,from,is,in,into,like,of,off,on,onto,per,since,than,the,this,that,to,up,via,with");
  variable_set('pathauto_indexaliases', FALSE);
  variable_set('pathauto_indexaliases_bulkupdate', FALSE);
  variable_set('pathauto_max_bulk_update', "50");
  variable_set('pathauto_max_component_length', "100");
  variable_set('pathauto_max_length', "100");
  variable_set('pathauto_modulelist', array('node', 'taxonomy', 'user'));

  variable_set('pathauto_node_applytofeeds', "");
  variable_set('pathauto_node_comment_pattern', "questions/reply/[nid]");
  variable_set('pathauto_node_page_pattern', "[title-raw]");
  variable_set('pathauto_node_question_pattern', "questions/[nid]/[title-raw]");
  variable_set('pathauto_node_supportsfeeds', "");
  variable_set('pathauto_separator', "-");
  variable_set('pathauto_taxonomy_pattern', "");
  variable_set('pathauto_taxonomy_supportsfeeds', "");
  variable_set('pathauto_user_pattern', "users/[uid]/[user-raw]");

  variable_set('nodeformsettings_inputformat_comment', 1);
  variable_set('nodeformsettings_inputformat_question', 1);
  variable_set('nodeformsettings_preview_comment', 1);
  variable_set('nodeformsettings_preview_question', 1);
  variable_set('nodeformsettings_revisionlog_comment', 2);
  variable_set('nodeformsettings_revisionlog_question', 2);
  variable_set('nodeformsettings_splitsummary_comment', 1);
  variable_set('nodeformsettings_splitsummary_question', 1);
  variable_set('nodeformsettings_submit_comment', "Post Your Answer");
  variable_set('nodeformsettings_submit_question', "Post Your Question");
  
  variable_set('similarterms_cache_options', 0);
  variable_set('similarterms_clear_cache', 0);
  variable_set('similarterms_display_options', "title_only");
  variable_set('similarterms_ncount_options', "unique");
  variable_set('similarterms_showcurrentnode_2', 0);
  variable_set('similarterms_vocabularies', "multi_select_and_tags");
  variable_set('simterms_count_2', "20");
  variable_set('simterms_sametype_2', array('question' => 'question'));
   
  variable_set('user_pictures', 1);
  variable_set('user_picture_default', "");
  variable_set('user_picture_dimensions', "32x32");
  variable_set('user_picture_file_size', "30");
  
  variable_set('vote_up_down_widget_node', 0);
  variable_set('vote_up_down_widget_style_node', 0);
  variable_set('vote_up_down_node_types', array('comment', 'question'));
  
  variable_set('statistics_count_content_views', 1);
    
  variable_set('wikify_comment', 1);
  variable_set('wikify_question', 1);

  variable_set('node_options_comment', array('status', 'revision'));
  variable_set('node_options_page', array('status', 'revision'));
  variable_set('node_options_question', array('status', 'revision'));

  variable_set('comment_form_location_question', 1);
  variable_set('comment_preview_question', 0);
  variable_set('comment_subject_field_question', 0);

  variable_set('markdowneditor_eid', 2);
  variable_set('bueditor_user1', 2);
  variable_set('bueditor_user1_alt', 0);
  variable_set('bueditor_roles', array(
    4 => array('weight' => 0, 'editor' => 2, 'alt' => 0),
    3 => array('weight' => 0, 'editor' => 2, 'alt' => 0),
    2 => array('editor' => 2, 'alt' => 0, 'weight' => 11),
    1 => array('editor' => 2, 'alt' => 0, 'weight' => 12),
  ));
 
  variable_set('userpoints_display_message', 0);
  variable_set('userpoints_role_3', "100");
  variable_set('userpoints_role_4', "500");

  // Oh man. This is probably bad.
  db_query("DELETE FROM {bueditor_buttons} WHERE bid IN (14, 19, 22, 23, 24, 25, 26, 28, 29, 30);");
  drupal_flush_all_caches();
}

function arrayshift_add_pages() {
  // Create the About/Faq node
  $about  = "ArrayShift is a shameless rip-off of the <em>excellent</em> community-driven ";
  $about .= "question/answer site, <a href='http://stackoverflow.com'>Stack Overflow.</a> ArrayShift ";
  $about .= "was was the centerpiece of a 'fantasy site-building' exercise at the 2009 Do It With Drupal ";
  $about .= "conference in New Orleans. Its purpose is <em>not</em> to compete with Stack Overflow, ";
  $about .= "a vibrant community with a great team of devlopers. Rather, it was an exercise in building ";
  $about .= "a highly functional Drupal site in a 24-hour time box.\n\nIf you're interested in getting ";
  $about .= "collaborative support for technical questions -- programming, server administration, or ";
  $about .= "sysadmin grunt work, visit Stack Overflow... or build it in Drupal!";
  install_create_node('About', $about, array('uid' => 1));
  path_set_alias('node/add/question', 'questions/ask');
}

function arrayshift_add_demo_content() {
  install_add_user('Claire', 'claire', 'claire@example.com', array('contributor'));
  install_add_user('Moe', 'moe', 'moe@example.com', array('moderator'));
 
  $body  = "Okay, so here's the deal. I'm calling `location_get_magic()` but it doesn't seem to be 'taking'. Does anyone have suggestions? ";
  $body .= "\n\n    function location_get_magic() {";
  $body .= "\n      // Something should happen here.";
  $body .= "\n      drupal_set_message('Oh, man. This is broken.');";
  $body .= "\n    }";
  $body .= "\n\nThat seems like it isn't right. Is it my imagination?";
  $body .= "";
  $options = array(
    'uid' => 3,
    'type' => 'question',
    'taxonomy' => array('tags'=>array(variable_get('as_tweaks_vid', 1) => 'sample-content, location')),
    'teaser' => strtr($body, 0, 250),
    'comment' => 2,
  );
  $node = install_create_node('Trying to use Location API...', $body, $options);

  $body  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum dui ut nibh egestas facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis urna, blandit sit amet tempor eget, elementum non nulla. Duis in nisl in enim molestie semper. Donec ultrices massa in quam sodales ultrices.\n\n";
  $body .="Fusce cursus dolor eu purus facilisis condimentum. Cras lobortis adipiscing tellus, scelerisque varius felis ornare at. Aliquam diam quam, tristique id feugiat vitae, volutpat sit amet purus. Fusce semper libero vel elit volutpat id bibendum nisi sagittis.?\n\n";
  $options = array(
    'uid' => 4,
    'type' => 'question',
    'taxonomy' => array('tags'=>array(variable_get('as_tweaks_vid', 1) => 'sample-content')),
    'teaser' => strtr($body, 0, 250),
    'comment' => 2,
  );
  install_create_node('Sample question', $body, $options);

  $body  = "Yeah, I think that's definitely going to be your problem there.";
  $options = array(
    'uid' => 4,
    'type' => 'comment',
    'teaser' => strtr($body, 0, 250),
    'comment_target_nid' => $node->nid,
  );
  install_create_node('An answer', $body, $options);
}