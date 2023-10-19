function largestPrimeFactor()
{
	var factors = [];
	var primeFactors = [];
	for(var i=1; i<Math.sqrt(600851475143); i++){
		if(600851475143%i==0){
			factors[factors.length] = i;
		}
	}
	for(var i = 0; i < factors.length; i++){
		var prime = true;
		for(var j = 2; j < factors[i]; j++){
			if(factors[i]%j==0){
				prime = false;
			}
		}
		if(prime){
			primeFactors[primeFactors.length] = factors[i];
		}
	}
	return (primeFactors[primeFactors.length-1]);
}
console.log(largestPrimeFactor());