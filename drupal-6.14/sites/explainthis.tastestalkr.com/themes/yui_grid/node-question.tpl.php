<?php ?>
  <div class="node<?php if ($sticky) { print " sticky"; } ?><?php if (!$status) { print " node-unpublished"; } ?> clearfix margin_bottom_1em">
    <h2 class="title s3 margin_bottom_1em"><?php print $title?></h2>
    <div class="actions">
        <?php print $vote_storylink_via; ?>
        <?php print $vote_up_down; ?>
        <?php echo $node->links["flag-favorite"]["title"] ?>
        <!--<a href="#" class="checkmark s3" title="Check this to keep track of this question.">&#x272D;</a>-->
    </div>
    <div class="content"><?php print $node->content["body"]["#value"]; ?></div>
  </div>
