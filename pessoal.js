
2+3-$(document).ready(function(){

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
		//$('.lgbt').css('display', 'none');
		$('.igreja').css('display', 'none');

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
		//$('.saude').css('display', 'none');
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

		//bloco Pacotao

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/12669510_1027584010595720_9035943853429774360_n.jpg?oh=42e9edb080c9dd928a29a755340c62b8&oe=572A772E",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/12647514_1027584033929051_6445007209195696095_n.jpg?oh=9a54b750d75ade0a0c375141cc40c2fd&oe=576B314C",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12654466_1027584053929049_2179735895464808850_n.jpg?oh=6fe3fdd2c110b619df8998e6883f7adf&oe=572DC84A",

		"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/12647270_1027584063929048_162653133322489942_n.jpg?oh=8ce71ea4621357a38dd582fac1e1fe04&oe=5767F830&__gda__=1462076858_bc4a40cb4a5ad3567ecf66f73cedd953",

		"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/12687941_1027584077262380_2669174345737640498_n.jpg?oh=7f71631ede078900831d5032e438144d&oe=57299E20&__gda__=1462118918_3ed30d7cb758e88c6bf3bfa4a19d0d12",


		//bloco baratinha

		"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12715198_1027167380637383_6342063602912790086_n.jpg?oh=46c235197bc3078386711d0b9d398b1e&oe=577081D1&__gda__=1462252844_838c96e50a6b512d1af22b7722d9cc73",

		"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12688135_1027167370637384_4506327455734176050_n.jpg?oh=8bba21e4fd2d228fb64bef9e98ced61a&oe=576C1E66&__gda__=1462589273_92878b956cb67c6dbb497b621c4da9a0",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/12654683_1027167340637387_6340027807611971175_n.jpg?oh=183856d45c66d7ed610fd7cf6df5cf81&oe=576D5C1B",

		"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12688259_1027167333970721_5161594371263871321_n.jpg?oh=882075eecd6846270162c31251d9e1b9&oe=57323F31&__gda__=1462916705_86635a692114e7890dd230e600d533cb",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12705657_1027167307304057_1890501917389463869_n.jpg?oh=7102928e5bc4c280a7acaacd6d840100&oe=573A4915",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12644918_1027167300637391_9058787634988145318_n.jpg?oh=59d878d9f0dce2eeea46f8957f075527&oe=5767FA70",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/12654548_1027167250637396_4267713003452842540_n.jpg?oh=662f1737cadff373167c04321f6f5fae&oe=57361FE6",

		"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/12654349_1027167240637397_1841306314010552585_n.jpg?oh=8456f0c442c481b25bcc83bf8d2ad097&oe=57665213&__gda__=1463149208_b2e21c0d181b9773491079c32fe63734",

		"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/12662688_1027167230637398_403427901000391868_n.jpg?oh=a73238e7ce52e0dc02155317df0615c8&oe=576FAE3F&__gda__=1463396231_fd8c782fdad0ca3668bb0d6ed250ee04",

		"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12670178_1027167210637400_3013570440359475506_n.jpg?oh=6cd6e062836c9540ab56f0ad9b2cd23f&oe=5725E7F7&__gda__=1462031015_b6f3e59778a0b3c7c1ac7c87f67871bb",

		//bloco babydoll

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/942804_1026733064014148_3070112081183248261_n.jpg?oh=8990541e200a0c1b980db1b46f7799ac&oe=57325FE8",

		"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xlp1/v/t1.0-9/12039206_1026733070680814_1884848243593720726_n.jpg?oh=29b4abd1f576c3abc132db0f5cfecd52&oe=576E4A7D&__gda__=1462832488_0cd4df10f960ffe464d0d440e31236c2",

		"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xat1/v/t1.0-9/12688324_1026733140680807_5503383005045531477_n.jpg?oh=8bfc00745f0200fc9e14669a01521c37&oe=5730262F&__gda__=1463253543_3135e51b689790d8dee2f7a0d2e9e40c",

		"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/12669428_1026733134014141_6037510689557675484_n.jpg?oh=a3ae76c3703645774579c0407c2a4496&oe=573B43AE&__gda__=1467011208_8b06d3d815c4edff8af8036d99056c9e",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/l/t1.0-9/12644724_1026733170680804_8880988292309238507_n.jpg?oh=bb3a16bd9a39358be9e2f5efd5de2dfb&oe=5731B6DD",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12662500_1026733174014137_3806861011619998739_n.jpg?oh=6c5178f4a85f06412c86afe14aa50f33&oe=5737DF83",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12705451_1026733264014128_156322886217976439_n.jpg?oh=fe095461022149b93e1db5612ef9f02f&oe=573AC8CA",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/12654513_1026733290680792_8266697472218657631_n.jpg?oh=3abba4e5eea3458c13d4c3d54b2e088b&oe=572E4E23",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12647561_1026733330680788_3146248225312369311_n.jpg?oh=9f68a249e35d6554b63b762f1e2ac791&oe=572B7E6D",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12644808_1026733354014119_158845572834163439_n.jpg?oh=ec3cc29de89632f141e414821f0d9971&oe=5727A444",

		"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-9/12670275_1026733364014118_6139821084841434593_n.jpg?oh=aa0a50ef01cc43b1f66e8d1b651834f0&oe=57709262&__gda__=1461892066_1a89fe642c030d9eb8d48d7bcf96841b",

		"https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/12644885_1026733387347449_3176311395399801187_n.jpg?oh=35df3699e7af2fd0dfe6c0f31857f351&oe=573E85D5",

		//bloco galo

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12661837_1023736520980469_6838115131241102817_n.jpg?oh=cad48ea451cb6f3840a6b992af00498f&oe=57265C5C",

         "https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/12592686_1023736524313802_466564578085772679_n.jpg?oh=4c8576c310089063cf675aacd9059d9b&oe=572785FE&__gda__=1462485364_3a6b1736f27f79df11a0afd10ae403dd",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12642650_1023736550980466_1850261696820539735_n.jpg?oh=3a2c0aa042097318cbb08e0f7326b375&oe=57711AD1",

         "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12654661_1023736567647131_3320286502924056281_n.jpg?oh=80b51006c411561ddd497aa8721c0dc5&oe=57380792&__gda__=1462866349_96cec0ea4307e0d2ce1de4e1e9dff562",

         "https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpt1/v/t1.0-9/12645075_1023736614313793_5096800475162240439_n.jpg?oh=5382a999445643a67e2249a547a53970&oe=57460C34&__gda__=1462385844_218c593333a5bf9e9f0bbc9e19a7178b",

         "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12644646_1023736634313791_8828697474246851193_n.jpg?oh=387179802cda72f9bc4bf3806ba44c06&oe=5747C54A&__gda__=1464287605_fe4c253d7fa802e801877f10a746f0a6",

         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12651299_1023736670980454_5793327555347809904_n.jpg?oh=64b9c46d4cb2e22fb0cce9e8ae87633c&oe=573B09F0",

		//loira pirata
         "https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/12654357_1023736717647116_7507204915480326898_n.jpg?oh=a16bc5244b6ded410a9e934a0c8b5334&oe=573429E6&__gda__=1464091726_b70ef37014092e7449d46d378d6c5aec",

         //crianças
         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/12644732_1023736747647113_8220034851171589483_n.jpg?oh=709c2180ff80fae9d6ad41536ac7de5e&oe=5738E2A3",

         //wpp
         "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12661849_1023736774313777_323236879834583002_n.jpg?oh=557a43f2afe457722253fa1c158df7ce&oe=5742783E&__gda__=1462441300_97c068c3be3e52e92cd447ff7e711cc6",

         //peruca
         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12654372_1023736790980442_6573246842455953041_n.jpg?oh=6be5f2b708157c0dffbdcdb1b1b02780&oe=5735E2F5",

         //cachorro
         "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12651299_1023736810980440_8566206907954691321_n.jpg?oh=025b56b853d87884cbb80299ca6dfd65&oe=572FB745&__gda__=1464158904_5db05a381563ac8eea1696e93f803d0d",

         "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/12650928_1023736830980438_5065717112339389457_n.jpg?oh=6ddafdbec87c6b52cf76ce29e57267c2&oe=57296062&__gda__=1463586762_1cb076ea8dfbcb00bb7cf264a3b25c5e",

         "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfa1/v/t1.0-9/12512809_1023736840980437_7091182570944588905_n.jpg?oh=33fcee58f0bbb2f0e4c115d4bbff65eb&oe=5771B556&__gda__=1462458589_710414843edc6b43f0fa36a9f5199cee",

         //chama o xamu
         "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/12592686_1023736854313769_1280073079102108471_n.jpg?oh=cd79c3ac74a3b9493a271876ae830000&oe=574088E9&__gda__=1467059158_ae0406809b7739d05ffadc2c35aa6e98",

         //gatas
         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12662461_1023736880980433_5599116498230008318_n.jpg?oh=60ec09b9b577d95aad6f2a8ec6aab71c&oe=5727DE00",

         //farao
         "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/12642803_1023736927647095_8034115218393480036_n.jpg?oh=a0a392f9f6caf76d7959be84dfe92c6f&oe=5726592D&__gda__=1462182525_faf4659de17b594c1c10540ee52d2c38",

         //baloes
         "https://scontent-mia1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12642834_1023736937647094_1363447087991018512_n.jpg?oh=c7a885aad5ede0d539375f0faf26d590&oe=573AE0AA"

		]

		var imgs = '';
		for( foto in fotos) {
				imgs += "<img src=" + fotos[foto] + ">";
		}

		$(".galleria").html(imgs);
});
