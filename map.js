  var map;

  function initMap() {
      var myLatLng = {
          lat: -25.363,
          lng: 131.044
      };

      map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
      });

      map.data.loadGeoJson('aircraft-data.geojson');

      var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
      });
  }
