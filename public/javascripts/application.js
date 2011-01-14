

$(document).live("orientationchange", function(event) {
	ResizePageContentHeight($(".ui-page"));
});

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