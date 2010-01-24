<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns:fb="http://www.facebook.com/2008/fbml">
<head>
    <title><?PHP print $head_title; ?></title>
    <meta name="google-site-verification" content="EWwf-mw-tQX6tNknIfv54u4V_Akt6NW79uNpeJCFPsc" />
    <meta description="explainthis.org is a user driven forum for users to ask questions, and get answers through the work of journalism" /> 
    <meta name="viewport" content="width=600" />
    <?PHP print $head; ?>
    <?PHP print $styles; ?>
</head>
<body>
<div id="custom-doc" class="yui-t5">
    <div id="hd" role="banner">
        <h1 class="s0 drop-shadow-dl">
            <a href="<?PHP echo check_url($front_page);?>"><?php print $site_name ?></a>
            <em style="color:red;text-align:right;font-size:60%;">Beta</em>
        </h1>
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
                    <?php if($title) { ?><h2 class="s3"><?php print $title; ?></h2><?php }?>
                    <?php if($tabs) { ?><?php print $tabs; ?><?php }?>
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
<script type="text/javascript">
var uservoiceOptions = {
  /* required */
  key: 'explainthis',
  host: 'explainthis.uservoice.com', 
  forum: '38748',
  showTab: true,  
  /* optional */
  alignment: 'left',
  background_color:'#CCC', 
  text_color: 'black',
  hover_color: '#FFF',
  lang: 'en'
};

function _loadUserVoice() {
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', ("https:" == document.location.protocol ? "https://" : "http://") + "cdn.uservoice.com/javascripts/widgets/tab.js");
  document.getElementsByTagName('head')[0].appendChild(s);
}
_loadSuper = window.onload;
window.onload = (typeof window.onload != 'function') ? _loadUserVoice : function() { _loadSuper(); _loadUserVoice(); };
</script>
</body>
</html>
