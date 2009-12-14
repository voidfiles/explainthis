<?php
// $Id: panels-onerowtwocol.tpl.php,v 1.1.2.1 2008/12/16 21:27:58 merlinofchaos Exp $
/**
 * @file
 * Template for a 2 column panel layout.
 *
 * This template provides a two column panel display layout, with
 * each column roughly equal in width.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   - $content['left']: Content in the left column.
 *   - $content['right']: Content in the right column.
 */
?>
<div class="yui-gh"  <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
    <div class="yui-u first">
        <div>
            <?php print $content['one']; ?>
        </div>
    </div>
    <div class="yui-u">
        <div>
            <?php print $content['two']; ?>
        </div>
    </div>
    <div class="yui-u">
        <div>
            <?php print $content['three']; ?>
        </div>
    </div>
    <div class="yui-u">
        <div>
            <?php print $content['four']; ?>
        </div>
    </div>
    <div class="yui-u">
        <div>
            <?php print $content['five']; ?>
        </div>
    </div>
</div>
