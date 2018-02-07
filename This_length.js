num1 = prompt(" Give me a number to be the array length: ");
num2 = prompt(" Give me a number to be the array values: ");
arr = [];

if(num1 == num2){
	console.log('jinx');
}
else{
	while(arr.length < num1){
		arr.push(num2);
	}
}
