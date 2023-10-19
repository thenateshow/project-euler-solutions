function spiralDiag()
{
	var sum = 1;
	for(var i = 3; i <= 1001; i+=2){
		sum = sum + (4 * Math.pow(i, 2)) - (6 * i) + 6;
	}
	return sum;
}
console.log(spiralDiag());