<?PHP
/**
 * @file vote_up_down_widget.tpl.php
 *
 * This template handles default voting widget output. Available variables:
 * - $points: voting points of a same style as widget;
 * - $class1: "vote-up-act", "vote-up-inact";
 * - $class2: "vote-down-act", "vote-down-inact";
 * - $title1, $title1: Contains a voting URL, should not be removed;
 * - $link1, $link2: Voting links for users with disabled JS;
 * - $cid: $node->nid or $comment->cid;
 */

?>
<div class="vote-up-down-widget">
  <?php if ($class1) : ?>
    <span id="vote_up_<?php print $cid; ?>" class="vote_up <?php print $class1; ?>" title="<?php print $title1; ?>">
        <a href="<?php print $title1; ?>" class="s4" title="vote up">&#9650;</a>
    </span>
    <span class="points s3">
        <?php echo $points; ?>
    </span>
    <span id="vote_down_<?php print $cid; ?>" class="vote_down <?php print $class2; ?>" title="<?php print $title2; ?>">
        <a href="<?php print $title2; ?>" class="s4" title="vote down">&#9660;</a>
    </span>
  <?php endif; ?>
</div>