function makeUniqueStr(str) {
	let finalStr = "";
	for (let i = 0; i < str.length; i++) {
		let canAdd = true;
      for (let j = 0; j < finalStr.length; j++) {
			if (str[i] == finalStr[j]) {
				canAdd = false;
			}
      }
		if (canAdd) {
			finalStr += str[i];
		}
	}
	return finalStr;
}
