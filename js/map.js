var map;
var icon = "css/images/airport-icon-25.png";
var json = "data/aircraft-data.geojson";
var infowindow = new google.maps.InfoWindow();

function initMap() {

    var mapOptions = {
        zoom: 1,
        center: new google.maps.LatLng(0, 0),
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "invert_lightness": true
            }, {
                "saturation": 10
            }, {
                "lightness": 30
            }, {
                "gamma": 0.5
            }, {
                "hue": "#435158"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [{
                "saturation": "-59"
            }, {
                "lightness": "-16"
            }, {
                "gamma": "1.07"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [{
                "saturation": "-20"
            }, {
                "lightness": "-16"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }]
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    $.getJSON(json, function(json1) {
        $.each(json1.features, function(key, features) {

          // console.log(features.geometry.coordinates)

          var latlng = new google.maps.LatLng( features.geometry.coordinates[0], features.geometry.coordinates[1]);
          console.log(latlng)
          var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: icon,
          })

        });

    });

}



google.maps.event.addDomListener(window, 'load', initMap);
