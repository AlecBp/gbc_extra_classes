let imgTag = document.getElementById("dice");
let imgNames = ["one", "two", "three", "four", "five", "six"];

function getRandom() {
	let randNum = Math.floor(Math.random() * 6);
	console.log(randNum);
	imgTag.src = `assets/${imgNames[randNum]}.png`;
}
