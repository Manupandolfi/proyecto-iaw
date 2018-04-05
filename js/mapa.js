var complejos = new Array();
var map;
var posUsuario;
var circulo = null;
function initMap() {
        crearMapa();
        geolocacion();
        cargarComplejos();
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
												'Posicion por Defecto' :
												'Error: Tu buscador no soporta geolocacion.');
      }

function crearMapa(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -38.717534, lng: -62.265437},//coordenadas de la plaza del centro
    zoom: 15,
    styles: [//le saco las etiquetas de todos los puntos de interes que trae google maps
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ]
  });

}

function geolocacion(){
    var infoWindow = new google.maps.InfoWindow({map: map});
    //pido la geolocacion
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            posUsuario = pos;
            //largo el cartel informativo
            infoWindow.setPosition(pos);
            infoWindow.setContent('Usted esta aqui');
            map.setCenter(pos);
          }, function() {
                //si me negaron la geolocacion
                handleLocationError(true, infoWindow, map.center);
              });
    }
    else {
        // si el navegador no soporta la geolocacion
        handleLocationError(false, infoWindow, map.center);
    }
}
function cargarComplejos() {
          var index;
          for (index = 0; index < jsonComplejos.length; ++index) {
              var complejo = jsonComplejos[index];
              complejo.marcador = crearMarcador(parseFloat(complejo.coordenadas[0]),parseFloat(complejo.coordenadas[1]));
              complejos[index] = complejo;
            }
}

function crearMarcador(lati,long){
   marker = new google.maps.Marker({
   map: map,
  // draggable: true,
   //animation: google.maps.Animation.DROP,
   position: {lat: lati, lng: long}
 });
// marker.addListener('click', toggleBounce);
 return marker;
}
/*
function toggleBounce() {
 if (marker.getAnimation() !== null) {
   marker.setAnimation(null);
 } else {
   marker.setAnimation(google.maps.Animation.BOUNCE);
 }
}
*/
function filtrarDistancia(resultados,distancia){
          dibujarDistancia(distancia);
          var filtrado = new Array();
          var i = 0;
          for(i; i < complejos.length; ++i){
              estas = esta(complejos[i],resultados);
              if(estas != null)
                  if(enRango(complejos[i],distancia)){
                      complejos[i].marcador.setMap(map);
                      filtrado.push(complejos[i]);
                  }
                  else
                      complejos[i].marcador.setMap(null);
              else
                complejos[i].marcador.setMap(null);

          }

          return filtrado;
}

function dibujarDistancia(distancia){
      if(circulo == null){    circulo = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: posUsuario,
          radius:distancia*1000
        });
      }
      else circulo.setRadius(distancia*1000);
}
function esta(complejo,resultados){
    var i = 0;
    for(i; i < resultados.length; ++i){
        if(resultados[i].id == complejo.id)
            return resultados[i];
    }

    return null;
}

function enRango(resultado,distancia){
      var latlng1= {
          lat: map.getCenter().lat(),
          lng: map.getCenter().lng()
      }
      var latlng2= {
        lat: resultado.coordenadas[0],
        lng: resultado.coordenadas[1]
      }
      dista = getKilometros(posUsuario.lat,posUsuario.lng,resultado.coordenadas[0],resultado.coordenadas[1])/1000;
      if(distancia >= dista)
            return true;
      return false;
}

function getKilometros(lat1,lon1,lat2,lon2){
   var lat = [Math.abs(lat1), Math.abs(lat2)];
   var lng = [Math.abs(lon1), Math.abs(lon2)];
   var R = 6378137;
   var dLat = (lat[1]-lat[0]) * Math.PI / 180;
   var dLng = (lng[1]-lng[0]) * Math.PI / 180;
   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
   Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
   Math.sin(dLng/2) * Math.sin(dLng/2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var d = R * c;
   return Math.round(d);
 }

 function centrarMapa(complejo){
        var pos = {
          lat: parseFloat(complejo.coordenadas[0]),
          lng: parseFloat(complejo.coordenadas[1])
        }
        map.setCenter(pos);
        map.setZoom(17);
 }
