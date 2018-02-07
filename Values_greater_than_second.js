var arr = [];


var arr2 = [];

function fun(){
	item = prompt('what is the next value: (stop to exit) ');
	while (item != 'stop') {
			try {
				typeof(item) == 'number';
				arr.push(item);
			}
			catch{
				continue;
			}
		try{
				sec = arr[1]
			}
			catch{
				console.log("we needed more values please restart");
			}}
	for(var x = 0; x<arr.length; x++) {
			if (sec < arr[x]) {
				arr2.push(arr[x]);
			}
		}

	console.log(arr2.length + 1);
}
fun();