function myFunction(str, char) {
	let outStr = "";
	let indexOfChar;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == char) {
			indexOfChar = i;
			break;
		}
	}
	return `Index is ${indexOfChar}, the string is "${str}"`;
}

let target = document.getElementById("target");
//											"0123456789"
target.innerHTML = myFunction("this is a test string", "a");
