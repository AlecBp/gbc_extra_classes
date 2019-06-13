// Get all keys
var keys = document.querySelectorAll("#calculator span");
// Get display reference
var display = document.getElementById("display");
// Add onclick event to all the keys and perform operations
for (var i = 0; i < keys.length; i++) {
   keys[i].onclick = gotClicked(e);
}

function gotClicked(e) {
   var btnVal = this.innerHTML;
   console.log(btnVal);
   
   // Talk about data-num
   // console.log(this.dataset.num);
}