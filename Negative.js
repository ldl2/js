function negative(arr) {
	arr1 = [];
	y = 0;
	z = 0;
	for (var x = 0; x < arr.length; x++) {
		if (arr[x] == "food") {
			arr1[y] = "yummy";
			y++;
		}
		else {
			z++;
		}
	if (z == arr.length){
		arr1[0] = "I'm hungry";
	}
	}
	return arr1;
}

tip = negative(["food",-3,5]);
console.log(tip);
tip1 = negative([1,4,-5]);
console.log(tip1);

tip3 = negative(["food",-3,"food"]);
console.log(tip3);