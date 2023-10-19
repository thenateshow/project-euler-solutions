function sumSqrDiff()
{
	var total=0;
	for(var i=1;i<=100;i++){
		total+=i;
	}
	total=total*total;
	for(var i=1;i<=100;i++){
		total-=(i*i);
	}
	return total;
}
console.log(sumSqrDiff());