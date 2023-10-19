function evenFib()
{
	var sum = 2;
	var last = 2;
	var last2 = 1;
	while(last+last2<4000000){
		if((last+last2)%2==0){
			sum+=(last+last2);
		}
		last = last + last2;
		last2 = last - last2;
	}
	return sum;
}
console.log(evenFib());