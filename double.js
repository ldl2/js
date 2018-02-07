arr2 = [];

function double(arr) {
	for (var x =0; x<arr.length; x++)
		arr2[x] = arr[x]*2;
		return arr2;
}

tip = double([1,2,3]);
console.log(tip)