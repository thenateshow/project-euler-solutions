function specialPyTrip()
{
	for(var i = 1; i<1000; i++){
		for(var j = 1; j<1000; j++){
			for(var k = 1; k<1000; k++){
				if((i+j+k==1000)&&(i*i+j*j==k*k)){
					return i+j+k;
				}
			}
		}
	}
}
console.log(specialPyTrip());