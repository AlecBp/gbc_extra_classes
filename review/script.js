// bit.ly/alec_attendance
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var myOtherArray = [12, 54, 65, 876, 23, 97, 41];

myOtherArray[myOtherArray.length] = 50;
console.log(myOtherArray);

for (let i = myOtherArray.length - 1; i >= 0; i--) {
	console.log(myOtherArray[i]);
}

for (let i = 0; i < myOtherArray.length; i++) {
	if (myOtherArray[i] % 2 == 0) {
		// even
		myOtherArray[i] = myOtherArray[i] + 1;
	}
}
console.log(myOtherArray);

for (let i = 0; i < myArray.length; i++) {
	console.log(`val of i: ${i} // array item: ${myArray[i]}`);
	// console.log("val of i: "+i+" // array item: "+myArray[i]);
	if (myArray[i] == 5) {
		console.log("number 5 found!");
		myArray[i] = "Gotcha";
	}
}
console.log(myArray);
