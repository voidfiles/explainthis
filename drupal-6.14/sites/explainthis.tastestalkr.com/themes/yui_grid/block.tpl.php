<?php
// $Id: block.tpl.php,v 1.1 2009/05/04 13:37:59 berend Exp $
?>
<div class="block block-<?php print $block->module; ?>" id="block-<?php print $block->module; ?>-<?php print $block->delta; ?>">
    <div><em class="title s3"><?php print $block->subject; ?></em></div>
    <div class="content clearfix"> 
        <?php print $block->content; ?>
    </div>
</div>
