var myVar = 10 > 5 ? false : true;
console.log(myVar);

arr = [[1, 2, 3], [2, 3, 4], [3, 4, 5, 6], [3, 4, 5, 6]];

counter = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i].length % 2 == 0) {
		counter++;
	}
}
console.log(counter);

// counter = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		if (arr[i][j] % 2 == 0) {
// 			counter++;
// 		}
// 	}
// }
// console.log(counter);