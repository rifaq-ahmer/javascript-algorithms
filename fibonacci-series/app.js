function fib(n) {
	const numbers = [1, 1]; //executes 1 time
	for (let i = 2; i < n + 1; i++) {
		numbers.push(numbers[i - 2] + numbers[i - 1]); //executes  n-1 time
	}
	console.log(numbers); //executes 1 time
	return numbers[n]; //executes 1 time
}
console.log(fib(4));

// Time Complexity
// O(n) => Linear Time Compexity..!
