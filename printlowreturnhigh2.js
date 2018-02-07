function printreturn(arr) {
	y = arr[arr.length-2];
	console.log(y);
	for (var x=0; x < arr.length; x++){
			if( arr[x] % 2 != 0) {
				var odds = [];
				odds.push(arr[x]);
				return odds[0]; 
			}
	}
}

tip = printreturn([-1,3,5,-5]);
console.log (tip);