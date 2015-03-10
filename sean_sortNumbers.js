var sget = require('sget');
var numbers = new Array(3);

function sortNumbers(){
	numbers = numbers.sort(function(a, b){
		return b - a;
	});
}

function checkIfNumber(input){
	if (isNaN(input))
		return false;
	else
		return true;
}

function handleInput(){
	for(var i=0; i<3; i++){
		
		numbers[i] = sget("Enter number: ").trim();
		var isNumber = checkIfNumber(numbers[i]);
		//console.log(isNumber);
		if (!isNumber){
			i--;
			console.log("Please input a number.");
		}
	}
	
	//console.log(numbers); //for debugging
}

function displayNumbers(){
	console.log("Your sorted numbers are as follows: " + numbers);
}

console.log("Enter three numbers and we will gladly sort them from largest to smallest!");

handleInput();

sortNumbers();

displayNumbers();