import java.util.List;
import java.util.ArrayList;
public class problem50{
	public static void main(String[] args){
		int primes_below = 1000000;
		boolean[] is_prime = new boolean[primes_below];
		is_prime[0] = false;
		for(int i = 1; i < is_prime.length; i++){
			is_prime[i] = true;
		}
		for(int i = 2; i <= primes_below; i++){
			if(is_prime[i-1]){
				for(int j = i*i; j <= primes_below && j > 0; j += i){
					is_prime[j-1] = false;
				}
			}
		}
		List<Integer> primes = new ArrayList<Integer>();
		for(int i = 0; i < is_prime.length; i++){
			if(is_prime[i]){
				primes.add(i+1);
			}
		}
		int largest = primes.get(primes.size() - 1);
		int temp_sum = 0;
		int highest_prime = 0;
		for(int i = 0; i < primes.size(); i++){
			temp_sum = 0;
			for(int j = i; j < primes.size(); j++){
				
			}
		}
	}
}