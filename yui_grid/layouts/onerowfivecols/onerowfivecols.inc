<?php
// $Id: twocol.inc,v 1.1.2.1 2008/12/16 21:27:58 merlinofchaos Exp $

/**
 * Implementation of hook_panels_layouts().
 */
function yui_grid_onerowfivecols_panels_layouts() {
  $items['onerowfivecols'] = array(
    'title' => t('One Row Five Cols'),
    'icon' => 'onerowfivecols.png',
    'theme' => 'panels_onerowfivecols',
    'css' => 'onerowfivecols.css',
    'panels' => array(
      'one' => t('One'),
      'two' => t('Two'),
      'three' => t('Three'),
      'four' => t('Four'),
      'five' => t('Five')
    ),
  );

  return $items;
}
