<?php
// $Id: twocol.inc,v 1.1.2.1 2008/12/16 21:27:58 merlinofchaos Exp $

/**
 * Implementation of hook_panels_layouts().
 */
function yui_grid_onerowtwocols_panels_layouts() {
  $items['onerowtwocols'] = array(
    'title' => t('One Row Two Cols'),
    'icon' => 'onerowtwocols.png',
    'theme' => 'panels_onerowtwocols',
    'css' => 'onerowtwocols.css',
    'panels' => array(
      'left' => t('Left Side'),
      'right' => t('Right Side'),
    ),
  );

  return $items;
}
