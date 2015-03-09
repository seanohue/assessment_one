var sget = require('sget');
var clear = require('clear');
var name = null;
var hunger = 50;
var happiness = 50;
var trained = 0;
var score = 0;
var turns = 1;


function nameAnimal(){

	console.log("It is your first day on the job as an Apprentice Zookeeper.");
	console.log("You have been given a baby platypus to show your abilities.")
	console.log("What would you like to name your platypus?")
	name = sget("Please give it a cute name:").trim();
	clear();

}

function mainMenu(){
	
	var endLoop=false;
	while (!endLoop){
		
		console.log("==============================");
		console.log("It is day #"+turns+" for you and your platypus, "+name+".");
		console.log("What would you like to do?");
		console.log("(Please enter a number...)");
		console.log("==============================");
		console.log("1) Feed "+name+" some delicious prawns.");
		console.log("2) Play fetch with "+name+".");
		console.log("3) Train "+name+" to do cool platypus tricks.");
		console.log("4) Sign "+name+" up for the Greatest Platypus Show On Earth.");
		console.log("5) Retire from zookeeping.");
		console.log("==============================");

		var choice = handleInput();
		
		if(choice > 0 && choice < 6){
			goToChoice(choice);
		}
		else
			console.log("That is not a valid choice. Try again.");
	}
}

function handleInput(){
		choice = sget("Enter your choice...").trim();
		var isNumber = checkIfNumber(choice);
		//console.log(isNumber);
		if (!isNumber){
			console.log("Please input a number.");
			handleInput();
		}
		else{
			clear();
			return choice;
		}
	}

function checkIfNumber(input){
	if (!isNaN(input))
		return true;
	else
		return false;
}

function goToChoice(choice){
	console.log("You chose option #"+choice);
	switch(choice){
		case 1:
			feedAnimal();
			break;
		case 2:
			playWithAnimal();
			break;
		case 3:
			trainAnimal();
			break;
		case 4:
			showAnimal();
			break;
		case 5:
			retire();
			break;
		default:
			mainMenu();
	}

}

function toContinue(){
	var input = sget("Press enter to continue...");
}

function feedAnimal(){
	clear();
	console.log("You bring a bucket of tiny shrimp to "+name+"'s habitat...");



	toContinue();
}

function playWithAnimal(){
	clear();
	console.log("You toss a rubber ball over "+name+"'s head...");

	toContinue();
}

function trainAnimal(){
	clear();
	console.log("You attempt to teach "+name+" some new tricks...");

	toContinue();
}

function showAnimal(){
	clear();
	console.log("You sign "+name+" up for tonight's performance...");

	toContinue();
}

function retire(){
	clear();
	console.log("You decide that zookeeping is not for you anymore...");
	displayScore();
	process.exit(0);
}

function displayScore(){
	console.log("Your zookeeper score is: "+score);
	console.log(name+"'s happiness level is: "+happiness);
	console.log(name+"'s hunger level is: "+hunger);
	console.log(name+"'s training level is: "+training);
	var grandScore = score+happiness+training-hunger;
	console.log("===============================");
	console.log("YOUR GRAND TOTAL SCORE IS: "+grandScore);
	console.log("THANK YOU FOR PLAYING!");
	console.log("===============================");
	toContinue();
}

clear();
console.log("==============================");
console.log("|    Welcome to GAMMA ZOO    |");
console.log("|  Home of the Platypus Den  |");
console.log("|Where YOU are the Zookeeper\u2122|")
console.log("==============================");

nameAnimal();
mainMenu();
