var sget = require('sget');
var password;

function checkPasswordLength(){
	
	if (password.length >= 10){
		console.log("Your password fits our length requirements.");
		return true;
	}
	
	else{
		console.log("Your password does not meet our length requirements!");
		return false;}

}


function checkPasswordStrength(){
	


}

function handleInput(){

	var isLong = false;
	var isStrong = false;

 	while(!isStrong && !isLong){
		password = sget("Enter your desired password: ");
		isStrong = checkPasswordStrength();
		isLong = checkPasswordLength();
	}
}

console.log("Welcome to www.internet.com!");
console.log("For your security, please enter a password that is at least 10 digits, and contains numbers or an exclamation point.");
handleInput();