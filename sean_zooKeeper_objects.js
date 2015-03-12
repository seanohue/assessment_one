/*
CHANGELOG
3-10:
Added animal object. Changed references to variables to match properties of object.
Got rid of score.
Created player object.
Changed instances of 'Platypus' to 'animals.species'
Added ability to look at the animal.
Changed references to platypus to animal.species.
Added player object with score, money, etc.

3-11:
Made a method for changing/incrementing attributes of animal. 

3-12:
Implemented semi-random changed to animal attributes & points.
Changed multiple logs to linebreaks.

TO DO
Change display/train/feed/etc. functions so that they are part of the animal object
	-- this will make multiple animals much easier to implement.
Add ability to purchase additional animals.
Add animal inventory to player, ability to switch between animals each day.
Stuff like that.
High score lists.
Score multipliers for more dangerous/difficult animals.
*/

var animal = {
	species: 'Platypus',
	name: null,
	hunger: 50,
	happiness: 50,
	training: 0,
	cost: 100,
	tricks:0,

	changeHappiness: function(multiplier, modifier) {
		this.happiness += (Math.floor(
			Math.random() * multiplier) + modifier
		)
	},

	changeHunger: function(multiplier, modifier) {
		this.hunger += (Math.floor(
			Math.random() * multiplier) + modifier
		)
	},

	changeTraining: function(multiplier, modifier) {
		this.training += (Math.floor(
			Math.random() * multiplier) + modifier
		)
	}


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

	console.log("It is your first day on the job as an Apprentice Zookeeper.\nYou have been given a baby "+animal.species+" to show your abilities.\nWhat would you like to name your "+animal.species+"?");
	animal.name = sget("Please give it a cute name:").trim();
	if (name=undefined)
		nameAnimal();
	clear();
	namePlayer();
}

function namePlayer(){

	player.name = sget("Please enter your name:").trim();
	if (name=undefined)
		namePlayer();
	clear();
}

