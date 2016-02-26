function initMap() {
    var mapDiv = document.getElementById('map');
    var myLatLng={lat: 53.323495, lng:-6.332871}
    var map = new google.maps.Map(mapDiv, {
      center: myLatLng,
      zoom: 16
    });

    var marker =new google.maps.Marker({
    	position:myLatLng,
    	map:map,
    	title:"Find Us"
    });
 }
