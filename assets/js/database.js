// NOTE: This code is not presently finished but I wish to eventually make the Vue and Axios code used
// to access our AirTable databases into a callable function since it's so similar and will
// be used in so many places.

function initVue(classLabel, app_id, table, view) {
    var app = new Vue({
		el: classLabel, // '#app'
		data: {
		    items: []
		},
		mounted: function(){
		   this.loadItems(); 
		},
		methods: {
		    loadItems: function(){
                // Init variables
                var self = this
                //var app_id = "appN54T0evXoEsb99"; // Base name
                var app_key = "keyZJuhIFuOIUcEev";  
                this.items = [];
                axios.get(
                    "https://api.airtable.com/v0/"+app_id + "/" + table + "?view=" + view,  //ex: /Blog?view=ReverseSortByDate"
                    { 
                    headers: { Authorization: "Bearer "+app_key } 
                    }
                ).then(function(response){
                    self.items = response.data.records
                }).catch(function(error) {
                    console.log(error)
                })
            }
		}
	})
} 

// This is used to show/hide the list and table elements on the Pen Books page and
// will be used on other pages as well.  The list and table render so quickly and 
// we do not have enough data in most cases to require pagination that it is 
// simpler and faster to draw BOTH views and just hide one and let the user toggle
// between them with a set of radio buttons 

function showHide(elemToShow,elemToHide) {
    document.getElementById(elemToShow).style.display = "block";
    document.getElementById(elemToHide).style.display = "none";
    return true;
}
