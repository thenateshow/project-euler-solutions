function largestPal()
{
	var pal = 0;
	for(var i = 100; i<999; i++){
		for(var j = 100; j<999; j++){
			if(checkPalindrome(i*j)&&i*j>pal){
				pal = i*j;
			}
		}
	}
	return pal;
}

function checkPalindrome(num){
	var numStr = ""+num;
	if(numStr.length%2==0){
		for(var i = 0; i < numStr.length/2; i++){
			if(numStr.charAt(i)!=numStr.charAt(numStr.length-1-i)){
				return false;
			}
		}
	}
	else{
		for(var i = 0; i < Math.floor(numStr.length/2); i++){
			if(numStr.charAt(i)!=numStr.charAt(numStr.length-1-i)){
				return false;
			}
		}
	}
	//Log.Message(num);
	return true;
}
console.log(largestPal());