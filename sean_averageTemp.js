var dailyTemps = new Array(7);

function checkIfNumber(input){
	if (!isNaN(input))
		return true;
	else
		return false;
}

function handleInput(){
	for(var i=0; i<dailyTemps.length; i++){
		
		dailyTemps[i] = sget("Enter the temperature for day "+i+" please: ").trim();
		var isNumber = checkIfNumber(dailyTemps[i]);
		//console.log(isNumber);

		if (!isNumber){
			i--;
			console.log("Please input a number.");
		}
	}

function averageTemp(){
	for (var i=0;i<dailyTemps.length; i++)
		var total+=dailyTemps[i];
	

	return total/dailyTemps.length; 

}

console.log("Enter a number for the temperature of each day.");
console.log("We will then find the average for the past week.");