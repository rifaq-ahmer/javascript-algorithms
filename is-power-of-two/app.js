// function isPowerOfTwo(number) {
// 	if (number < 1) {
// 		return false;
// 	}
// 	let dividedNumber = number;
// 	while (dividedNumber != 1) {
// 		if (dividedNumber % 2 != 0) {
// 			return false;
// 		}
// 		dividedNumber = dividedNumber / 2;
// 	}
// 	return true;
// }

// Time Complexity..

// Best Case      13 => O(1)   // not Divisible  by 2
//Worst Case      1,125,899,906,842,624 => O(log n)
// Average Case   =. O(log n)

function isPowerOfTwo(number) {
	if (number < 1) {
		return false;
	}
	return (number & (number - 1)) === 0;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
