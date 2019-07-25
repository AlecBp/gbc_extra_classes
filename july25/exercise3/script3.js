function myFunction(len) {
	let str = "";
	for (let i = 0; i < len; i++) {
		let random = Math.floor(Math.random() * 10);
		let canAdd = true;

		if (random % 2 == 0) {
			canAdd = false;
		}

		if (canAdd) {
			str += random;
		} else {
			i--;
		}
	}
	return str;
}

