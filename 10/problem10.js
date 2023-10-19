function sumOfPrimes()
{
	var sum = 2;
	for(var i = 3; i<2000000; i+=2){
		if(checkPrime(i)){
			sum+=i;
		}
	}
	return sum;
}

function checkPrime(num){
	if(sumDigits(num, 0) == 3){
		return false;
	}
	else if(num!==5&&(num%5==0)||num!=7&&(num%7==0)||num!=11&&(num%11==0)){
		return false;
	}
	else{
		for(var i = 3; i <= Math.sqrt(num); i+=2){
			if(num%i==0){
				return false;
			}
		}
		return true;
	}
}

function sumDigits(num, curr){
	if(num < 10){
		return num + curr;
	}
	else{
		return sumDigits(Math.floor(num/10), curr + num%10);
	}
}
console.log(sumOfPrimes());