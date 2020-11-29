//--------Reverse An Integer Number------

function reverseInt(n) {
	const reversed = n.toString().split("").reverse().join("");
	return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(98));
console.log(reverseInt(-34));
console.log(reverseInt(500));
console.log(reverseInt(-241));
