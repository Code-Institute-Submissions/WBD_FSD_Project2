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

function showHide(elemToShow,elemToHide) {
    document.getElementById(elemToShow).style.display = "block";
    document.getElementById(elemToHide).style.display = "none";
    return true;
}
