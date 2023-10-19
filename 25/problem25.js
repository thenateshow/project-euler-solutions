function thousandDigit()
{
	var count = 2;
	var termN = "1";
	var termNminus1 = "1";
	var done = false;
	while(!done){
		var temp = termN;
		termN = addTerms(termN, termNminus1);
		termNminus1 = temp;
		count++;
		done = termN.length == 1000;
	}
	return count;
}

function addTerms(num1, num2)
{
	var total = "";
	var remainder = 0;
	if(num1.length == num2.length){
		for(var i = num1.length - 1; i >= 0; i--){
			var add = remainder + parseInt(num1.charAt(i)) + parseInt(num2.charAt(i));
			total = (add%10) + total;
			remainder = Math.floor(add/10);
		}
	}
	else{ //num1 has 1 more digit than num2
		var firstOfNum = "" + num1.charAt(0);
		num2 = "0" + num2;
		for(var i = num1.length - 1; i >= 0; i--){
			var add = remainder + parseInt(num1.charAt(i)) + parseInt(num2.charAt(i));
			total = (add%10) + total;
			remainder = Math.floor(add/10);
		}
	}
	total = remainder + total;
	var zeros = total.charAt(0) == '0';
	while(zeros){
		total = total.substring(1);
		zeros = total.charAt(0) == '0';
	}
	return total;
}

console.log(thousandDigit());