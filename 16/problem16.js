function powerDigSum()
{
	var ans = "1";
	for(var i = 1; i <= 1000; i++){
		ans = strAdd(ans);
	}
	return addDigits(ans);
}

function strAdd(num)
{
	var doubled = "";
	var remain = 0;
	for(var i = num.length - 1; i >= 0; i--){
		var dub = remain + (2 * (parseInt("" + num.charAt(i))));
		doubled = (dub%10) + doubled;
		remain = Math.floor(dub/10);
	}
	doubled = remain + doubled;
	var zeros = doubled.charAt(0) == '0';
	while(zeros){
		doubled = doubled.substring(1);
		zeros = doubled.charAt(0) == '0';
	}
	return doubled;
}

function addDigits(num)
{
	var sum = 0;
	for(var i = 0; i < num.length; i++){
		sum += parseInt(num.charAt(i));
	}
	return sum;
}
console.log(powerDigSum());