function mainMenu(){
	
	var endLoop=false;
	while (!endLoop){
		
		console.log("==============================\nIt is day #"+player.turns+" for you and your "+animal.species+", "+animal.name+".\nWhat would you like to do?\n(Please enter a number...)\n==============================)\n1) Feed "+animal.name+" some delicious prawns.\n2) Play fetch with "+animal.name+".\n3) Train "+animal.name+" to do cool "+animal.species+" tricks.\n4) Sign "+animal.name+" up for the Greatest "+animal.species+" Show On Earth.\n5) Check on "+animal.name+".\n6) Retire from zookeeping.\n==============================");

		var choice = handleInput();
		
		if(choice > 0 && choice < 7){
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
			displayAnimal();
			break;
		case 6:
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
		animal.changeHunger(-15,-10);
		animal.changeTraining(-1,-1);
		animal.changeHappiness(5,5);
	}
	else if (animal.hunger>0){
		console.log(animal.name+" seems pretty content, but they eat a few prawns anyway... now they're stuffed!\n"+animal.name+" decides to take a nap...");
		animal.changeHunger(-10,-5);
		animal.changeTraining(-5,-1);
		animal.changeHappiness(1,1)
	}
	else{
		console.log(animal.name+" is stuffed and refuses to eat. You forcefeed them anyway, cruelly dumping prawns down their throat.\n"+animal.name+" looks sick and can hardly move. Poor thing!");
		animal.changeHunger(-2,-1);
		animal.changeTraining(-5,-5);
		animal.changeHappiness(-30,-15);
	}
	player.turns++;
	toContinue();
}

function playWithAnimal(){
	clear();
	console.log("You toss a rubber ball over "+animal.name+"'s head...");

	if (animal.hunger>40){
		console.log(animal.name+" looks at the ball, then back at you.\n"+animal.name+" appears to be famished! No energy for playing fetch.");
		animal.changeHunger(5,5);
		animal.changeTraining(-5,-1);
		animal.changeHappiness(-1,-5);
	}
	else {
		console.log(animal.name+" gleefully fetches the ball for you over and over again.\n"+animal.name+"  appears quite happy!");
		animal.changeHunger(5,5);
		animal.changeTraining(-1,-1);
		animal.changeHappiness(20,15);
	}
	player.turns++;
	toContinue();
}

function trainAnimal(){
	clear();
	console.log("You attempt to teach "+animal.name+" some new tricks...");

	if (animal.hunger>40){
		console.log(animal.name+" doesn't even seem to be paying attention.\n"+animal.name+" appears to be famished! No energy for learning.");
		animal.changeHunger(5,5);
		animal.changeTraining(-5,-1);
		animal.changeHappiness(-1,-5);
	}
	else if (animal.hunger<5){
		console.log(animal.name+" decides to take a nap.\n"+animal.name+" is so stuffed they can barely move! No energy for learning.");
		animal.changeHunger(10,10);
		animal.changeTraining(-5,-5);
		animal.changeHappiness(-1,-5);
	}
	else if (animal.happiness<35){
		console.log(animal.name+" tries really hard, but they seem a bit off.\nYour training only seems somewhat effective. "+animal.name+" needs to have some fun!");
		animal.changeHunger(10,10);
		animal.changeTraining(5,5);
		animal.changeHappiness(-5,-5);
	}
	else{
		console.log(animal.name+" has learned a new trick! They love showing off.\nHow cute.");
		animal.changeHunger(15,10);
		animal.changeTraining(25,10);
		animal.changeHappiness(5,5);
		animal.tricks++
	}
	player.turns++;
	toContinue();
}

function showAnimal(){
	clear();
	console.log("You sign "+animal.name+" up for tonight's performance...");
	if (animal.training>=75 && animal.hunger<50 && animal.happiness>2 && animal.tricks>3){
		console.log(animal.name+" puts on the show of a lifetime! Incredible!\nYou are so proud of "+animal.name+" and they are very happy, though exhausted.");
		animal.changeHunger(20,20);
		animal.changeTraining(5,1);
		animal.changeHappiness(50,15);
	}
	else if (animal.training>=50 && animal.hunger<50 && animal.happiness>2 && animal.tricks>1){
		console.log(animal.name+" puts on a pretty good show, with only a few mistakes.\nThey seem happy but tired.");
		animal.changeHunger(20,20);
		animal.changeTraining(5,1);
		animal.changeHappiness(15,10);
	}
	else if (animal.training>=25 && animal.hunger<50 && animal.happiness>25){
		console.log(animal.name+" makes several rookie mistakes...\nYou never thought a "+animal.species+" could look embarrassed, but you'd be wrong...\nTrain harder next time!");
		animal.changeHunger(20,20);
		animal.changeTraining(5,1);
		animal.changeHappiness(-15,-1);
	}
	else if (animal.training>-1 && animal.hunger<50 && animal.happiness>25){
		console.log(animal.name+" looks lost out there. They keep getting in the way!\nHow embarrassing! "+animal.name+" is depressed now.");
		animal.changeHunger(20, 20);
		animal.changeTraining(-1,-1);
		animal.changeHappiness(-30,-15);
	}
	else{
		console.log(animal.name+" refuses to even enter in the show.\nTake care of their needs first, and train them well.");
		animal.changeHunger(2,1);
		animal.changeTraining(-2,-1);
		animal.changeHappiness(-2,-1);
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
	
	console.log(animal.name+"'s happiness level is: "+animal.happiness+"\n"+animal.name+"'s hunger level is: "+animal.hunger+"\n"+animal.name+"'s training level is: "+animal.training+"\n"+animal.name+" has learned "+animal.tricks+" tricks.");
	var grandScore = (animal.happiness+animal.training-animal.hunger)*animal.tricks;
	console.log("===============================\n"+player.name.toUpperCase()+"'S GRAND TOTAL SCORE IS: "+grandScore+"\nTHANK YOU FOR PLAYING!\n===============================");
	toContinue();
}

function displayAnimal(){

	if (animal.happiness>50)
		console.log(animal.name+" looks happy with its life.");
	else 
		console.log(animal.name+" seems mopey.");
	

	if (animal.hunger<50)
		console.log(animal.name+" seems full.");
	else
		console.log(animal.name+" seems hungry.");

	if (animal.training>50)
		console.log(animal.name+" seems quite disciplined.");
	else
		console.log(animal.name+" seems somewhat wild.");

	console.log(animal.name+" is a "+animal.species+".");

	toContinue();
	clear();

}

clear();
console.log("==============================\n|    Welcome to GAMMA ZOO    |\n|  Home of the Platypus Den  |\n|Where YOU are the Zookeeper\u2122|\n==============================");

nameAnimal();
mainMenu();
