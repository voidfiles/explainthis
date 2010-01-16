<?php ?>
  <div class="node<?php if ($sticky) { print " sticky"; } ?><?php if (!$status) { print " node-unpublished"; } ?> clearfix margin_bottom_1em padding_bottom_halfem margin_top_1em">
    <?php if (!$page) { ?>
    <h2 class="title s3"><a href="<?php print $node_url?>"><?php print $title?></a></h2>
    <?PHP } ?>
    <div class="actions">
        <?php print $vote_storylink_via; ?>
        <?php print $vote_up_down; ?>
        <?php echo $node->links["flag-favorite"]["title"]; ?>
        <!--<a href="#" class="checkmark s3" title="Check this to keep track of this question.">&#x272D;</a>-->
    </div>
    <div class="content s6 margin_bottom_1em margin-top"><?php print $node->content["body"]["#value"]; ?></div>
    <div class="context clearfix">
        <div class="tags context_item">
            <?php echo $terms; ?>
        </div>
        <div class="status  context_item">
            <em>Unclaimed</em>
        </div>
        <div class="person  context_item last">
            <?php echo $submitted; ?>
        </div>
    </div>
    <div class="comments">
        <div id="<?php echo $nid; ?>-comments" class="all-comments">
        <?PHP
            $view = views_get_view('inline_comments_for');
            $view->set_arguments(array($nid));
            $view->execute();
            if (count($view->result)) {
                foreach($view->result as $comment ){
                    $node = node_load($comment->nid);
                    ?>
                    <div class="comment">
                        <p><?php echo $node->body; ?></p> 
                        <p class="by">by <a href="/user/<?php echo $node->uid ?>/<?php echo $node->name; ?>"><?php echo $node->name; ?></a> <?php echo ago($node->created); ?></p>
                    </div>
                    <?PHP
                }

            }
        
        ?>
        </div>
        <?PHP if($logged_in):?>
        <?php echo simple_inline_comments($nid . "-comments", $nid); ?>
        <?PHP endif;?>
    </div>
    <?php
        if($node->comment_count == 1){
            $subtitle = " answer";
        } else {
            $subtitle = " answers";
        }
    
    ?>
    <div class="s3 margin_top_1em">
        <em><?php echo $node->comment_count . $subtitle ; ?></em>
    </div>
  </div>
