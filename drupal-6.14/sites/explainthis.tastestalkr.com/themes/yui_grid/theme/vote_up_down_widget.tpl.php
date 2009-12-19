<div class="vote-up-down-widget mine">
  <?php if ($class1) : ?>
    <span id="vote_up_<?php print $cid; ?>" class="<?php print $class1; ?>" title="<?php print $title1; ?>"><?php print $link1; ?></span>
    <span class="points"><?php echo $points; ?></span>
    <span id="vote_down_<?php print $cid; ?>" class="<?php print $class2; ?>" title="<?php print $title2; ?>"><?php print $link2; ?></span>
  <?php endif; ?>
</div>