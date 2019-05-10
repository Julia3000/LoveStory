
$(document).ready(function() {
	$("a.scroll1").click(function() {
      	$("html, body").animate({
         	scrollTop: $($(this).attr("href")).offset().top + "px"
     	 }, {
         duration: 1000,
         easing: "swing"
      	});
      	return false;
   }); 
});