let num = prompt("Enter a number from 30 to 100", 100);
// Get reference to div element, where we are putitng the result
let target = document.getElementById("123");

// Check if the number entered ins in between 30 - 100
if (num >= 30 && num <= 100) {
   // Start counter
   let itemsPerLine = 1;
   // For loop to write all numbers from 0 up to the number entered
	for (let i = 0; i < num; i++) {
		target.innerHTML += `${i}.`;
		if (itemsPerLine % 7 == 0) {
			target.innerHTML += `<br>`;
		}
		itemsPerLine++;
   }
   // Removes last character, in this case the "."
   target.innerHTML = target.innerHTML.slice(0, -1)
}
