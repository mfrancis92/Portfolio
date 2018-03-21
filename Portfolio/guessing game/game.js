//create secrectnumber
var secrectnumber = 4;

//ask user for guess
var StringGuess = prompt("Guess a number");
var guess = Number(StringGuess);

// check guess
if(guess === secrectnumber) {
	alert("YOU GOT IT RIGHT!");
}
// otherwise, check if higher
else if(guess > secrectnumber) {
	alert("Too High. Guess again!")
}

// otherwise, check if lower
else {
	alert("Too low. Guess again!")
}