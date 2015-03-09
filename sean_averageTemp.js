


function checkIfNumber(input){
	if (!isNaN(input))
		return true;
	else
		return false;
}

function handleInput(){
	for(var i=0; i<7; i++){
		
		numbers[i] = sget("Enter number: ").trim();
		var isNumber = checkIfNumber(numbers[i]);
		console.log(isNumber);
		if (!isNumber){
			i--;
			console.log("Please input a number.");
		}
	}