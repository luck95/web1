$('#abrir-submenu').click(function(){
	$('#busqueda').slideUp();
	$('#submenu').slideToggle();
	$(this).toggleClass('menu');
	$('#abrir-busqueda').removeClass('menu');
	//$('.item-submenu').click(function() {
	//	$(this).siblings().find('div').slideUp();
	//	$(this).find('div').slideToggle();
	//});
});
$('#abrir-busqueda').click(function(){
	$('#submenu').slideUp();
	$('#busqueda').slideToggle();
	$(this).toggleClass('menu');
	$('#abrir-submenu').removeClass('menu');
});

$('.menu__modal').click(function(e){
	var ventana=$('.subventana label input');
	if (!ventana.is(e.target) && ventana.has(e.target).length === 0) { 
	    $(this).slideUp();
	    $('.derecha li').removeClass('menu');
	}
});
//$('#categorias-title').click(function(){
//	$(this).toggleClass('up').find('ul').slideToggle();
//});



