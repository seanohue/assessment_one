var sget = require('sget');
var numbers = new Array(3);

function sortNumbers(){

}

function checkIfNumber(input){

}

function handleInput(){
	for(var i=0; i<3; i++){
		numbers[i] = sget("Enter number: ");
		var isNumber = checkIfNumber(numbers[i]);
		
		if (!isNumber){
			i--;
			console.log("Please input a number.");
		}
	}
	console.log(numbers); //for debugging
}

function displayNumbers(){

}

console.log("Enter three numbers and we will gladly sort them from largest to smallest!");
handleInput();