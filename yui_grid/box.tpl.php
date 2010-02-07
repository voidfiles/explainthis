<?php
// $Id: box.tpl.php,v 1.1 2009/05/04 13:37:59 berend Exp $
?>
<div class="box">
    <?php if ($title && $title != "Post new Comment") { ?>
        <h2 class="title"><?php print $title; ?></h2>
    <?php } else { ?>
        <h2 class="title s5">Post your answer</h2>
    <?PHP } ?>
    <div class="content"><?php print $content; ?></div>
</div>

