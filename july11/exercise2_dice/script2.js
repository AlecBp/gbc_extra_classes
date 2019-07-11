let imgTag = document.getElementById("dice");

function getRandom() {
	let randNum = Math.ceil(Math.random() * 6);
	console.log(randNum);
	imgTag.src = `assets/${randNum}.png`;
}
