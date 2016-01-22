$(document).ready(function(){

		$('body,html').animate({scrollTop: $(".header").offset().top}, "slow");
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

		//ICONES
		$('#btn-igreja').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.igreja').slideDown('slow');
		});

		$('#btn-kids').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.kids').slideDown('slow');
		});

		$('#btn-rock').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.rock').slideDown('slow');
		});

		$('#btn-cidade').click(function() {
			$('.slide-alternativas').css('display', 'none');
			$('.cidade').slideDown('slow');
		});

		//ESTRADA
		$('#btn-estrada').click(function(){
		   $('body,html').animate({scrollTop: $(".estrada").offset().top}, "slow"); 
		});
		//DICAS
		$('#btn-dicas').click(function(){
		   $('body,html').animate({scrollTop: $(".dicas").offset().top}, "slow"); 
		});
		//DICAS
		$('#btn-dicas').click(function(){
		   $('body,html').animate({scrollTop: $(".dicas").offset().top}, "slow"); 
		});
		//VIDEOS
		$('#btn-videos').click(function(){
		   $('body,html').animate({scrollTop: $(".videos").offset().top}, "slow"); 
		});

	// MENU LATERAL
	$('#btn-fechar').click(function() {
		$('.menu-lateral').animate({
			"margin-left":"-125px"
		}, function(){
			$('.btn-menu-aparece').show('slow');
		});
	});

	$('.btn-menu-aparece').click(function() {
		$(this).hide('slow');
		$('.menu-lateral').animate({
				"margin-left":"0px"
		}) 
	});

		//START
		if ($(window).width()> 479){
				setTimeout(function(){
			   $('.menu-lateral').animate({
					"margin-left":"0px"
				}) 
			},2000);
		}else{
			$('.btn-menu-aparece').show('slow');
		};
	});