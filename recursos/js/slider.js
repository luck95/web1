$(function(){
	var slider = $('.banner-contenido');

	function next(slider){
		slider.animate({
			/*marginLeft:'-' + 100 + '%'*/
			opacity:0
			
		} ,2000, function(){
			
			slider.find('article:first').insertAfter(slider.find('article:last'));
			slider.find('article:first').addClass('article');
			slider.find('article:last').removeClass();
			/*lider.css('margin-left', '-'+0+'%');*/
			slider.css('opacity',1)
			
		});
	}
	interval = setInterval(function(){
			next(slider);
		},10000)
		;
	autoplay();
})
$('.type-2').each(function(){
	$(this).parent().find('.controls i').click(function(){
		$(this).toggleClass('click').siblings().removeClass('click');
		var divi=$(this).parent().parent().find('.type-2 > div');
		if($(this).hasClass('2')){
			divi.css('margin-left','-' + 100 + '%');
		}else{
			divi.css('margin-left',0);
		}
	})
})
$('.type-4').each(function(){
	var slider = $(this);
	function next(slider){
		slider.animate({
			marginLeft:'-'+450+'px'
		} ,700, function(){
			slider.find('article:first').insertAfter(slider.find('article:last'));
			slider.css('margin-left', '-'+0+'px');
		});
	}
	function prev(slider){
		slider.animate({
			marginLeft:0
		} ,700, function(){
			slider.find('article:last').insertBefore(slider.find('article:first'));
			slider.css('margin-left', '-'+450+'px');
		});
	}
	$('.next').click(function(){
		var slider = $(this).parent().prev('.slider-contenido').find('.type-4');
		next(slider);
	});	
	$('.prev').click(function(){
		var slider = $(this).parent().prev('.slider-contenido').find('.type-4');
		prev(slider);
	});
});
var resolucion =  $(window).width();
if(resolucion>= 100 && resolucion<= 480){
	$('.type-1').each(function(){
		var slider = $(this);
		function next(slider){
			slider.animate({
				marginLeft:'-'+100+'%'
			} ,700, function(){
				slider.find('article:first').insertAfter(slider.find('article:last'));
				slider.css('margin-left', '-'+0+'%');
			});
		}
		function prev(slider){
			slider.animate({
				marginLeft:0
			} ,700, function(){
				slider.find('article:last').insertBefore(slider.find('article:first'));
				slider.css('margin-left', '-'+100+'%');
			});
		}
		function autoplay(slider) {
			interval = setInterval(function(){
				next(slider);
			}, 5000);
		}
		$('.next').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-1');
			next(slider);
			clearInterval(interval);
			autoplay(slider);
		});	
		$('.prev').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-1');
			prev(slider);
			clearInterval(interval);
			autoplay(slider);
		});
		autoplay();
	});
	$('.type-3').each(function(){
		var slider = $(this);
		function next(slider){
			slider.animate({
				marginLeft:'-'+100+'%'
			} ,700, function(){
				slider.find('article:first').insertAfter(slider.find('article:last'));
				slider.css('margin-left', '-'+0+'%');
			});
		}
		function prev(slider){
			slider.animate({
				marginLeft:0
			} ,700, function(){
				slider.find('article:last').insertBefore(slider.find('article:first'));
				slider.css('margin-left', '-'+100+'%');
			});
		}
		function autoplay(slider) {
			interval = setInterval(function(){
				next(slider);
			}, 5000);
		}
		$('.next').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-3');
			next(slider);
			clearInterval(interval);
			autoplay(slider);
		});	
		$('.prev').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-3');
			prev(slider);
			clearInterval(interval);
			autoplay(slider);
		});
		autoplay();
	});
}else if (resolucion>= 800){
	$('.type-1').each(function(){
		var slider = $(this);
		function next(slider){
			slider.animate({
				marginLeft:'-'+34+'%'
			} ,700, function(){
				slider.find('article:first').insertAfter(slider.find('article:last'));
				slider.css('margin-left', '-'+0+'%');
			});
		}
		function prev(slider){
			slider.animate({
				marginLeft:0
			} ,700, function(){
				slider.find('article:last').insertBefore(slider.find('article:first'));
				slider.css('margin-left', '-'+34+'%');
			});
		}
		function autoplay(slider) {
			interval = setInterval(function(){
				next(slider);
			}, 5000);
		}
		$('.next').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-1');
			next(slider);
			clearInterval(interval);
			autoplay(slider);
		});	
		$('.prev').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-1');
			prev(slider);
			clearInterval(interval);
			autoplay(slider);
		});
		autoplay();
	});
	$('.type-3').each(function(){
		var slider = $(this);
		function next(slider){
			slider.animate({
				marginLeft:'-'+50+'%'
			} ,700, function(){
				slider.find('article:first').insertAfter(slider.find('article:last'));
				slider.css('margin-left', '-'+0+'%');
			});
		}
		function prev(slider){
			slider.animate({
				marginLeft:0
			} ,700, function(){
				slider.find('article:last').insertBefore(slider.find('article:first'));
				slider.css('margin-left', '-'+100+'%');
			});
		}
		function autoplay(slider) {
			interval = setInterval(function(){
				next(slider);
			}, 5000);
		}
		$('.next').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-3');
			next(slider);
			clearInterval(interval);
			autoplay(slider);
		});	
		$('.prev').click(function(){
			var slider = $(this).parent().parent().next('.slider-contenido').find('.type-3');
			prev(slider);
			clearInterval(interval);
			autoplay(slider);
		});
		autoplay();
	});
}
