function numWords()
{
	var total = 11; //"one thousand"
	for(var i = 1; i < 1000; i++){
		total+=countLetters(i);
	}
	return total;
}

function countLetters(num){
	var num = num;
	var sum = 0;
	if(num >= 100){
		var h = (""+num).charAt(0);
		if(h == '1'||h == '2'||h == '6'){
			sum += 3;
		}
		if(h == '3'||h == '7'||h == '8'){
			sum += 5;
		}
		if(h == '4'||h == '5'||h == '9'){
			sum += 4;
		}
		sum += 10; //"hundred and"
		num = parseInt((""+num).substring(1));
	}
	if(num>=10&&num<=15){
		if(num == 10){
			sum += 3;
		}
		if(num == 11||num == 12){
			sum += 6;
		}
		if(num == 13||num == 14){
			sum += 8;
		}
		if(num == 15){
			sum += 7;
		}
		num = 0;
	}
	if(num >= 16){
		var t = (""+num).charAt(0);
		if(t == '1'){
			sum += 4; //"teen"
		}
		if(t == '2'||t == '3'||t == '8'||t == '9'){
			sum += 6;
		}
		if(t == '4'||t == '5'||t == '6'){
			sum += 5;
		}
		if(t == '7'){
			sum += 7;
		}
		num = parseInt((""+num).substring(1));
	}
	var h = (""+num).charAt(0);
	if(h == '1'||h == '2'||h == '6'){
		sum += 3;
	}
	if(h == '3'||h == '7'||h == '8'){
		sum += 5;
	}
	if(h == '4'||h == '5'||h == '9'){
		sum += 4;
	}
	return sum;
}

console.log(numWords());