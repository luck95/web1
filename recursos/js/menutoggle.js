$('.menu-toggle > ul > li > span').click(function(){
    $(this).toggleClass('sactivate');
    $(this).next().slideToggle().css({'display':'flex'}).parent().siblings().find('> span').removeClass().next().slideUp();
})