
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -38.717534, lng: -62.265437},//coordenadas de la plaza del centro
          zoom: 15
        });
        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Usted esta aqui');
            map.setCenter(pos);
          }, function() {

            handleLocationError(true, infoWindow, map.center);
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.center);
        }
      }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
												'Posicion por Defecto' :
												'Error: Your browser doesn\'t support geolocation.');
      }
