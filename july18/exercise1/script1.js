// https://www.youtube.com/watch?v=Cq7SMsQBEUw
// https://khan4019.github.io/front-end-Interview-Questions/sort.html#bubbleSort

function bubbleSort(arr) {
	// limit how far we can touch the array
	for (let i = arr.length - 1; i >= 0; i--) {
		// Loops through the array
		for (let j = 1; j <= i; j++) {
			// Check if previous element is greater than next one
			if (arr[j - 1] > arr[j]) {
				// Array swap
				let tmp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([5, 2, 4, 3, 7]));
