function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 41.72666667,
            lng: -93.60416667 
        }
    });
 
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    var locations = [
        { lat: 41.72666667, lng: -93.60416667 },   
        { lat: 41.880265,   lng: -93.68166667 },   
        { lat: 41.604722,   lng: -93.711111  }    
    ];
 
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
 
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
