/*
CHANGELOG
3-10:
Added animal object. Changed references to variables to match properties of object.
Got rid of score.
Created player object.
Changed instances of 'Platypus' to 'animals.species'

TO DO
Change multiple logs to linebreaks.
Change platypus into animal object to allow for multiple animals. -- Sort of done.
Change references to platypus to animal.species.
Make a function(method, really) for changing/incrementing attributes of animal.
Add ability to purchase additional animals.
Add player object with animal inventory, score, money, etc.
*/

var animal = {
	species: 'Platypus',
	name: null,
	hunger: 50,
	happiness: 50,
	training: 0,
	cost: 100,
	tricks:0
};

var player = {
//	score: 				How would I add up all of the scores of all of the animals? If there were more than one...
	name: null,
	turns: 1,
	money: 0
}

var sget = require('sget');
var clear = require('clear');
var turns = 1;



function nameAnimal(){

	console.log("It is your first day on the job as an Apprentice Zookeeper.");
	console.log("You have been given a baby "+animal.species+" to show your abilities.");
	console.log("What would you like to name your "+animal.species+"?");
	animal.name = sget("Please give it a cute name:").trim();
	clear();
	namePlayer();
}

function namePlayer(){

	player.name = sget("Please enter your name:").trim();
	clear();
}

function mainMenu(){
	
	var endLoop=false;
	while (!endLoop){
		
		console.log("==============================");
		console.log("It is day #"+turns+" for you and your "+animal.species+", "+animal.name+".");
		console.log("What would you like to do?");
		console.log("(Please enter a number...)");
		console.log("==============================");
		console.log("1) Feed "+animal.name+" some delicious prawns.");
		console.log("2) Play fetch with "+animal.name+".");
		console.log("3) Train "+animal.name+" to do cool "+animal.species+" tricks.");
		console.log("4) Sign "+animal.name+" up for the Greatest "+animal.species+" Show On Earth.");
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
		choice = parseInt(sget("Enter your choice...").trim());
		var isNumber = checkIfNumber(choice);
		//console.log(isNumber);
		if (isNumber){
			clear();
			return choice;
		}
		else{
			console.log("Please input a number.");
			handleInput();
			
		}
	}

function checkIfNumber(input){
	if (isNaN(input))
		return false;
	else
		return true;
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
	console.log("You bring a bucket of tiny shrimp to "+animal.name+"'s habitat...");
	if (animal.hunger>10){
		console.log(animal.name+" seems pretty hungry... they chow down on the prawns and dance a delightful "+animal.species+" jig.");
		animal.hunger-=20;
		animal.happiness+=20;
		animal.training-=1;
	}
	else if (animal.hunger>0){
		console.log(animal.name+" seems pretty content, but they eat a few prawns anyway... now they're stuffed!");
		console.log(animal.name+" decides to take a nap...");
		animal.hunger-=10;
		animal.training-=5;
	}
	else{
		console.log(animal.name+" is stuffed and refuses to eat. You forcefeed them anyway, cruelly dumping prawns down their throat.");
		console.log(animal.name+" looks sick and can hardly move. Poor thing!");
		animal.hunger-=1;
		animal.training-=5;
		animal.happiness-=35;
	}
	turns++;
	toContinue();
}

function playWithAnimal(){
	clear();
	console.log("You toss a rubber ball over "+animal.name+"'s head...");

	if (animal.hunger>40){
		console.log(animal.name+" looks at the ball, then back at you.");
		console.log(animal.name+" appears to be famished! No energy for playing fetch.");
		animal.hunger+=10;
		animal.happiness-=5;
		animal.training-=5;
	}
	else {
		console.log(animal.name+" gleefully fetches the ball for you over and over again.");
		console.log(animal.name+" appears quite happy!");
		animal.happiness+=20;
		animal.hunger+=20;
		animal.training+=5;
	}
	turns++;
	toContinue();
}

function trainAnimal(){
	clear();
	console.log("You attempt to teach "+animal.name+" some new tricks...");

	if (animal.hunger>40){
		console.log(animal.name+" doesn't even seem to be paying attention.");
		console.log(animal.name+" appears to be famished! No energy for learning.");
		animal.hunger+=10;
		animal.happiness-=5;
		animal.training-=5;
	}
	else if (animal.hunger<5){
		console.log(animal.name+" decides to take a nap.");
		console.log(animal.name+" is so stuffed they can barely move! No energy for learning.");
		animal.hunger+=20;
		animal.happiness-=5;
		animal.training-=5;
	}
	else if (animal.happiness<35){
		console.log(animal.name+" tries really hard, but they seem a bit off.");
		console.log("Your training only seems somewhat effective. "+animal.name+" needs to have some fun!");
		animal.hunger+=20;
		animal.happiness-=10;
		animal.training+=10;
	}
	else{
		console.log(animal.name+" has learned a new trick! They love showing off.\nHow cute.");
		animal.hunger+=25;
		animal.happiness+=10;
		animal.training+=25;
		animal.tricks++
	}
	turns++;
	toContinue();
}

function showAnimal(){
	clear();
	console.log("You sign "+animal.name+" up for tonight's performance...");
	if (animal.training>=75 && animal.hunger<50 && animal.happiness>2 && animal.tricks>3){
		console.log(animal.name+" puts on the show of a lifetime! Incredible!");
		console.log("You are so proud of "+animal.name+" and they are very happy, though exhausted.");
		animal.hunger+=35;
		animal.happiness+=50;
		animal.training+=5;
	}
	else if (animal.training>=50 && animal.hunger<50 && animal.happiness>2 && animal.tricks>1){
		console.log(animal.name+" puts on a pretty good show, with only a few mistakes.");
		console.log("They seem happy but tired.");
		animal.hunger+=30;
		animal.happiness+=20;
		animal.training+=5;
	}
	else if (animal.training>=25 && animal.hunger<50 && animal.happiness>25){
		console.log(animal.name+" makes several rookie mistakes...");
		console.log("You never thought a "+animal.species+" could look embarrassed, but you'd be wrong...");
		console.log("Train harder next time!");
		animal.hunger+=30;
		animal.happiness-=5;
		animal.training+=5;
	}
	else if (animal.training>-1 && animal.hunger<50 && animal.happiness>25){
		console.log(animal.name+" looks lost out there. They keep getting in the way!");
		console.log("How embarrassing! "+animal.name+" is depressed now.");
		animal.hunger-=30;
		animal.happiness-=30;
	}
	else{
		console.log(animal.name+" refuses to even enter in the show.\nTake care of their needs first, and train them well.");
		animal.hunger-=10;
		animal.happiness-=5;
		animal.training-=5;
	}
	
	player.turns++;
	toContinue();
}

function retire(){
	clear();
	console.log("You decide that zookeeping is not for you anymore...");
	displayScore();
	process.exit(0);
}

function displayScore(){
	
	console.log(animal.name+"'s happiness level is: "+animal.happiness);
	console.log(animal.name+"'s hunger level is: "+animal.hunger);
	console.log(animal.name+"'s training level is: "+animal.training);
	console.log(animal.name+" has learned "+animal.tricks+" tricks.");
	var grandScore = (animal.happiness+animal.training-animal.hunger)*animal.tricks;
	console.log("===============================");
	console.log(player.name.toUpperCase()+"'S GRAND TOTAL SCORE IS: "+grandScore);
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
