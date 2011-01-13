function ResizePageContentHeight(page)
{
	var $page = $(page);
	var $content = $page.children(".ui-content");
	var hh = $page.children(".ui-header").outerHeight(); hh = hh ? hh : 0;
	var fh = $page.children(".ui-footer").outerHeight(); fh = fh ? fh : 0;
	var pt = parseFloat($content.css("padding-top"));
	var pb = parseFloat($content.css("padding-bottom"));
	var wh = window.innerHeight;
	$content.height(wh - (hh + fh) - (pt + pb));
}


$('.map').bind('orientationchange', function(p,pp) {
  // $('p.map img').each(function(){
  //     var src = $(this).attr('src');
  //     var newsrc = src.replace('h','v');
  //     $(this).attr("src", newsrc);
  //   });
});
$('[data-role=page]').live('pageshow', function(event){
  var $page = $(this);
//  alert($page.id);
});

$('[data-role=page]').live("orientationchange", function(event) {
//  alert('live');
	ResizePageContentHeight($(".ui-page"));
});