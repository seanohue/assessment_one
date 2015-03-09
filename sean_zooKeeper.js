var sget = require('sget');
var clear = require('clear');
var name = null;
var hunger = 50;
var happiness = 50;
var training = 0;

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
		choice = parseInt(sget("Enter your choice...").trim());
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
	if (hunger>10){
		console.log(name+" seems pretty hungry... they chow down on the prawns and dance a delightful platypus jig.");
		hunger-=20;
		happiness+=20;
		training-=1;
	}
	else if (hunger>0){
		console.log(name+" seems pretty content, but they eat a few prawns anyway... now they're stuffed!");
		console.log(name+" decides to take a nap...");
		hunger-=10;
		training-=5;
	}
	else{
		console.log(name+" is stuffed and refuses to eat. You forcefeed them anyway, cruelly dumping prawns down their throat.");
		console.log(name+" looks sick and can hardly move. Poor thing!");
		hunger-=1;
		training-=5;
		happiness-=35;
	}
	turns++;
	toContinue();
}

function playWithAnimal(){
	clear();
	console.log("You toss a rubber ball over "+name+"'s head...");

	if (hunger>40){
		console.log(name+" looks at the ball, then back at you.");
		console.log(name+" appears to be famished! No energy for playing fetch.");
		hunger+=10;
		happiness-=5;
		training-=5;
	}
	else {
		console.log(name+" gleefully fetches the ball for you over and over again.");
		console.log(name+" appears quite happy!");
		happiness+=20;
		hunger+=20;
		training+=5;
	}
	turns++;
	toContinue();
}

function trainAnimal(){
	clear();
	console.log("You attempt to teach "+name+" some new tricks...");

	if (hunger>40){
		console.log(name+" doesn't even seem to be paying attention.");
		console.log(name+" appears to be famished! No energy for learning.");
		hunger+=10;
		happiness-=5;
		training-=5;
	}
	else if (hunger<5){
		console.log(name+" decides to take a nap.");
		console.log(name+" is so stuffed they can barely move! No energy for learning.");
		hunger+=20;
		happiness-=5;
		training-=5;
	}
	else if (happiness<35){
		console.log(name+" tries really hard, but they seem a bit off.");
		console.log("Your training only seems somewhat effective. Platypi need fun too!");
		hunger+=20;
		happiness-=10;
		training+=10;
	}
	else{
		console.log(name+" has learned a new trick! They love showing off.\nHow cute.");
		hunger+=25;
		happiness+=10;
		training+=25
	}
	turns++;
	toContinue();
}

function showAnimal(){
	clear();
	console.log("You sign "+name+" up for tonight's performance...");
	if (training>=75 && hunger<50 && happiness>2){
		console.log(name+" puts on the show of a lifetime! Incredible!");
		console.log("You are so proud of "+name+" and they are very happy, though exhausted.");
		hunger+=35;
		happiness+=50;
		training+=5;
	}
	else if (training>=50 && hunger<50 && happiness>2){
		console.log(name+" puts on a pretty good show, with only a few mistakes.");
		console.log("They seem happy but tired.");
		hunger+=30;
		happiness+=20;
		training+=5;
	}
	else if (training>=25 && hunger<50 && happiness>25){
		console.log(name+" makes several rookie mistakes...");
		console.log("You never thought a platypus could look embarrassed, but you'd be wrong...");
		console.log("Train harder next time!");
		hunger+=30;
		happiness-=5;
		training+=5;
	}
	else if (training>-1 && hunger<50 && happiness>25){
		console.log(name+" looks lost out there. They keep getting in the way!");
		console.log("How embarrassing! "+name+" is depressed now.");
		hunger-=30;
		happiness-=30;
	}
	else{
		console.log(name+" refuses to even enter in the show.\nTake care of their needs first, and train them well.");
		hunger-=10;
		happiness-=5;
		training-=5;
	}
	
	turns++;
	toContinue();
}

function retire(){
	clear();
	console.log("You decide that zookeeping is not for you anymore...");
	displayScore();
	process.exit(0);
}

function displayScore(){
	
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
