<?php
// $Id$

/**
 * Copyright 2009 Google Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Plugin Name: Friend Connect Commenting Plugin
 * Version: 1.1
 * Description: This plugin allows a user to leave comments using his or
 * her Friend Connect (http://www.google.com/friendconnect/) id to signin.
 * More description can be found in the attached README file, or at
 *
 * http://code.google.com/p/drupal-friendconnect
 */

/**
 * Implementation of hook_admin().
 */
function friendconnect_admin() {
  // site id
  $form['friendconnect_site_config'] = array(
    '#type' => 'fieldset',
    '#id' => 'friendconnect_site_config',
    '#title' =>  t('Friend Connect Configuration') ,
    '#collapsible' => true,
    '#collapsed' => false,
    '#weight' => -2,
  ); 
  $form['friendconnect_site_config']['friendconnect_siteid'] = array(
    '#type' => 'textfield',
    '#title' => t('Site ID'),
    '#required' => true,
    '#size' => 25,
    '#default_value' => variable_get('friendconnect_siteid', ''),
    '#description' => t('Unique site identifier provided by Google'
    . ' Friend Connect during initial registration.'),
    '#weight' => 0,
  );
  // fc comments
  $form['friendconnect_comments'] = array(
    '#type' => 'fieldset',
    '#id' => 'friendconnect_comments',
    '#title' =>  t('Friend Connect Comments') ,
    '#collapsible' => true,
    '#collapsed' => true,
    '#weight' => -1,
  );
  $form['friendconnect_comments']['friendconnect_comments_enabled'] = array(
    '#type' => 'checkbox', 
    '#default_value' => variable_get('friendconnect_comments_enabled', 0), 
    '#title' => t('Enable Friend Connect comments.'),
  );
  $form['friendconnect_comments']
    ['friendconnect_comments_default_txt'] = array(
    '#type' => 'textfield',
    '#title' => t('Default Text'),
    '#size' => 60,
    '#description' => t('Start with this text in the comments area'),
    '#default_value' => variable_get(
      'friendconnect_comments_default_txt',  
      t('Enter your comment here')),
    );
  $form['friendconnect_comments']['friendconnect_comments_header'] = array(
    '#type' => 'textfield',
    '#title' => t('Comments header'),
    '#size' => 60,
    '#description' => t('Display this text on top of the gadget'),
    '#default_value' => variable_get(
    'friendconnect_comments_header',  
    t('Comments')),
  );
  $form['friendconnect_comments']['friendconnect_anon_comments'] = array(
    '#type' => 'checkbox',
    '#default_value' => variable_get('friendconnect_anon_comments', 0), 
    '#title' => t('Allow anonymous posts.'),
  );
  $form['friendconnect_comments']['friendconnect_allow_youtube'] = array(
    '#type' => 'checkbox',
    '#default_value' => variable_get('friendconnect_allow_youtube', 0), 
    '#title' => t('Allow visitors to post YouTube links.'),
  );
  $form['friendconnect_comments']['friendconnect_number_rows'] = array(
    '#type' => 'textfield',
    '#title' => t('Number of posts to show'),
    '#size' => 2,
    '#default_value' => variable_get(
      'friendconnect_number_rows', 5),
  );
  
  // fc reviews
  $form['friendconnect_reviews'] = array(
    '#type' => 'fieldset',
    '#id' => 'friendconnect_reviews',
    '#title' =>  t('Friend Connect Reviews') ,
    '#collapsible' => true,
    '#collapsed' => true,
    '#weight' => -1,
  );
  $form['friendconnect_reviews']['friendconnect_reviews_enabled'] = array(
    '#type' => 'checkbox', 
    '#default_value' => variable_get('friendconnect_reviews_enabled', 0), 
    '#title' => t('Enable Friend Connect reviews.'),
  );
  $form['friendconnect_reviews']
    ['friendconnect_reviews_default_txt'] = array(
    '#type' => 'textfield',
    '#title' => t('Default Text'),
    '#size' => 60,
    '#description' => t('Start with this text in the reviews area'),
    '#default_value' => variable_get(
      'friendconnect_reviews_default_txt',  
      t('Enter your reviews here')),
    );
  $form['friendconnect_reviews']['friendconnect_reviews_header'] = array(
    '#type' => 'textfield',
    '#title' => t('Reviews header'),
    '#size' => 60,
    '#description' => t('Display this text on top of the gadget'),
    '#default_value' => variable_get(
    'friendconnect_reviews_header',  
    t('Reviews')),
  );
  $form['friendconnect_reviews']['friendconnect_anon_reviews'] = array(
    '#type' => 'checkbox',
    '#default_value' => variable_get('friendconnect_anon_reviews', 0), 
    '#title' => t('Allow anonymous posts.'),
  );
  
  $form['friendconnect_reviews']['friendconnect_number_rows'] = array(
    '#type' => 'textfield',
    '#title' => t('Number of posts to show'),
    '#size' => 2,
    '#default_value' => variable_get(
      'friendconnect_number_rows', 5),
  );
  // social bar
  $form['friendconnect_social_bar'] = array(
    '#type' => 'fieldset',
    '#id' => 'friendconnect_social_bar',
    '#title' => t('Social Bar'),
    '#collapsible' => true,
    '#collapsed' => true,
    '#weight' => -1,
  ); 
  
  $form['friendconnect_social_bar']['friendconnect_social_bar_enabled'] = array(
    '#type' => 'checkbox', 
    '#default_value' => variable_get('friendconnect_social_bar_enabled', 0), 
    '#title' => t('Enable social bar.'),
  );
  
  $form['friendconnect_social_bar']['friendconnect_social_bar_pos'] = array(
    '#type' => 'radios', 
    '#title' => t('Social Bar Position'), 
    '#default_value' => variable_get('friendconnect_social_bar_pos', 0), 
    '#options' => array(t('Top'), t('Bottom')),
  );
  // skin
  $form['friendconnect_skin'] = array(
    '#type' => 'fieldset',
    '#id' => 'friendconnect_skin',
    '#title' =>  t('Gadgets colors') ,
    '#collapsible' => true,
    '#collapsed' => true,
    '#weight' => 0,
  );  
  $form['friendconnect_skin']['picker'] = array(
        '#type' => 'markup',
        '#value' => '<div id="gfc_color_picker" ></div>',
        '#weight' => -2,
  );
  $form['friendconnect_skin']['friendconnect_ENDCAP_BG_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Endcap Background'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_ENDCAP_BG_COLOR', '#e0ecff'),
    '#description' => t('Empty value means transparent'),
    '#attributes' => array('class'=>'color {required:false}'),
  );
  $form['friendconnect_skin']['friendconnect_ENDCAP_TEXT_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Endcap Text'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_ENDCAP_TEXT_COLOR', '#333333'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_ENDCAP_LINK_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Endcap Links'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_ENDCAP_LINK_COLOR', '#0000cc'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_BORDER_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Border'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_BORDER_COLOR', '#cccccc'),
    '#description' => t('Empty value means transparent'),
    '#attributes' => array('class'=>'color {required:false}'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_HEADLINE_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content Headlines'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_HEADLINE_COLOR', '#333333'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_BG_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content Background'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_BG_COLOR', '#ffffff'),
    '#description' => t('Empty value means transparent'),
    '#attributes' => array('class'=>'color {required:false}'),
  );
  $form['friendconnect_skin']['friendconnect_ALTERNATE_BG_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Alternate Background'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_ALTERNATE_BG_COLOR', '#ffffff'),
    '#description' => t('Empty value means transparent'),
    '#attributes' => array('class'=>'color {required:false}'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_TEXT_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content text'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_TEXT_COLOR', '#333333'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_SECONDARY_TEXT_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content Secondary Text'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_SECONDARY_TEXT_COLOR', '#333333'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_LINK_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content Links'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_LINK_COLOR', '#0000cc'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  $form['friendconnect_skin']['friendconnect_CONTENT_SECONDARY_LINK_COLOR'] = array(
    '#type' => 'textfield',
    '#title' => t('Content Secondary Links'),
    '#required' => false,
    '#size' => 8,
    '#default_value' => 
      variable_get('friendconnect_CONTENT_SECONDARY_LINK_COLOR', '#0000cc'),
    '#description' => '',
    '#attributes' => array('class'=>'color'),
  );
  
  drupal_add_css('misc/farbtastic/farbtastic.css', 'module', 'all', FALSE);
  drupal_add_js('misc/farbtastic/farbtastic.js');
  
  drupal_add_js("
   $(document).ready(function() {
    var f = $.farbtastic('#gfc_color_picker');
    var p = $('#gfc_color_picker').css('opacity', 0.25);
    var selected;
    $('.color')
      .each(function () { f.linkTo(this); $(this).css('opacity', 0.75); })
      .focus(function() {
        f.linkTo(this);
        p.css('opacity', 1);
      });
  });
  
  ", 'inline', 'footer');
  return system_settings_form($form);
};

