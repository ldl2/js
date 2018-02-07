function Print_and_return() {
	var arr = [];
	part1 = prompt('what is the first value in the array: ');
	part2 = prompt('what is the second value in the array: ');
	arr.push(part1);
	arr.push(part2);
	console.log(arr[0]);
	return arr[1];
}
Print_and_return();