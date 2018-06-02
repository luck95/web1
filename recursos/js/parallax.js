$(window).on('scroll',parallax);

function parallax(){
    //obtener el nivel de scroll
    var s=$(window).scrollTop();
    //efecto parallax para los fondos
    function parallaximg(el,t){
        $(el).css({
            'background-attachment':'fixed',
            'background-position':'center ' + -(s*t) + 'px'
        })
    }
    function parallaxtext(el,t){
        $(el).css({
            'position':'absolute',
            'top': +(s*t)  +'%'
        })
    }
    parallaximg('#portada',.1);
    parallaximg('#programas-principal',.01);
    parallaximg('#generos-principal',.01);
    parallaximg('#noticias-principal',.01);
    parallaximg('#ultimas-principal',.01);
    parallaximg('#artistas-principal',.01);
    parallaximg('#galeria-principal',.01);
    parallaximg('#contacto-principal',.01);
}