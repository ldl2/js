function biggie(arr){
	for(var x = 0; x < arr.length; x++ ){
		if (arr[x] > 0){
			arr[x] = 'big';
		}
	}
	return arr;
}

tip = biggie([-1,3,5,-5])
console.log(tip)