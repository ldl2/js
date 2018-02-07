var arr1 = [1, 2, 3];
var arr2 = ["what", 2, 3];
var arr3 = [true, 2, 3];

function length(x){
	type = typeof(x[0]);
	console.log(type)
	if (type == 'number') {
		console.log(x[0] + x.length)
	}
	else if(type == 'string') {
		console.log (x[0].length +x.length)
	}
	else{
		if (x[0] == true){
			console.log (1 + x.length)
		}
		else{
			console.log (0 + x.length)
		}
	}
}

length(arr1);
length(arr2);
length(arr3);
