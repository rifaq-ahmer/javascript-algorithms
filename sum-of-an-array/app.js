// function sumNumbers(numbers) {
// 	return numbers[0] + numbers[1] + numbers[2];  Time Complexity o(1)
// }

// BEST POSSIBLE WAY..
function sumNumbers(numbers) {
	result = 0; //executes 1 time
	for (const number of numbers) {
		//executes 1 time
		result += number; //executes 3 time
	}
	return result; //executes 1 time
}
console.log(sumNumbers([1, 3, 10, 50]));

//numbers [1, 3, 10]; n = 3;
// T = 1 + 1 + 1 +3;
// T = 3 + 1*n;
// T = 1*n
// T = n
// T = o(n) => Linear Time Complexity

// function sumNumbers(numbers) {
// 	return numbers.reduce((sum, currNum) => sum + currNum, 0);Time Complexity => o(n)
// }

// console.log(sumNumbers([1, 3, 10, 50]));
