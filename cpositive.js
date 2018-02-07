function cpositive(arr){
	var count = 0;
	for(var x =0; x<arr.length; x++) {
		if(arr[x] > 0) {
			count++;
		}
	}
	arr[arr.length-1] = count;
	return arr
}

tip= cpositive([-1,1,1,1]);
console.log(tip);