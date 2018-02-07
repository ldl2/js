function seven_to_most(arr) {
	for( var x = 1; x<arr.length; x++) {
		arr[x] = arr[x] + 7;
	}
	return arr;
}

tip = seven_to_most([1, 2, 4, 5]);
console.log(tip);