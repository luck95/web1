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
    parallaximg('.parallax',.1);
}