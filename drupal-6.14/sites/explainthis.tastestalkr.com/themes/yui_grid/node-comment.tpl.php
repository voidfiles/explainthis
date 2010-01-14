<?php ?>
  <div class="node<?php if ($sticky) { print " sticky"; } ?><?php if (!$status) { print " node-unpublished"; } ?> clearfix margin_bottom_1em padding_bottom_halfem">
    <div class="actions">
        <?php print $vote_storylink_via; ?>
        <?php print $vote_up_down; ?>
        <?php echo $node->links["flag-favorite"]["title"] ?>
        <!--<a href="#" class="checkmark s3" title="Check this to keep track of this question.">&#x272D;</a>-->
    </div>
    <div class="content margin_bottom_1em"><?php print $node->content["body"]["#value"]; ?></div>
    <div class="context clearfix">
        <div class="tags context_item">
            <?php echo $terms; ?>
        </div>
        <div class="status  context_item">
            <em class="s5">&nbsp;</em>
        </div>
        <div class="person  context_item last">
            <?php echo $submitted; ?>
        </div>
    </div>
    <div class="comments">
        <?php echo $comments; ?>
        <?php echo $comments_form; ?>
    </div>
  </div>
