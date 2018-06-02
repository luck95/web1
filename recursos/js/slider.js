//$('.slide-nav').on('click', function(e) {
//  e.preventDefault();
//  // get current slide
//  var current = $('.flex--active').data('slide'),
//    // get button data-slide
//    next = $(this).data('slide');
//
//  $('.slide-nav').removeClass('active');
//  $(this).addClass('active');
//
//  if (current === next) {
//    return false;
//  } else {
//    $('.slider__wrapper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
//    $('.flex--active').addClass('animate--end');
//    setTimeout(function() {
//      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
//      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
//    }, 800);
//  }
//});
$(function(){
  $('.slider-container > article:gt(0)').hide();
    var interval = setInterval(changeDiv, 6000);
  function changeDiv(){
    $('.slider-container > article:first-child').fadeOut(1000).next('article').fadeIn(1000).end().appendTo('.slider-container');
    };
    $('.mas').click(function(){
      changeDiv();
      clearInterval(interval);
      interval = setInterval(changeDiv, 6000);
    });
    $('.menos').click(function(){
      $('.slider-container > article:first-child').fadeOut(1000);
      $('.slider-container > article:last-child').fadeIn(1000).prependTo('.slider-container');
    clearInterval(interval);
    interval = setInterval(changeDiv, 6000);
    });
});