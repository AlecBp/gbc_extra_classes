let input = document.querySelector("input");
let result = document.getElementById("result");

function changeCase() {
	let str = input.value;
	var outStr = "";
	var charCode;
	for (let i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i);
		// Uppercase
		if (charCode >= 65 && charCode <= 90) {
			outStr += String.fromCharCode(charCode + 32);
		} else if (charCode >= 97 && charCode <= 122) {
			outStr += String.fromCharCode(charCode - 32);
		} else {
			outStr += str[i];
		}
	}
	result.innerHTML = outStr;
}
