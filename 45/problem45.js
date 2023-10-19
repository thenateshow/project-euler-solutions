function shapeNums()
{
	var done = false;
	var t = 286;
	var p = 166;
	var h = 144;
	var tf = 40755;
	var pf = 40755;
	var hf = 40755;
	while(!done){
		tf = getT(t);
		pf = getP(p);
		hf = getH(h);
		if(!(tf == pf || tf == hf || pf == hf)){
			if(tf > pf && pf > hf){
				p++;
				h++;
			}
			else if(pf > tf && pf > hf){
				t++;
				h++;
			}
			else{
				p++;
				t++;
			}
		}
		else{
			if(tf == pf && tf == hf){
				done = true;
			}
			else{
				if(tf == pf && hf > tf){
					t++;
					p++;
				}
				else if(tf == pf){
					h++;
				}
				else if(pf == hf && tf > pf){
					p++;
					h++;
				}
				else if(pf == hf){
					t++;
				}
				else if(tf == hf && pf > tf){
					t++;
					h++;
				}
				else{
					p++;
				}
			}
		}
	}
	return tf;
}

function getT(n)
{
	return (n *(n + 1)) / 2;
}

function getP(n)
{
	return (n * (3 * n - 1)) / 2;
}

function getH(n)
{
	return n * (2 * n - 1);
}

console.log(shapeNums());