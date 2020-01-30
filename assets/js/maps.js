function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.5,   // larger number = smaller area, smaller number = wider area
        center: {
            lat: 41.72666667,  //Ankeny, IA @ Cafe Diem
            lng: -93.60416667 
        }
    });
 
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    var locations = [
        { lat: 41.72666667, lng: -93.60416667 },    //Ankeny, IA @ Cafe Diem
        { lat: 43.386497,   lng: -93.948241   },    //Buffalo Center IA
        { lat: 42.523520,   lng: -92.446402   },    //Cedar Falls IA
        { lat: 41.880265,   lng: -93.68166667 },    //Slater IA
        { lat: 41.573739,   lng: -93.750359   },    //West Des Moines IA
        { lat: 41.604722,   lng: -93.711111   }     //Windsor Heights IA
    ];
 
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
 
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
