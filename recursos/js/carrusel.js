//Primera Forma de Crear Carrusel Dinamicos
$('.carrusel').each(function(){
	var c = $(this);
	var s = c.find('article');
	var n = s.length;
	c.wrapInner('<div class="carrusel-container" />');
	var ci= $(this).find('.carrusel-container');
	ci.css('width',100 * n + '%');
	s.css('width', 100 / n + '%');

	ci.each(function(){
		ni=$(this).find('article').length;
		for(var i=1;i<=ni;i++){
			$(this).parent().next().append('<span />');
		}
	});
	$(this).next().find('span:first-child').addClass('iactive');	
})

//Segunda Forma de Crear Carrusel Dinamicos
//$(function(){
//	var array = [$('#carrusel-automatic'),$('#carrusel-manual')];
//	array.forEach(function(e){
//		var c = e;
//		var s = c.find('article');
//		var n = s.length;
//		c.wrapInner('<div class="carrusel-container" />');
//		var ci= e.find('.carrusel-container');
//		ci.css('width',100 * n + '%');
//		s.css('width', 100 / n + '%');
//		console.log(n);
//		for(var i=1;i<=n;i++){
//			e.next('.indicadores').append('<span />');
//		}
//		e.next().find('span:first-child').addClass('iactive');
//		var as = e.next('span').length;
//		e.next('.indicadores').css('width', (as * n) + 100 +'px');
//	})
		//Automatico
			ca=$('#carrusel-automatic');
			ci=ca.find('.carrusel-container');
			n= ci.find('article').length;
			$('#carrusel-automatic').next('.indicadores').each(function(){
				var asa = $(this).find('span').length;
				$(this).css('width', (asa * n) + 100 +'px');
			})
			var tope=0
			function changeDiv(){
				tope++;	
					if(tope >=n){
						tope=0;
						ca.next().find('span:first-child').addClass('iactive').siblings().removeClass();
						ci.css('left','0');
					}else{
						ca.next().find('span').eq(tope).addClass('iactive').siblings().removeClass();
						ci.css('left','-' + tope*100 + '%');
					}
			   };
			var interval = setInterval(changeDiv, 8000);
		//Manual
		$('#carrusel-manual').next('.indicadores').each(function(){
			var ase = $(this).find('span').length;
			$(this).css('width', (ase * n) + 8 +'%');
		})
		var nindi=$('#carrusel-manual').next('.indicadores').find('span').length;
		var indi=$('#carrusel-manual').next('.indicadores').find('span');
		for (var i=0;i <=nindi;i++){	
			indi.eq(i).append('<img src="recursos/imagenes/fondo' + i + '.jpg"/>');
		}
		//Manual Alternativo
		$('#carrusel-manual-alternative').next('.indicadores').each(function(){
			var ase = $(this).find('span').length;
			$(this).css('width', (ase * n) + 8 +'%');
		})
		var nindi=$('#carrusel-manual-alternative').next('.indicadores').find('span').length;
		var indi=$('#carrusel-manual-alternative').next('.indicadores').find('span');
		for (var i=0;i <=nindi;i++){	
			indi.eq(i).append('<img src="recursos/imagenes/fondo' + i + '.jpg"/>');
		}
		$('.indicadores span').click(function(){
			var indice = $(this).index();
			tope=indice - 1;
			co=$(this).parent().prev().find('.carrusel-container');
			co.css('left', '-' + (indice) * 100 + '%');
			$(this).addClass('iactive').siblings().removeClass();
			if(co.parent().attr('id')=='carrusel-automatic'){
				changeDiv();
				clearInterval(interval);
				interval = setInterval(changeDiv, 8000);
			}
				
				
		});

		//$('.carrusel-container').mouseover(function(){
		//	clearInterval(interval);
		//	interval = setInterval(changeDiv, 5000);
		//});
		//$('.carrusel-container').mouseout(function(){
		//	clearInterval(interval);
		//	changeDiv();
		//	interval = setInterval(changeDiv, 5000);
			
		//});
