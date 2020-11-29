//--------1st Possible Solution---------

// function palindrom(str) {
// 	const result = str.split("").reverse().join("");
// 	if (result === str) {
// 		return true;
// 	} else return false;
// }

//-------2nd Possible Solution------

function palindrom(str) {
	const result = str.split("").every((char, i) => {
		return char === str[str.length - i - 1];
	});
	return result;
}
console.log(palindrom("abba"));
console.log(palindrom("malayalam"));
console.log(palindrom("company"));
