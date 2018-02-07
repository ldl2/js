

function celsiusToFahrenheit(cDegrees) {
	fDegrees = (9/5 * cDegrees) + 32;
	return fDegrees;
}

fahrenheit = 300;

for(celsius = 200; celsius < fahrenheit ; celsius--){
	fahrenheit = celsiusToFahrenheit(celsius);
	if(celsius == fahrenheit){
		console.log(fahrenheit);	
	}
}

