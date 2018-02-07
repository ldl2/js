function previous_lengths(arr) {
	var next_length = [];
	for(var x = 0; x < arr.length; x++) {
		 next_length[x] = arr[x].length;
	}
	for (x = 0; x < (arr.length-1); x++) {
		arr[x+1] = next_length[x];
	}
	return arr;
}


tip = previous_lengths(["this", "is", "a new", "string"]);
console.log(tip);