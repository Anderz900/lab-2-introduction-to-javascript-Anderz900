

// Global variable with 60 attractions (JSON format)

let selectBox = document.querySelector("#SELECT-ID");
let selectedValue = selectBox.options[selectBox.selectedIndex].value;

function dataFiltering(x){
	var attractions = attractionData;
	console.log(attractionData);

	attractions.sort(function(a,b){return b.x - a.x});
	console.log(attractions)
	attractions.slice(0,5);
	attractions = attractions.slice(0,5);
	renderBarChart(attractions);

}

function dataManipulation(){
	let selectBox = document.querySelector("#SELECT-ID");
	let selectedValue = selectBox.options[selectBox.selectedIndex].value;
	var attractions = attractionData.slice(0);

	array1 = [];
	if (selectedValue == "all"){
		array1 = attractions.slice(0);
	};
	if (selectedValue == "Water Park"){
		array1 = attractions.filter(function(attr){
			return attr.Category == "Water Park";
		});
	};
	if (selectedValue == "Theme Park"){
		array1= attractions.filter(function(attr){
			return attr.Category == "Theme Park";
		});
	};
	if (selectedValue == "Museum"){
		array1 = attractions.filter(function(attr){
			return attr.Category == "Museum";
		});
	};
	console.log(array1);
	// dataFiltering(selectedValue);

	array1 = array1.slice(0,5);
	renderBarChart(array1);
}

dataManipulation();



// numberSort = function (a,b) {
//     return b.Visitors - a.Visitors;
// };
//  dataFiltering=()=>{
// 	var attractions = attractionData;
// 	attractions.sort(numberSort);

// 	return this.attractions.splice(0,5);
//  };
// 	dataFiltering();
// 	renderBarChart(attractionData);
	
	
	


	/* **************************************************
	 *
	 * ADD YOUR CODE HERE (ARRAY/DATA MANIPULATION)
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

// }