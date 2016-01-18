$(document).ready(function(){
  //ESQUENTA
  function esquenta01(){
    var mapEsquenta01 = document.getElementById('maps-esquenta');
    var mapOptionsEsquenta = {
      center: new google.maps.LatLng(-15.7942287, -47.8821658),
      zoom: 12,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapEsquenta01, mapOptionsEsquenta)
    //PIN 01
    var pinEsquenta01 = {lat:-15.78923898, lng: -47.89664626};
    var markerPinEsquenta01 = new google.maps.Marker({
      position: pinEsquenta01,
      map: map
    });
    var contentEsquenta01 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1>Pin 01</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Pin 01</b>, É um local muito bananudo e tals e coisa e pá'+
      '<p><a href="http://maps.google.com/maps?q=loc: -15.857733,-47.857602" target="_blank">'+
      'Abrir no mapa</a> '+
      '</div>'+
      '</div>';
      
      var infoEsquenta01 = new google.maps.InfoWindow({
        content: contentEsquenta01
      });
      markerPinEsquenta01.addListener('click', function() {
        infoEsquenta01.open(map, markerPinEsquenta01);
      });
      markerPinEsquenta01.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', esquenta01);

  //AGENGA
  function agendaBrasilia() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(-15.7942287, -47.8821658),
      zoom: 12,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    
    //FATO ONLINE
    var fatoOnlinePin = {lat: -15.862165, lng: -47.869682};
    var markerFato = new google.maps.Marker({
        position: fatoOnlinePin,
        map: map
    });
    var contentFato = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1>Fato Online</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fato Online</b>, É um local muito bananudo e tals e coisa e pá'+
      '<p><a href="http://maps.google.com/maps?q=loc: -15.857733,-47.857602" target="_blank">'+
      'Abrir no mapa</a> '+
      '</div>'+
      '</div>';
      
      var infowindowFato = new google.maps.InfoWindow({
        content: contentFato
      });
      markerFato.addListener('click', function() {
        infowindowFato.open(map, markerFato);
      });
      
      //Posto
    var postoPin = {lat: -15.857217, lng: -47.863739};
    var markerPosto = new google.maps.Marker({
        position: postoPin,
        map: map
    });
    var contentPosto = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1>Posto</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Posto</b>, É um local muito bananudo e tals e coisa e pá'+
      '<p><a href="http://maps.google.com/maps?q=loc: -15.857217,-47.863739" target="_blank">'+
      'Abrir no mapa</a> '+
      '</div>'+
      '</div>';
      
      var infowindowPosto = new google.maps.InfoWindow({
        content: contentPosto
      });
      markerPosto.addListener('click', function() {
        infowindowPosto.open(map, markerPosto);
      });
        markerFato.setMap(map);
        markerPosto.setMap(map);
    }
  google.maps.event.addDomListener(window, 'load', agendaBrasilia);
});