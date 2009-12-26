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
        <h1 class="s0 drop-shadow-dl"><a href="<?PHP echo check_url($front_page);?>"><?php print $site_name ?></a></h1>
        <?PHP if($site_slogan){ ?><div><em><?php echo $site_slogan; ?></em></div><?PHP } ?>
        <?php if (isset($primary_links)) { ?>
            <?php print theme('links', $primary_links, array('class' =>'menu horizontal clearfix s4 drop-shadow-dl ui-corner-all', 'id' => 'mainnav')); ?>
        <?php } ?>
        <?php echo $header_content; ?>

    </div>
    <div id="bd" role="main" class="margin_top_2em">
        <div id="yui-main">
            <div class="yui-b">
                <?PHP if($above_content): ?>
                    <? print $above_content;?>
                <?PHP endif; ?>
                <?php if ($left): ?>
                  <div class="yui-g">
                    <?php print $left ?>
                  </div>
                <?php endif; ?>
                <div class="yui-g">
                    <?php print $in_above_content; ?>
                    <?php if($messages) { ?><?php print $messages; ?><?php }?>
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