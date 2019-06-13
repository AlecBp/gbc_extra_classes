// Get all keys
var keys = document.querySelectorAll("#calculator span");

for(let i = 0; i < keys.length; i++) {
   keys[i].addEventListener("click", gotClicked);
}

function gotClicked(e) {
	console.log(this.dataset.num);
}
