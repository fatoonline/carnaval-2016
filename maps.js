$(document).ready(function(){
  //ESQUENTA 01
  function esquenta01(){
    var mapEsquenta01 = document.getElementById('maps-esquenta');
    var mapOptionsEsquenta = {
      center: new google.maps.LatLng(-15.78666484, -47.88785934),
      zoom: 15,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapEsquenta01, mapOptionsEsquenta)
    //PIN 01
    var pinEsquenta01 = {lat:-15.78923898, lng: -47.89664626};
    var markerPinEsquenta01 = new google.maps.Marker({
      position: pinEsquenta01,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentEsquenta01 = '<b>Suvaco da Asa</b>, O Suvaco da Asa chega para mostrar que o carnaval é a festa mais democrática e espontânea do Brasil'+
      '<br><a href="http://maps.google.com/maps?q=loc: -15.78923898,-47.89664626" target="_blank">Abrir no mapa</a>';
      
      var infoEsquenta01 = new google.maps.InfoWindow({
        content: contentEsquenta01,
        maxWidth: 300
      });
      markerPinEsquenta01.addListener('click', function() {
        infoEsquenta01.open(map, markerPinEsquenta01);
      });

      //PIN 02
    var pinEsquenta02 = {lat:-15.78371813, lng: -47.87700042};
    var markerPinEsquenta02 = new google.maps.Marker({
      position: pinEsquenta02,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentEsquenta02 = '<b>Maria Vai Casoutras</b>, Maria Vai Casoutras é um bloco cuja banda é formada exclusivamente por mulheres. Promete animar o carnaval 2016!'+
      '<br><a href="http://maps.google.com/maps?q=loc: -15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infoEsquenta02 = new google.maps.InfoWindow({
        content: contentEsquenta02,
        maxWidth: 300
      });
      markerPinEsquenta02.addListener('click', function() {
        infoEsquenta02.open(map, markerPinEsquenta02);
      });

      markerPinEsquenta01.setMap(map);
      markerPinEsquenta02.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', esquenta01);

  //--------------------------------------------------------------------
  //ESQUENTA 02
  function esquenta02(){
    var mapEsquenta02 = document.getElementById('maps-esquenta02');
    var mapOptionsEsquenta02 = {
      center: new google.maps.LatLng(-15.7942287, -47.8821658),
      zoom: 10,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapEsquenta02, mapOptionsEsquenta02)

  //PIN01-02
  var pinEsq0102 = {lat:-15.78923898, lng: -47.89664626};
    var markerPinEsq0102 = new google.maps.Marker({
      position: pinEsq0102,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0102 = '<b>Encosta que Cresce</b>, Bloco formado a partir da amizade e que tem o único objetivo de trazer muita diversão e muitos batuques ao carnaval!'+
      '<br><a href="http://maps.google.com/maps?q=loc: -15.78923898,-47.89664626" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0102 = new google.maps.InfoWindow({
        content: contentpinEsq0102,
        maxWidth: 300
      });
      markerPinEsq0102.addListener('click', function() {
        infopinEsq0102.open(map, markerPinEsq0102);
      });
      markerPinEsq0102.setMap(map);

    //pinEsq0202
  var pinEsq0202 = {lat:-15.79927368, lng: -47.88319498};
    var markerpinEsq0202 = new google.maps.Marker({
      position: pinEsq0202,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0202 = '<b>Galo Cego</b>, O repertório desse bloco vai desde as marchinhas clássicas até o mais puro rock. Foi criado como uma roda de samba entre amigos e, com o passar dos anos, foi ficando mais profissional'+
      '<br><a href="http://maps.google.com/maps?q=loc:-15.78923898,-47.89664626" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0202 = new google.maps.InfoWindow({
        content: contentpinEsq0202,
        maxWidth: 300
      });
      markerpinEsq0202.addListener('click', function() {
        infopinEsq0202.open(map, markerpinEsq0202);
      });
      markerpinEsq0202.setMap(map);

    //pinEsq0302
  var pinEsq0302 = {lat:-15.88162824, lng: -47.97542542};
    var markerpinEsq0302 = new google.maps.Marker({
      position: pinEsq0302,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0302 = '<b>Gugu Dadá</b>, Um dos blocos tradicionais do Núcleo Bandeirante, inspirara-se em alguns deputados que parecem uns bebês querendo chupeta no plenário.'+
      '<br><a href="http://maps.google.com/maps?q=loc:-15.88162824,-47.97542542" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0302 = new google.maps.InfoWindow({
        content: contentpinEsq0302,
        maxWidth: 300
      });
      markerpinEsq0302.addListener('click', function() {
        infopinEsq0302.open(map, markerpinEsq0302);
      });
      markerpinEsq0302.setMap(map);

  //pinEsq0402
  var pinEsq0402 = {lat:-15.78371813, lng: -47.87700042};
    var markerpinEsq0402 = new google.maps.Marker({
      position: pinEsq0402,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0402 = '<b>Samba do Peleja</b>, O Samba do Peleja é formado por sambistas amadores que buscam manter o ritmo e a animação'+
      '<br><a href="http://maps.google.com/maps?q=loc:-15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0402 = new google.maps.InfoWindow({
        content: contentpinEsq0402,
        maxWidth: 300
      });
      markerpinEsq0402.addListener('click', function() {
        infopinEsq0402.open(map, markerpinEsq0402);
      });
      markerpinEsq0402.setMap(map);

    //pinEsq0502
  var pinEsq0502 = {lat:-15.79251167, lng: -47.87953109};
    var markerpinEsq0502 = new google.maps.Marker({
      position: pinEsq0502,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0502 = '<b>Tuthankasmona – Tombando a Pyramide</b>, Esse é um dos mais novos blocos da Capital e usa como inspiração uma famosa lenda urbana que associa o ex-presidente JK com as mitologias do antigo Egito'+'<br><a href="http://maps.google.com/maps?q=loc:-15.79251167,-47.87953109" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0602 = new google.maps.InfoWindow({
        content: contentpinEsq0502,
        maxWidth: 300
      });
      markerpinEsq0502.addListener('click', function() {
        infopinEsq0502.open(map, markerpinEsq0502);
      });
      markerpinEsq0502.setMap(map);

    //pinEsq0602
  var pinEsq0602 = {lat: -15.78701586, lng: -47.91648388};
    var markerpinEsq0602 = new google.maps.Marker({
      position: pinEsq0602,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0602 = '<b>Fio Desencapado</b>, O bloco Fio Desencapado chega para abrir as festas momescas de Brasília com muita alegria e com o show do grande intérprete da escola de samba carioca Porto da Pedra'+'<br><a href="http://maps.google.com/maps?q=loc:-15.78701586,-47.91648388" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0602 = new google.maps.InfoWindow({
        content: contentpinEsq0602,
        maxWidth: 300
      });
      markerpinEsq0602.addListener('click', function() {
        infopinEsq0602.open(map, markerpinEsq0602);
      });
      markerpinEsq0602.setMap(map);

    //pinEsq0702
  var pinEsq0702 = {lat: -15.8002381, lng: -47.8835374};
    var markerpinEsq0702 = new google.maps.Marker({
      position: pinEsq0702,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinEsq0702 = '<b>Acabou o Gás</b>, Foi criado no ano passado pelo DJ Nagô e sua Urukombi e chega para movimentar Brasília, inspirado pelo  bloco Aparelhinho'+'<br><a href="http://maps.google.com/maps?q=loc:-15.8002381,-47.8835374" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0702 = new google.maps.InfoWindow({
        content: contentpinEsq0702,
        maxWidth: 300
      });
      markerpinEsq0702.addListener('click', function() {
        infopinEsq0702.open(map, markerpinEsq0702);
      });
      markerpinEsq0702.setMap(map);

  }
  google.maps.event.addDomListener(window, 'load', esquenta02);

  //--------------------------------------------------------------------
  //ESQUENTA 03
  function esquenta03(){
    var mapEsquenta03 = document.getElementById('maps-esquenta03');
    var mapOptionsEsquenta03 = {
      center: new google.maps.LatLng(-15.7942287, -47.8821658),
      zoom: 10,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapEsquenta03, mapOptionsEsquenta03);

    //pinEsq0103
  var pinEsq0103 = {lat: -15.78810935, lng: -47.87962765};
    var markerpinEsq0103 = new google.maps.Marker({
      position: pinEsq0103,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentpinEsq0103 = '<b>Cafuçu do Cerrado</b>, O bloco se autodeclara como "a festa mais deselegante de Brasília"'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.78810935,-47.87962765" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0103 = new google.maps.InfoWindow({
        content: contentpinEsq0103,
        maxWidth: 300
      });
      markerpinEsq0103.addListener('click', function() {
        infopinEsq0103.open(map, markerpinEsq0103);
      });
      markerpinEsq0103.setMap(map);

    //pinEsq0203
  var pinEsq0203 = {lat: -15.78371813, lng: -47.87700042};
    var markerpinEsq0203 = new google.maps.Marker({
      position: pinEsq0203,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentpinEsq0203 = '<b>Falta Pouco</b>, O bloco promete trazer alegria aos brasilienses, independentemente do estilo musical: se é música boa e tem requebrado, eles estão tocando'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0203 = new google.maps.InfoWindow({
        content: contentpinEsq0203,
        maxWidth: 300
      });
      markerpinEsq0203.addListener('click', function() {
        infopinEsq0203.open(map, markerpinEsq0203);
      });
      markerpinEsq0203.setMap(map);

      //pinEsq0303
  var pinEsq0303 = {lat: -15.76672791, lng: -47.88273096};
    var markerpinEsq0303 = new google.maps.Marker({
      position: pinEsq0303,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentpinEsq0303 = '<b>Eixão 44</b>, Um coletivo formado exlusivamente por lésbicas e que se abre para toda a comunidade. O carro que puxa a torcida é um carrinho de supermercado customizado e que toca músicas de grandes mulheres do passado'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0303 = new google.maps.InfoWindow({
        content: contentpinEsq0303,
        maxWidth: 300
      });
      markerpinEsq0303.addListener('click', function() {
        infopinEsq0303.open(map, markerpinEsq0303);
      });
      markerpinEsq0303.setMap(map);

      //pinEsq0403
  var pinEsq0403 = {lat: -15.78371813, lng: -47.87700042};
    var markerpinEsq0403 = new google.maps.Marker({
      position: pinEsq0403,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentpinEsq0403 = '<b>Bloco Libre</b>, Bloco que busca estimular a diversidade cultural e a conciência ambiental com toda a alegria e a diversão que o carnaval de Brasília merece'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0403 = new google.maps.InfoWindow({
        content: contentpinEsq0403,
        maxWidth: 300
      });
      markerpinEsq0403.addListener('click', function() {
        infopinEsq0403.open(map, markerpinEsq0403);
      });
      markerpinEsq0403.setMap(map);

      //pinEsq0503
  var pinEsq0503 = {lat: -15.7862346, lng: -47.9381158};
    var markerpinEsq0503 = new google.maps.Marker({
      position: pinEsq0503,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      map: map
    });
    var contentpinEsq0503 = '<b>Gagá...vião</b>, O bloco foi formado por um grupo de seis amigos cariocas que buscavam trazer de volta a animação do carnaval de rua do Cruzeiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.7862346,-47.9381158" target="_blank">Abrir no mapa</a>';
      
      var infopinEsq0503 = new google.maps.InfoWindow({
        content: contentpinEsq0503,
        maxWidth: 300
      });
      markerpinEsq0503.addListener('click', function() {
        infopinEsq0503.open(map, markerpinEsq0503);
      });
      markerpinEsq0503.setMap(map);

  }
  google.maps.event.addDomListener(window, 'load', esquenta03);

  //--------------------------------------------------------------------
  //AGENGA
  function agendaBrasilia() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(-15.7942287, -47.8821658),
      zoom: 11  ,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    

    //pinAge0101
  var pinAge0101 = {lat: -15.78371813, lng: -47.87700042};
    var markerpinAge0101 = new google.maps.Marker({
      position: pinAge0101,
       icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinAge0101 = '<b>Rejunta meu Bulcão</b>, dia 02 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.78371813,-47.87700042" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0101 = new google.maps.InfoWindow({
        content: contentpinAge0101,
        maxWidth: 300
      });
      markerpinAge0101.addListener('click', function() {
        infopinAge0101.open(map, markerpinAge0101);
      });
      markerpinAge0101.setMap(map);


      //pinAge0201
  var pinAge0201 = {lat: -15.7836639, lng: -47.9152333};
    var markerpinAge0201 = new google.maps.Marker({
      position: pinAge0201,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinAge0201 = '<b>Babydoll de Nylon</b>, dia 06 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.7836639,-47.9152333" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0201 = new google.maps.InfoWindow({
        content: contentpinAge0201,
        maxWidth: 300
      });
      markerpinAge0201.addListener('click', function() {
        infopinAge0201.open(map, markerpinAge0201);
      });
      markerpinAge0201.setMap(map);


      //pinAge0301
  var pinAge0301 = {lat: -15.80515456, lng: -47.91409135};
    var markerpinAge0301 = new google.maps.Marker({
      position: pinAge0301,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinAge0301 = '<b>Antibloco do 5uinto</b>, dia 06 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.80515456,-47.91409135" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0301 = new google.maps.InfoWindow({
        content: contentpinAge0301,
        maxWidth: 300
      });
      markerpinAge0301.addListener('click', function() {
        infopinAge0301.open(map, markerpinAge0301);
      });
      markerpinAge0301.setMap(map);


      //pinAge0401
  var pinAge0401 = {lat: -15.8262301, lng: -48.0575948};
    var markerpinAge0401 = new google.maps.Marker({
      position: pinAge0401,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinAge0401 = '<b>Asé Dudu</b>, 06 e 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.8262301,-48.0575948" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0401 = new google.maps.InfoWindow({
        content: contentpinAge0401,
        maxWidth: 300
      });
      markerpinAge0401.addListener('click', function() {
        infopinAge0401.open(map, markerpinAge0401);
      });
      markerpinAge0401.setMap(map);


      //pinAge0501
  var pinAge0501 = {lat: -15.77380053, lng: -47.88608372};
    var markerpinAge0501 = new google.maps.Marker({
      position: pinAge0501,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map: map
    });
    var contentpinAge0501 = '<b>Concentra, Mas Não Sai</b>, dia 06 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.77380053,-47.88608372" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0501 = new google.maps.InfoWindow({
        content: contentpinAge0501,
        maxWidth: 300
      });
      markerpinAge0501.addListener('click', function() {
        infopinAge0501.open(map, markerpinAge0501);
      });
      markerpinAge0501.setMap(map);


      //pinAge0601
  var pinAge0601 = {lat: -15.81176131, lng: -47.90160835};
    var markerpinAge0601 = new google.maps.Marker({
      position: pinAge0601,
      map: map
    });
    var contentpinAge0601 = '<b>Agoniza, Mas Não Morre</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.81176131,-47.90160835" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0601 = new google.maps.InfoWindow({
        content: contentpinAge0601,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge0601.addListener('click', function() {
        infopinAge0601.open(map, markerpinAge0601);
      });
      markerpinAge0601.setMap(map);


      //pinAge0701
  var pinAge0701 = {lat: -15.8228323, lng: -48.09989333};
    var markerpinAge0701 = new google.maps.Marker({
      position: pinAge0701,
      map: map
    });
    var contentpinAge0701 = '<b>Baile do Confronto</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.8228323,-48.09989333" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0701 = new google.maps.InfoWindow({
        content: contentpinAge0701,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge0701.addListener('click', function() {
        infopinAge0701.open(map, markerpinAge0701);
      });
      markerpinAge0701.setMap(map);


      //pinAge0801
  var pinAge0801 = {lat: -15.79626091, lng: -47.88760722};
    var markerpinAge0801 = new google.maps.Marker({
      position: pinAge0801,
      map: map
    });
    var contentpinAge0801 = '<b>Bloco do Amor</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.79626091,-47.88760722" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0801 = new google.maps.InfoWindow({
        content: contentpinAge0801,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge0801.addListener('click', function() {
        infopinAge0801.open(map, markerpinAge0801);
      });
      markerpinAge0801.setMap(map);


            //pinAge0901 Bloco do BEM MEB
  var pinAge0901 = {lat: -15.790628, lng: -47.8929484};
    var markerpinAge0901 = new google.maps.Marker({
      position: pinAge0901,
      map: map
    });
    var contentpinAge0901 = '<b>Bloco do BEM MEB</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.790628,-47.8929484" target="_blank">Abrir no mapa</a>';
      
      var infopinAge0901 = new google.maps.InfoWindow({
        content: contentpinAge0901,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge0901.addListener('click', function() {
        infopinAge0901.open(map, markerpinAge0901);
      });
      markerpinAge0901.setMap(map);


        //pinAge1001 Concentra, Mas Não Sai 
  var pinAge1001 = {lat: -15.77380053, lng: -47.88608372};
    var markerpinAge1001 = new google.maps.Marker({
      position: pinAge1001,
      map: map
    });
    var contentpinAge1001 = '<b>Concentra, Mas Não Sai</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.77380053,-47.88608372" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1001 = new google.maps.InfoWindow({
        content: contentpinAge1001,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1001.addListener('click', function() {
        infopinAge1001.open(map, markerpinAge1001);
      });
      markerpinAge1001.setMap(map);


       //pinAge1101 Bloco dos Raparigueiros
  var pinAge1101 = {lat: -15.800038, lng: -47.899966};
    var markerpinAge1101 = new google.maps.Marker({
      position: pinAge1101,
      map: map
    });
    var contentpinAge1101 = '<b>Bloco dos Raparigueiros</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.800038,-47.899966" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1101 = new google.maps.InfoWindow({
        content: contentpinAge1101,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1101.addListener('click', function() {
        infopinAge1101.open(map, markerpinAge1101);
      });
      markerpinAge1101.setMap(map);


         //pinAge1201 Populares em Pânico
  var pinAge1201 = {lat: -15.75668126, lng: -47.89175391};
    var markerpinAge1201 = new google.maps.Marker({
      position: pinAge1201,
      map: map
    });
    var contentpinAge1201 = '<b>Populares em Pânico</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.75668126,-47.89175391" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1201 = new google.maps.InfoWindow({
        content: contentpinAge1201,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1201.addListener('click', function() {
        infopinAge1201.open(map, markerpinAge1201);
      });
      markerpinAge1201.setMap(map);


         //pinAge1301 Segura o Grave Aê
  var pinAge1301 = {lat: -15.75668126, lng: -47.89175391};
    var markerpinAge1301 = new google.maps.Marker({
      position: pinAge1301,
      map: map
    });
    var contentpinAge1301 = '<b>Segura o Grave Aê</b>, dia 07 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.75668126,-47.89175391" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1301 = new google.maps.InfoWindow({
        content: contentpinAge1301,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1301.addListener('click', function() {
        infopinAge1301.open(map, markerpinAge1301);
      });
      markerpinAge1301.setMap(map);


         //pinAge1401 Aparelhinho
  var pinAge1401 = {lat: -15.79927368, lng: -47.88319498};
    var markerpinAge1401 = new google.maps.Marker({
      position: pinAge1401,
      map: map
    });
    var contentpinAge1401 = '<b>Aparelhinho</b>, dia 08 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.79927368,-47.88319498" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1401 = new google.maps.InfoWindow({
        content: contentpinAge1401,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1401.addListener('click', function() {
        infopinAge1401.open(map, markerpinAge1401);
      });
      markerpinAge1401.setMap(map);


      //pinAge1501 Bloco das Divinas Tretas
  var pinAge1501 = {lat: -15.79927368, lng: -47.88319498};
    var markerpinAge1501 = new google.maps.Marker({
      position: pinAge1501,
      map: map
    });
    var contentpinAge1501 = '<b>Bloco das Divinas Tretas</b>, dia 08 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.79927368,-47.88319498" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1501 = new google.maps.InfoWindow({
        content: contentpinAge1501,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1501.addListener('click', function() {
        infopinAge1501.open(map, markerpinAge1501);
      });
      markerpinAge1501.setMap(map);


      //pinAge1601 Bloco do Galinho
  var pinAge1601 = {lat: -15.79927368, lng: -47.88319498};
    var markerpinAge1601 = new google.maps.Marker({
      position: pinAge1601,
      map: map
    });
    var contentpinAge1601 = '<b>Bloco do Galinho</b>, dia 08 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.79927368,-47.88319498" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1601 = new google.maps.InfoWindow({
        content: contentpinAge1601,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        maxWidth: 300
      });
      markerpinAge1601.addListener('click', function() {
        infopinAge1601.open(map, markerpinAge1601);
      });
      markerpinAge1601.setMap(map);


      //pinAge1701 Concentra Mais Não Sai 
  var pinAge1701 = {lat: -15.77380053, lng: -47.88608372};
    var markerpinAge1701 = new google.maps.Marker({
      position: pinAge1701,
      map: map
    });
    var contentpinAge1701 = '<b>Concentra Mais Não Sai</b>, dia 08 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.77380053,-47.88608372" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1701 = new google.maps.InfoWindow({
        content: contentpinAge1701,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        maxWidth: 300
      });
      markerpinAge1701.addListener('click', function() {
        infopinAge1701.open(map, markerpinAge1701);
      });
      markerpinAge1701.setMap(map);


      //pinAge1801 Calango Careta 
  var pinAge1801 = {lat: -15.75990532, lng: -47.87998095};
    var markerpinAge1801 = new google.maps.Marker({
      position: pinAge1801,
      map: map
    });
    var contentpinAge1801 = '<b>Calango Careta</b>, dia 09 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.75990532,-47.87998095" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1801 = new google.maps.InfoWindow({
        content: contentpinAge1801,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        maxWidth: 300
      });
      markerpinAge1801.addListener('click', function() {
        infopinAge1801.open(map, markerpinAge1801);
      });
      markerpinAge1801.setMap(map);


      //pinAge1901 Essa Boquinha Eu Já Beijei 
  var pinAge1901 = {lat: -15.75990532, lng: -47.87998095};
    var markerpinAge1901 = new google.maps.Marker({
      position: pinAge1901,
      map: map
    });
    var contentpinAge1901 = '<b>Essa Boquinha Eu Já Beijei</b>, dia 09 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.75990532,-47.87998095" target="_blank">Abrir no mapa</a>';
      
      var infopinAge1901 = new google.maps.InfoWindow({
        content: contentpinAge1901,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        maxWidth: 300
      });
      markerpinAge1901.addListener('click', function() {
        infopinAge1901.open(map, markerpinAge1901);
      });
      markerpinAge1901.setMap(map);


      //pinAge2001 Santo Peacado
  var pinAge2001 = {lat: -15.8191773, lng: -47.83323616};
    var markerpinAge2001 = new google.maps.Marker({
      position: pinAge2001,
      map: map
    });
    var contentpinAge2001 = '<b>Santo Peacado</b>, dia 09 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.8191773,-47.83323616" target="_blank">Abrir no mapa</a>';
      
      var infopinAge2001 = new google.maps.InfoWindow({
        content: contentpinAge2001,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
        maxWidth: 300
      });
      markerpinAge2001.addListener('click', function() {
        infopinAge2001.open(map, markerpinAge2001);
      });
      markerpinAge2001.setMap(map);


      //pinAge2101 Baratona X Raparigueiros
  var pinAge2101 = {lat: -15.818156, lng: -47.902532};
  var markerpinAge2101 = new google.maps.Marker({
      position: pinAge2101,
      icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
      map: map
    });
    var contentpinAge2101 = '<b>Baratona X Raparigueiros</b>, dia 09 de fevereiro'+
    '<br><a href="http://maps.google.com/maps?q=loc:-15.818156,-47.902532" target="_blank">Abrir no mapa</a>';
      
      var infopinAge2101 = new google.maps.InfoWindow({
        content: contentpinAge2101,
        maxWidth: 300
      });
      markerpinAge2101.addListener('click', function() {
        infopinAge2101.open(map, markerpinAge2101);
      });

      markerpinAge2101.setMap(map);



/*
http://maps.google.com/mapfiles/ms/icons/blue-dot.png
http://maps.google.com/mapfiles/ms/icons/red-dot.png
http://maps.google.com/mapfiles/ms/icons/purple-dot.png
http://maps.google.com/mapfiles/ms/icons/yellow-dot.png
http://maps.google.com/mapfiles/ms/icons/green-dot.png
*/





    }
  google.maps.event.addDomListener(window, 'load', agendaBrasilia);
});