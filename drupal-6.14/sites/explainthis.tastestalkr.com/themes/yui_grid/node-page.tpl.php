<?php
// $Id: node.tpl.php,v 1.1 2009/05/04 13:37:59 berend Exp $


?>
  <div class="node<?php if ($sticky) { print " sticky"; } ?><?php if (!$status) { print " node-unpublished"; } ?>">
    <?php if (1 == 0) { ?><h2 class="title"><a href="<?php print $node_url?>"><?php print $title?></a></h2><?php }; ?>
    <?php print $vote_storylink_via ?>
    <?php print $vote_up_down_widget ?>
    <?php #print theme('imagecache', "1_3", $node->field_images[0]["filename"], "", "", ""); ?>
    <div class="content"><?php print $node->content["body"]["#value"]; ?></div>
  </div>
