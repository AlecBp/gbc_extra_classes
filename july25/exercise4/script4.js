function strToArray(str) {
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		arr[i] = str[i];
	}
	return arr;
}

function bubbleSort(arr) {
	// limit how far we can touch the array
	for (let i = arr.length - 1; i >= 0; i--) {
		// Loops through the array
		for (let j = 1; j <= i; j++) {
			// Check if previous element is greater than next one
			let prev = arr[j - 1];
			let cur = arr[j];

			if (prev > cur) {
				// Array swap
				let tmp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	return arr;
}
