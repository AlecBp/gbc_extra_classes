var arr = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// var split = arr.split(" ");
// console.log(split);
var letters = ["a", "b", "c", "i", "u"];
var counter = [0, 0, 0, 0, 0];

for (let i = 0; i < letters.length; i++) {
	for (let j = 0; j < arr.length; j++) {
		if (letters[i] == arr[j]) {
			counter[i] = counter[i] + 1;
		}
	}
}
for (let i = 0; i < letters.length; i++) {
	console.log(`Letter ${letters[i]} = ${counter[i]}`);
}

// counter = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == "b") {
// 		counter++;
// 	}
// }

// console.log(`Number of C: ${counter}`);
