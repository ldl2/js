function swap(arr) {
	arr1 = [];
	for (var x = 0; x < arr.length; x++) {
	a	rr1[arr.length-(x+1)] = arr[x];
	}
	return arr1;
}

tip = swap([1,2,3,4,5,6]);
console.log(tip);
tip = swap([true,42,"Ada",2,"pizza"]);
console.log(tip);


add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).