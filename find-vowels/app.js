function findVowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

// function findVowels(str) {
// 	let counter = 0;
// 	const vowel = ["a", "e", "i", "o", "u"];
// 	for (let char of str.toLowerCase()) {
// 		if (vowel.includes(char)) {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }
console.log(findVowels("hello India"));
console.log(findVowels("aeiou"));
console.log(findVowels("hmmm"));
