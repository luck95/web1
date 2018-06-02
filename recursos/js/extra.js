//menu
    // activar menu
$('#abrir-menu').click(function(){
    
    //hamburguesa
    
    if($(this).find('span').hasClass('hamburguesa')){
        $('.menu').css({
        'left':'0%'
        });
        $('section').css({
            'margin-left':'15%',
            'width':'85%'
        });
        $('.generos-principal .fondo-container .fondo-model').css({
            'width':'85%'
        });
        $(this).find('span').removeClass().addClass('cruz');
    }else{
        $(this).find('span').removeClass().addClass('hamburguesa');
        $('.menu').css({
            'left':'-100%'
            });
            $('section').css({
                'margin-left':'0%',
                'width':'100%'
            });
            $('.generos-principal .fondo-container .fondo-model').css({
                'width':'70%'
            });
    }
})
    //desplegar sociales
    $('#abrir-sociales').click(function(){
        $(this).prev('div').toggleClass('sociales');
    })
    //desplegar menu
$('.menu > ul > li > span').click(function(e){
    e.preventDefault();
    $(this).next().slideDown().parent().siblings().find('ul').slideUp();
    if($(this).hasClass('open')){
        $(this).removeClass().addClass('close');
        $(this).parent().siblings().find('span').removeClass().addClass('open');
        $(this).next().slideDown();
    }else{
        $(this).removeClass().addClass('open');
        $(this).next().slideUp();
    }
    return false;
});
    //colorear submenu









