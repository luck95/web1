//Primera Forma de Crear Carrusel Dinamicos
$('.tab-notices').each(function(){
	var c = $(this);
	var s = c.find('article');
    var n = s.length;
    console.log(n);
	c.wrapInner('<div class="tab-notice-content" />');
	var ci= $(this).find('.tab-notice-content');
	ci.css('width',100 * n  + '%');
    s.css('width', 100 / n + '%');
    
    $('.icon-previous').click(function(){
        ci.css('left','0');
        $('.num-page').text(1);
    })
    $('.icon-next').click(function(){
        ci.css('left','-' + 100 + '%');
        $('.num-page').text(2);
    })
})