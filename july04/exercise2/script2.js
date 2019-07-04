let target = document.getElementById("target");

do {
	let input = parseInt(prompt("Enter a number between 65-90 or 97-122"));
} while ((input < 65 && input > 122) || (input > 90 && input < 97));

console.log(input);

// uppercase
var result = "";
var lettersPerLine = 1;

// Check if it is uppercase
if (input <= 90) {
	for (let i = 65; i <= input; i++) {
		result += String.fromCharCode(i);
		if (lettersPerLine % 7 == 0) {
			result += "<br>";
		}
		lettersPerLine++;
	}
} else {
	for (let x = 97; x <= input; x++) {
		result += String.fromCharCode(x);
		if (lettersPerLine % 7 == 0) {
			result += "<br>";
		}
		lettersPerLine++;
	}
}

target.innerHTML = result;
