function digitCancel()
{
	var numerators = 1
	var denominators = 1
	var count = 0;
	for(var i = 10; i <= 98; i++){
		if(initialCheck(i)){
			for(var j = 11; j <= 99; j++){
				if(initialCheck(j)){
					var both = checkBoth(i, j);
					if(both != 0 && checkSimplify(i, j, both)){
						//Log.Message(i + "/" + j);
						numerators *= i;
						denominators *= j;
						count++;
					}          
				}
			}
		}
	}
	//Log.Message(simplify(numerators, denominators));
	//Log.Message(numerators + "/" + denominators);
	//Log.Message(count);
	return simplify(numerators, denominators);
}

function initialCheck(num)
{
	if(num % 10 == 0){
		return false;
	}
	return true;
}

function checkBoth(num1, num2){
	if(num1 == num2){
		return 0;
	}
	var str1 = "" + num1;
	var str2 = "" + num2;
	if(str1.charAt(0) == str2.charAt(1)){
		return 1;
	}
	if(str1.charAt(1) == str2.charAt(0)){
		return 2;
	}
	return 0;
}

function checkSimplify(num1, num2, bothVal){
	if(bothVal == 2){
		var top = Math.floor(num1/10);
		var bottom = num2%10;
		if(top >= bottom){
			return false;
		}
		return num1/num2 == top/bottom;
	}
	else{
		var top = num1%10;
		var bottom = Math.floor(num2/10);
		if(top >= bottom){
			return false;
		}
		return num1/num2 == top/bottom;
	}
}

function simplify(numerator, denominator)
{
	while(numerator % 2 == 0 && denominator % 2 == 0){
		numerator /= 2;
		denominator /= 2;
	}
	return numerator + "/" + denominator;
}
console.log(digitCancel());