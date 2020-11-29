function arrChunk(arr, size) {
	const chunked = [];
	let index = 0;
	while (index < arr.length) {
		chunked.push(arr.slice(index, index + size));
		index += size;
	}
	console.log(chunked);
}
unChunked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrChunk(unChunked, 2);
