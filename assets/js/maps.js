function initMap() {

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,   // larger number = smaller area, smaller number = wider area
        center: {
            lat: 42.015947,     // State Center, IA      
            lng: -93.164238
        }
    });

     var mapUSA = new google.maps.Map(document.getElementById("mapUSA"), {
        zoom: 4,   // larger number = smaller area, smaller number = wider area
        center: {
            lat: 39.828175,     // Near Lebanon KS - geographical center of USA     
            lng: -98.5795
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    //TODO:  Move these to an AirTable database and read them from there into array.
    var locations = [
        { lat: 42.03472222, lng: -93.62000000 },    //Ames IA USA
        { lat: 41.72666667, lng: -93.60416667 },    //Ankeny IA USA @ Cafe Diem
        { lat: 42.061111,   lng: -93.886111   },    //Boone IA USA
        { lat: 43.386497,   lng: -93.948241   },    //Buffalo Center IA USA
        { lat: 41.501203,   lng: -93.490351   },    //Carlisle IA USA
        { lat: 42.523520,   lng: -92.446402   },    //Cedar Falls IA USA
        { lat: 41.983056,   lng: -91.668611   },    //Cedar Rapids IA USA
        { lat: 41.542982,   lng: -90.590745   },    //Davenport IA USA
        { lat: 41.007222,   lng: -91.965833   },    //Fairfield IA USA
        { lat: 40.628611,   lng: -91.338889   },    //Fort Madison IA USA
        { lat: 41.761672,   lng: -93.823921   },    //Granger IA USA
        { lat: 42.037649,   lng: -91.592925   },    //Marion IA USA
        { lat: 42.238759,   lng: -91.189067   },    //Monticello IA USA
        { lat: 41.880265,   lng: -93.68166667 },    //Slater IA USA
        { lat: 41.636389,   lng: -93.736111   },    //Urbandale IA USA
        { lat: 42.466300,   lng: -93.820582   },    //Webster City IA USA
        { lat: 41.573739,   lng: -93.750359   },    //West Des Moines IA USA
        { lat: 40.717249,   lng: -91.451672   },    //West Point IA USA
        { lat: 41.604722,   lng: -93.711111   },    //Windsor Heights IA USA
        { lat: 35.208333,   lng: -114.025833  },    //Kingman AZ USA 
        { lat: 41.482222,   lng: -81.669722   },    //Cleveland OH USA
        { lat: 39.983333,   lng: -82.983333   },    //Columbus OH USA
        { lat: 37.533333,   lng: -77.466667   },    //Richmond VA USA
        { lat: 38.976812,   lng: -91.505026   },    //Montgomery City, MO USA
        { lat: 32.779167,   lng: -96.808889   }     //Dallas TX USA
    ];
 
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
 
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


    var markersUSA = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerClusterUSA = new MarkerClusterer(mapUSA, markersUSA, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}
