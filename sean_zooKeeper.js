var sget = require('sget');
var name = null;
var hunger = 100;
var happiness = 50;
var trained = 0;
var score = 0;
var turns = 1;


function nameAnimal(){

	console.log("It is your first day on the job as an Apprentice Zookeeper.");
	console.log("You have been given a baby platypus to show your abilities.")
	console.log("What would you like to name your platypus?")
	name = sget("Please give it a cute name:").trim();

}

function mainMenu(){
	
	var validInput=false;
	while (!validInput){
	console.log("==============================");
	console.log("It is day "+turns+" for you and your platypus, "+name+".");
	console.log("What would you like to do?");
	console.log("(Please enter a number...)");
	console.log("==============================");
	console.log("1) Feed "+name+" some delicious prawns.");
	console.log("2) Play fetch with "+name+".");
	console.log("3) Train "+name+" to do cool platypus tricks.");
	console.log("4) Sign "+name+" up for the Greatest Platypus Show On Earth.");
	console.log("==============================");

	var choice = handleInput();
	
	}
}

function handleInput(){
		choice = sget("Enter your choice...").trim();
		var isNumber = checkIfNumber(numbers[i]);
		//console.log(isNumber);
		if (!isNumber){
			console.log("Please input a number.");
			handleInput();
		}
		else
			return choice;
	}

function checkIfNumber(input){
	if (!isNaN(input))
		return true;
	else
		return false;
}

function feedAnimal(){}

function playWithAnimal(){}

function trainAnimal(){}

function showAnimal(){}

function displayScore(){}

console.log("==============================");
console.log("|    Welcome to GAMMA ZOO    |");
console.log("|  Home of the Platypus Den  |");
console.log("|Where YOU are the Zookeeper\u2122|")
console.log("==============================");

nameAnimal();
mainMenu();
