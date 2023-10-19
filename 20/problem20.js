function factorialDigitSum()
{
	var current = "24";
	for(var i = 5; i <= 100; i++){
		current = add(current, i);
	}
	return addDigits(current);
}

function reverse(str)
{
	var newStr = "";
	for(var i = 1; i <= str.length; i++){
		newStr += str.charAt(str.length - i);
	}
	return newStr;
}

function removeLeadingZeros(num)
{
	var zero = (num.charAt(0) == '0');
	while(zero){
		num = num.substring(1);
		zero = (num.charAt(0) == '0');
	}
	return num;
}

function add(num, times)
{
	var str = ""; //reversed new number
	var remainder = 0;
	var place = 0;
	var noRem = 0;
	for(var i = num.length - 1; i >= 0; i--){
		noRem = times * parseInt("" + num.charAt(i));
		place = remainder + noRem;
		remainder = Math.floor(place/10);
		str += place%10;
	}
	str = "" + remainder + reverse(str);
	str = removeLeadingZeros(str);
	return str;
}

function addDigits(str)
{
	var sum = 0;
	for(var i = 0; i < str.length; i++){
		sum += parseInt("" + str.charAt(i));
	}
	return sum;
}

console.log(factorialDigitSum());