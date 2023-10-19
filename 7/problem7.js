function TenThouPrime()
{
	var count = 0;
	var num = 2;
	while(true){
		var prime = true;
		for(var j = 2; j < num; j++){
			if(num%j==0){
				prime = false;
			}
		}
		if(prime){
			count++;
			if(count==10001){
				return num;
			}
		}
		num++;
	}
}
console.log(TenThouPrime());