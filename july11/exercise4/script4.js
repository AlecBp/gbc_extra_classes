sampleStr = "ABCDEFG";
let target = document.getElementById("target");
let input = document.querySelector("input");

function getLastDigits(/*myStr*/) {
   myStr = input.value;
   
	let outStr = "";
	for (let i = 0; i < myStr.length; i++) {
		tmp = myStr.charCodeAt(i);
		tmp = String(tmp);
		console.log(tmp);
		outStr += tmp[tmp.length - 1];
	}
	target.innerHTML = outStr;
	// return outStr;
}