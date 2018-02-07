function printreturn(arr) {
	for (var x=0; x < arr.length; x++){
		high = arr[0];
		low = arr[0];
			if( low > arr[x]) {
				low = arr[x];
			}
			else if( high < arr[x]){
				high = arr[x];
				return high;
			}
		console.log(low);	
	}
}

tip = printreturn([-1,3,5,-5]);
console.log (tip);