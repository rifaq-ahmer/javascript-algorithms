// function reverse(str) {

//--------1st Possible solution-----------

// 	const arr = str.split("");
// 	arr.reverse();
// 	 return arr.join("");

//    --------2nd Possible solution-----------

// 	return str.split("").reverse().join("");
// }

// function reverse(str) {

// --------3rd Possible solution-----------

// 	let result = "";
// 	for (let char of str) {
// 		result = char + result;
// 	}
// 	return result;
// }

function reverse(str) {
	//--------4th Possible solution-----------
	return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(reverse("abcde"));
console.log(reverse("company"));
