function collatz()
{
	var curr = 0;
	var longest = 0;
	var temp = 0;
	for(var i = 1; i < 1000000; i++){
		if(i%100==0){
		}
		temp = test(i);
		if(temp>longest){
			longest = temp;
			curr = i;
		}
	}
	//Log.Message(curr);
	//Log.Message(longest);
	return "curr: " + curr + " longest: " + longest;
}

function test(num){
	if(num == 1){
		return 1;
	}
	else if(num%2==0){
		return 1 + test(num/2);
	}
	else{
		return 1 + test(3*num + 1);
	}
}
console.log(collatz());