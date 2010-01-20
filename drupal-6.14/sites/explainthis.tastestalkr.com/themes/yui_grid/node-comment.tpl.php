<?php ?>
    <div class="node<?php if ($sticky) { print " sticky"; } ?><?php if (!$status) { print " node-unpublished"; } ?> clearfix margin_bottom_1em padding_bottom_halfem">
        <div class="actions">
            <?php print $vote_storylink_via; ?>
            <?php print $vote_up_down; ?>
            <?php echo $node->links["flag-favorite"]["title"] ?>
            <!--<a href="#" class="checkmark s3" title="Check this to keep track of this question.">&#x272D;</a>-->
            <div class="margin_top_1em">
                <p>&nbsp;</p>
            <?PHP if($node->links && $node->links["comment_edit"]): ?>
            <p>
                <a href="/<?php echo $node->links["comment_edit"]["href"] ?>">
                    <?php echo $node->links["comment_edit"]["title"] ?>
                </a>
            </p>
            <?PHP endif; ?>
            <?PHP if($node->links && $node->links["comment_delete"]): ?>
            <p>
                <a href="/<?php echo $node->links["comment_delete"]["href"]; ?>?<?php echo $node->links["comment_delete"]["query"]; ?>">
                    <?php echo $node->links["comment_delete"]["title"]; ?>
                </a>
            </p>
            <?PHP endif; ?>
            </div>
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
    </div>