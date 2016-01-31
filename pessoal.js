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
         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12654599_1023668794320575_6546645095861256478_n.jpg?oh=2293a51c4eff19b0ef05b619e2cf91e7&oe=5744374D",

         "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/12642807_1023668780987243_8007148106614537869_n.jpg?oh=877a33b597c93184c983dfe07d6d35c0&oe=573462F1&__gda__=1462684616_c12472887142b636ccd35251c9ca539d",

         "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/12662601_1023668800987241_8379397480177873070_n.jpg?oh=94be88edcea5d13bed8208906edb8dba&oe=573A475D&__gda__=1463635772_af142d9ceac7c88af3fbe5f9c4cc0caf",

         "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/12642515_1023668817653906_9070470061726756936_n.jpg?oh=92c768223a8e14de85fd49cd8d17683e&oe=573F085D&__gda__=1463119830_d805c15c16cdfe117d4086cc58b9d517",

         "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12524067_1023668824320572_448617808477216016_n.jpg?oh=0d6db4582cb0b695cc754795da321a61&oe=5739A518&__gda__=1463570065_8d778c22b39d3a6681ebb57e2dbeb516",

         "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/944039_1023668860987235_8341490579703902858_n.jpg?oh=3f78ffbc5415df560811897b524fb16d&oe=573A7CDF&__gda__=1463787407_db4df9296a86c98499ae59e98a8a943e",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/12670559_1023668870987234_9066254119803925604_n.jpg?oh=9e46b6c84dd2652144274eb71d3eb15a&oe=5728F69C",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/12592284_1023668880987233_6946837717565976256_n.jpg?oh=48c805fe4d4aecb229063af334fc6b7e&oe=572527F4",

         "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xtl1/v/t1.0-9/10306770_1023668890987232_4096587483568083280_n.jpg?oh=87cbbb06699ad64df90b6d56a7a63465&oe=5727F387&__gda__=1464288180_7638ffc0cf9c11426058fec7d3caf5ab",

         "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/12647338_1023668920987229_1295979832360035401_n.jpg?oh=bfdd0e65ecb7fed7b99428b5d7a55d0d&oe=57409F63&__gda__=1462232389_4f6f2e4bf1509b40b20e8bf8da899761",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12651020_1023668930987228_4333410280990848748_n.jpg?oh=6f054790f9420ea6082ddf4c17333b9e&oe=572F148E",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12662494_1023668944320560_7078081515895772844_n.jpg?oh=fbf1b50ca788073236e70d3254d46719&oe=573FF45B"



		]

		for( foto in fotos) {
			$(".galleria").append("<img src=" + fotos[foto] + ">");
		}

});
