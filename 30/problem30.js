function digits(num)
{
	var sum = 0;
	var str = "" + num;
	for(var i = 0; i < str.length; i++){
		sum += Math.pow(parseInt("" + str.charAt(i)), 5);
	}
	return sum;
}

function help()
{
	var sum = 0;
	for(var i = 2; i < 229999; i++){
		if(digits(i) == i){
			sum += i;
		}
	}
	return sum;
}
console.log(help());