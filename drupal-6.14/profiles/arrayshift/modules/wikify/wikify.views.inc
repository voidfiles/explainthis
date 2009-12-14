<?php

function wikify_views_data() {
  $data = array();

  $data['wikify']['table']['group'] = t('Node');

  $data['wikify']['table']['join'] = array(
    'node' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
    'wikify' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
  );

  $data['wikify']['wikify'] = array(
    'title' => t('Wikified'),
    'help' => t('Whether or not the node is publically editable.'),
    'field' => array(
      'handler' => 'views_handler_field_boolean',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'wikify_handler_filter_wikify',
      'label' => t('Private'),
      'type' => 'yes-no',
    ),
  );

  return $data;

}

function wikify_views_handlers() {
  return array(
    'info' => array(
      'path' => drupal_get_path('module', 'wikify'),
    ),
    'handlers' => array(
      'wikify_handler_filter_wikify' => array(
        'parent' => 'views_handler_filter_boolean_operator',
        'file' => 'wikify_handler_filter_wikify.inc',
      ),
    ),
  );
}
