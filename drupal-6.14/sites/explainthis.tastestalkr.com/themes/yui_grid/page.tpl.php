<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <title><?PHP print $head_title; ?></title>
    <?PHP print $head; ?>
    <?PHP print $styles; ?>
</head>
<body>
<div id="custom-doc" class="yui-t6">
    <div id="hd" role="banner">
        <h1 class="s0"><a href="<?PHP echo check_url($front_page);?>"><?php print $site_name ?></a></h1>
        <?PHP if($site_slogan){ ?><div><em><?php echo $site_slogan; ?></em></div><?PHP } ?>
        <?php if (isset($primary_links)) { ?>
            <?php print theme('links', $primary_links, array('class' =>'menu horizontal clearfix s4', 'id' => 'mainnav')); ?>
        <?php } ?>
        <?php echo $header_content; ?>
    </div>
    <div id="bd" role="main" class="margin_top_1em">
        <div id="yui-main">
            <div class="yui-b">
                <div class="yui-g">
                    <div class="prompt clearfix ui-corner-all">
                        <form>
                            <label class="s3">What's your question.</label>
                            <label for="question" class="s3">Journalists are standing by.</label>
                            <input type="text" name="question" id="question" class="s4"></input>
                            <button type="submit" class="s4">Ask</button>
                        </form>
                    </div>
                </div>
                <?PHP if($above_content) { ?>
                <div class="yui-g">
                    <? print $above_content;?>
                </div>
                <?php if ($left): ?>
                  <div class="yui-g">
                    <?php if ($search_box): ?><div class="block block-theme"><?php print $search_box ?></div><?php endif; ?>
                    <?php print $left ?>
                  </div>
                <?php endif; ?>
                <?PHP } ?>
                <div class="yui-g">
                    <?php print $in_above_content; ?>
                    <?php print $content; ?>
                    <?php print $in_below_content; ?>
                </div>
            </div>
        </div>
        <div class="yui-b">
            <?php if ($right): ?>
                <div class="sidebar">
                    <?php print $right ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
    <div id="ft" role="contentinfo" class="margin_top_2em">
        <?php if (isset($footer_links)) { ?>
            <?php print theme('links', $footer_links, array('class' =>'menu horizontal clearfix')); ?>
        <?php } ?>
        <?php print $footer_message . $footer ?>
    </div>
</div>
<?PHP echo $scripts; ?>
<?PHP echo $closure; ?>
</body>
</html>