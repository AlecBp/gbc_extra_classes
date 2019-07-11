str = "";
let itemsPerLine = 1;
for (let i = 0; i < 1000; i++) { // i = i + 1  OR  i += 1  OR  i++
   // randNum = Math.ceil(Math.random() * 10) + 10;
	randNum = Math.floor(Math.random() * 10) + 10;
	if (itemsPerLine % 70 == 0) {
		str += "\n";
		// str = str + "\n";
	}
	str += `${randNum} `;
	itemsPerLine++;
}
console.log(str);
