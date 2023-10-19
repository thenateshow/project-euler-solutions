public class problem12{
	public static void main(String[] args){
		/*
		int primes_below = 25;
		boolean[] is_prime = new boolean[primes_below];
		is_prime[0] = false;
		for(int i = 1; i < is_prime.length; i++){
			is_prime[i] = true;
		}
		for(int i = 2; i <= primes_below; i++){
			if(is_prime[i-1]){
				System.out.println(i);
				for(int j = i*i; j <= primes_below; j += i){
					is_prime[j-1] = false;
				}
			}
		}
		*/
		int current_num = 0;
		int count = 1;
		int current_num_factors = 0;
		while(current_num_factors < 500){
			current_num += count;
			int num_factors = 2;
			int i = 2;
			while(i*i < current_num){
				if(current_num % i == 0){
					num_factors += 2;
				}
				i++;
			}
			if(i*i == current_num){
				num_factors++;
			}
			count++;
			current_num_factors = num_factors;
		}
		System.out.println(current_num);
	}
}