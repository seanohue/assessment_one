var sget = require('sget');
var password;

function checkPasswordLength(){
	
	if (password.length >= 11){
		console.log("Your password fits our length requirements.");
		return true;
	}
	
	else{
		console.log("Your password does not meet our length requirements!");
		return false;}

}

function checkPasswordStrength(){
	var numbers = /\d+/;
	var bang = /[!]+/;

	if ((bang.test(password) === true) || (numbers.test(password) === true)){
		console.log("Your password meets our strength requirements.");
		return true;		
	}

	else{
		console.log("Your password does not meet our strength requirements. Please use numbers or an exclamation point.");
		return false;
	}
}

function handleInput(){

	var isLong = false;
	var isStrong = false;

 	while(!isStrong || !isLong){
		password = sget("Enter your desired password: ");
		isStrong = checkPasswordStrength();
		isLong = checkPasswordLength();
	}
	console.log("Your password has been accepted! Enjoy your internetting.");
}

console.log("Welcome to www.internet.com!");
console.log("For your security, please enter a password that is at least 10 digits, and contains numbers or an exclamation point.");
handleInput();