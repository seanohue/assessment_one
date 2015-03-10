var sget = require('sget');
var dailyTemps = new Array(7);

function checkIfNumber(input){
	if (isNaN(input))
		return false;
	else
		return true;
}

function handleInput(){
	for(var i=0; i<dailyTemps.length; i++){
		
		dailyTemps[i] = parseInt(sget("Enter the temperature for day "+(i+1)+" please: ").trim());
		var isNumber = checkIfNumber(dailyTemps[i]);
		//console.log(isNumber);

		if (!isNumber){
			i--;
			console.log("Please input a number.");
		}
	}
}

function averageTemp(){
	var total = 0;
	for (var i=0;i<dailyTemps.length; i++)
		total+=dailyTemps[i];
	console.log("Sum: "+total);
	var average = total/(dailyTemps.length)
	return average; 

}

console.log("Enter a number for the temperature of each day.");
console.log("We will then find the average for the past week.");
handleInput();
console.log("The average temperature for the past week is: "+averageTemp()+" degrees.");
