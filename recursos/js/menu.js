$(document).ready(function(){
	var altura = $('#menu').offset().top;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('#menu').addClass('fixed');
		} else {
			$('#menu').removeClass('fixed');
		}
	});
});
$('.open-menu').click(function(){
	$('#menu').slideToggle();
})
$('.submenu > span').click(function(){
	$(this).toggleClass('open');
	if($(this).hasClass('open')){
		$(this).next('ul').css('display','flex');
	}else{
		$(this).next('ul').css('display','none');
	}
			
});
$('.tabs-content h4').click(function(){
	$(this).toggleClass('menos');
	if($(this).hasClass('menos')){
		$(this).next('p').slideDown();
	}else{
		$(this).next('p').slideUp();
	}
});
 	