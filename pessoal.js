$(document).ready(function(){

	//CELULAR - HEADER
	$('.celular-header').click(function() {
		$('body,html').animate({scrollTop: $(".esquenta").offset().top}, "slow");
	});

		//ESQUENTA
		$('#btn-esquenta').click(function(){
		   $('body,html').animate({scrollTop: $(".esquenta").offset().top}, "slow");
		});

		//AGENDA
		$('#btn-agenda').click(function(){
		   $('body,html').animate({scrollTop: $(".agenda").offset().top}, "slow");
		});


		//---ITENS AGENDA
		var removeClasse = function(){
			$('.itens-agenda').removeClass('active');
		}
		$('.itens-agenda').mouseover(function(){
		   $(this).css('cursor','pointer');
		});
		$('.itens-agenda').click(function(){
			removeClasse();
			$(this).addClass('active');
		})

		//ESTADOS
		$('.salvador').css('display', 'none');
		$('.recife').css('display', 'none');
		$('.sao-paulo').css('display', 'none');

		$('#agenda-rio').click(function() {
			$('.slider-agenda').css('display', 'none');
			$('.rio-janeiro').slideDown('slow');
		});

		$('#agenda-salvador').click(function() {
			$('.slider-agenda').css('display', 'none');
			$('.salvador').slideDown('slow');
		});

		$('#agenda-recife').click(function() {
			$('.slider-agenda').css('display', 'none');
			$('.recife').slideDown('slow');
		});

		$('#agenda-saoPaulo').click(function() {
			$('.slider-agenda').css('display', 'none');
			$('.sao-paulo').slideDown('slow');
		});

		//HISTORIA
		$('#btn-historia').click(function(){
		   $('body,html').animate({scrollTop: $(".historia").offset().top}, "slow");
		});

		//ALTERNATIVAS
		$('#btn-alternativas').click(function(){
		   $('body,html').animate({scrollTop: $(".alternativas").offset().top}, "slow");
		});

		$('.rock').css('display', 'none');
		$('.kids').css('display', 'none');
		$('.cidade').css('display', 'none');
		$('.lgbt').css('display', 'none');

		//ICONES
		$('#btn-igreja').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.igreja').slideDown('slow');

			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".igreja").offset().top}, "slow");
			},800);
		});

		$('#btn-kids').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.kids').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".kids").offset().top}, "slow");
			},800);
		});

		$('#btn-rock').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.rock').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".rock").offset().top}, "slow");
			},800);
		});

		$('#btn-cidade').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.cidade').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".cidade").offset().top}, "slow");
			},800);
		});

		$('#btn-lgbt').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.lgbt').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".lgbt").offset().top}, "slow");
			},800);
		});

		//ESTRADA
		$('#btn-estrada').click(function(){
		   $('body,html').animate({scrollTop: $(".estrada").offset().top}, "slow");
		});
		//DICAS
		$('#btn-dicas').click(function(){
		   $('body,html').animate({scrollTop: $(".dicas").offset().top}, "slow");
		});

		$('.seguranca').css('display', 'none');
		$('.mascaras').css('display', 'none');
		$('.faca-voce').css('display', 'none');

		$('#dicas-seguranca').click(function() {
			$('.slide-dicas').css('display', 'none');
			$('.seguranca').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".seguranca").offset().top}, "slow");
			},800);
		});

		$('#dicas-saude').click(function() {
			$('.slide-dicas').css('display', 'none');
			$('.saude').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".saude").offset().top}, "slow");
			},800);
		});

		$('#dicas-mascaras').click(function() {
			$('.slide-dicas').css('display', 'none');
			$('.mascaras').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".mascaras").offset().top}, "slow");
			},800);
		});

		$('#dicas-faca').click(function() {
			$('.slide-dicas').css('display', 'none');
			$('.faca-voce').slideDown('slow');
			setTimeout(function(){
				$('body,html').animate({scrollTop: $(".faca-voce").offset().top}, "slow");
			},800);
		});

		//VIDEOS
		$('#btn-videos').click(function(){
		   $('body,html').animate({scrollTop: $(".videos").offset().top}, "slow");
		});

		//AO VIVO
		//OLHAR DEPOIS
        // var scrollTrigger = 1200

        // backToTop = function () {
        //     var scrollTop = $(window).scrollTop();
        //     if (scrollTop > scrollTrigger) {
        //         $('.btn-topo').fadeIn();
        //     } else {
        //         $('.btn-topo').fadeOut();
        //     }
        // };

        // backToTop();

        // $(window).on('scroll', function () {
        //     backToTop();
        // });
		$('#btn-aoVivo').animate({
			'margin-bottom' : '0px'
		}, 400);

		function animateRec (){
				$('.btn-rec').animate({
					"opacity" : 0 }
					, 700, function() {
					$('.btn-rec').animate({
						"opacity": 1
					}, 700, function() {
						animateRec();
					});
			});
		}

		animateRec();

		$('#btn-aoVivo').click(function(){
		   $('body,html').animate({scrollTop: $(".cobertura").offset().top}, "slow");
		});

	// MENU LATERAL
	$('#btn-fechar').click(function() {
		$('.menu-lateral').animate({
			"margin-left":"-130px"
		}, function(){
			$('.btn-menu-aparece').animate({
				'margin-left':'0px'
			});
		});
	});

	$('.btn-menu-aparece').click(function() {
		$('.btn-menu-aparece').animate({
				'margin-left':'-130px'
			}, function(){
				$('.menu-lateral').animate({
						"margin-left":"0px"
				})
			});
	});

		//START
		if ($(window).width()> 479){
				setTimeout(function(){
			   $('.menu-lateral').animate({
					"margin-left":"0px"
				})
			},2000);
		}else{
			$('.btn-menu-aparece').animate({
				'margin-left':'0px'
			});
		};
		//FB GALERIA
		Galleria.loadTheme('https://rawgit.com/fatoonline/carnaval-2016/master/themes/classic/galleria.classic.min.js');
		Galleria.run('.galleria');

		//FOTOS
		var fotos = [
         "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/9169_991249520968816_9166445224358772275_n.jpg?oh=fafe2777d1e79f52d0cbe582762c3116&oe=573A8D4C&__gda__=1462312834_c99eabbe95e6784f772005f7f2a96332",

         "https://www.facebook.com/fatoonline/photos/a.1023668760987245.1073741838.839582699395853/1023668780987243/?type=3&theater"
		]

		for( foto in fotos) {
			$(".galleria").append("<img src=" + fotos[foto] + ">");
		}

});
