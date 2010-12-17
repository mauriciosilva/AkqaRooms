
(function($){
	
 





 
	$(function(){
		$('.work')
			.hover(function(event){
				$(this).css('text-decoration','underline');
			}, function(event){
				$(this).css('text-decoration','none');
			})
			.bind('click',function(){
				window.location.href = "http://akqa.com";
			});
	});



})(this.jQuery);	





window.log = function(){
  log.history = log.history || [];   
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


