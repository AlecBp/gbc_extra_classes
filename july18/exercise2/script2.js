arr = [5, 8, 10, 7, 9];
output = "";
arr[arr.length] = 8;
out = document.getElementById("target");
out.innerHTML = arr.join("+");
out.innerHTML += "<br>";
for (let i = arr.length - 1; i > 0; i--) {
	if (i % 2) {
		output += arr[i] + "-";
		output += f(arr[i]);
	}
}
out.innerHTML += output;

function f(a) {
	let c = "<br>";
	if (a % 3) {
		c += a * 2;
	} else {
		c = 1;
	}
	return c;
}
