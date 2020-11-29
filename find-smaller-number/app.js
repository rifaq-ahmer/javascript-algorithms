function smallInArray(numbers) {
	let currentMin = numbers[0]; // 1
	for (const num of numbers) {
		// 1
		if (num < currentMin) {
			// n
			currentMin = num; //  depends on case
		}
	}
	return currentMin; // 1
}

// Best Case => O(n)
// Worst Case => O(n)
// Average Case => O(n)

console.log(smallInArray([1, 2, 3]));
console.log(smallInArray([4, 7, 2]));
console.log(smallInArray([101, 65, 92]));
console.log(smallInArray([12, 21, 762]));
