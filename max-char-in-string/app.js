function maxChar(str) {
	let charMap = {};
	let max = 0;
	let maxCh = "";

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	// console.log(charMap);
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxCh = char;
		}
		console.log(maxCh, max);
	}
}
maxChar("aaaabcccddefffff");
maxChar("apple 112233444");
