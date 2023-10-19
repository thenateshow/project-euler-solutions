function smallestMult()
{
	var good = true;
	var num = 50000000;
	while(num<500000000){
		for(var i = 1; i<=20; i++){
			if(num%i!=0){
				good = false;
			}
		}
		if(good){
			return num;
		}
		else{
			num++;
			good=true;
		}
	}
	return num;
}
console.log(smallestMult());