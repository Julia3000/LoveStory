//<script type="text/javascript">
 /*$('a[data-target="anchor"]').bind('click.smoothscroll', function(){
 	var target = $(this).attr('href'),
	bl_top = $(target).offset().top ;
  	$('body, html').animate({scrollTop:bl_top}, 1000);
  	console.log('!!!!');
  	return false;
 })*/
//</script>
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