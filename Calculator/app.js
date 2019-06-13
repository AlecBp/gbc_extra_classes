// Get all keys
var keys = document.querySelectorAll("#calculator span");
// Get display reference
var display = document.getElementById("display");
// List of possible operators
var operators = ["+", "-", "x", "÷"];
// Keep track of decimal numbers
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for (var i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", gotClicked);
}

function gotClicked(e) {
	{
		var displayVal = display.innerHTML;
		var btnVal = this.innerHTML;

		// if it is C we clear the display
		if (btnVal == "C") {
			display.innerHTML = "";
			decimalAdded = false;
		}

		// If eval key is pressed, calculate and display the result
		else if (btnVal == "=") {
			var equation = displayVal;
			var lastChar = equation[equation.length - 1];

			// Replace all instances of x and ÷ with * and / respectively.
			// The easiest of way of doing it is by using regex (regular expression) and
			// the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, "*").replace(/÷/g, "/");

			// Check if last character is an operator or a decimal, then remove it
			if (operators.indexOf(lastChar) != -1 || lastChar == ".") {
				equation = equation.replace(/.$/, "");
			}

			if (equation) {
				display.innerHTML = eval(equation);
			}

			decimalAdded = false;
		}

		// Now that we have the basic funtionality, we need to solve some issues...like...
		// 1. Prevent consecutive operators
		// 2. Only the minus operator can start an equation
		// 3. Only 1 decimal per number
		else if (operators.indexOf(btnVal) != -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = displayVal[displayVal.length - 1];

			// Only add operator if input is not empty and there is no operator at the last
			if (displayVal != "" && operators.indexOf(lastChar) == -1) {
				display.innerHTML += btnVal;
			}

			// Allow minus if the string is empty
			else if (displayVal == "" && btnVal == "-") {
				display.innerHTML += btnVal;
			}

			// Replace the last operator (if exists) with the newly pressed operator
			if (operators.indexOf(lastChar) != -1 && displayVal.length > 1) {
				// Another regular expression, similar to the previous one... the $ sign denotes the end of string
				display.innerHTML = displayVal.replace(/.$/, btnVal);
			}
			// Set decimalAdded to false to allow a decimal number
			decimalAdded = false;
		}

		// Check if decimal was pressed, to prevent double decimals in one number we keep track if this button was previously pressed,
		// decimalAdded will be back to false after an operator, eval or clear button is pressed
		else if (btnVal == ".") {
			if (!decimalAdded) {
				display.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		// if it is not any operator or clear, just append it
		else {
			display.innerHTML += btnVal;
		}

		e.preventDefault();
	}
}
