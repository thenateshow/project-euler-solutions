public class problem15{
	static int COUNT = 0;
	public static void main(String[] args){
		int x = 12;
		int y = 12;
		step(x, y);
		System.out.println(COUNT);
	}
	public static void step(int x_loc, int y_loc){
		if(x_loc == 0 && y_loc == 0){
			COUNT++;
		}
		if(x_loc > 0){
			step(x_loc - 1, y_loc);
		}
		if(y_loc > 0){
			step(x_loc, y_loc - 1);
		}
	}
}

// a_n = (2n)
//		 (n)
// 2n choose n

/*

1: 2
2: 6	=> 2*4-2
3: 20 	=> 6*4-4
4: 70 	=> 20*4-10
5: 252	=> 70*4-28
6: 924 	=> 252*4-84

*/