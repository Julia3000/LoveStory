
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
  jQuery(document).ready(function($){
    $('<style>'+
        '.scrollTop{ display:none; z-index:9999; position:fixed;'+
            'bottom:20px; left:90%; width:88px; height:125px;'+
            'background:url(foto/up5.png) 0 0 no-repeat; }' +
        '.scrollTop:hover{ background-position:1 -133px;}'
    +'</style>').appendTo('body');
    var
    speed = 550,
    $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');		
    $scrollTop.click(function(e){
        e.preventDefault();
        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });
    function show_scrollTop(){
        ( $(window).scrollTop() > 330 ) ? $scrollTop.fadeIn(700) : $scrollTop.fadeOut(700);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
    show_scrollTop();
});