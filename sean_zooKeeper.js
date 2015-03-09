var sget = require('sget');
var name = null;
var hunger = 100;
var trained = 0;
var score = 0;


function nameAnimal(){

console.log("It is your first day on the job as an Apprentice Zookeeper.");
console.log("You have been given a baby platypus to show your abilities.")
console.log("What would you like to name your platypus?")
name = sget("Please give it a cute name:").trim();
}

function mainMenu(){}

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
