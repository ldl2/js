arr = [];

item = prompt('what is the next value: (stop to exit) ');
while (item != 'stop') {
		try {
			typeof(item) == 'number';
			arr.push(item);
		}
		catch{
			continue;
		}
if(arr[0] < arr.length) {
	console.log('Too small!');
}
else if (arr[0] > arr.length) {
	console.log('Too Big');
}
else {
	console.log();
}