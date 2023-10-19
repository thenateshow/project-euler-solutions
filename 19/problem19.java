import java.util.HashMap;

public class problem19{

	public static void main(String[] args){
		
		int sundays = 0;
		int year = 1900;
		Boolean isLeapYear = false;
		//int month = 0; //january
		int day = 1; //monday
		int dayCounter = 0;
		HashMap<Integer, Integer> monthLengths = new HashMap<Integer, Integer>();

		monthLengths.put(0, 31); //january
		monthLengths.put(1, 28); //february
		monthLengths.put(2, 31); //march
		monthLengths.put(3, 30); //april
		monthLengths.put(4, 31); //may
		monthLengths.put(5, 30); //june
		monthLengths.put(6, 31); //july
		monthLengths.put(7, 31); //august
		monthLengths.put(8, 30); //september
		monthLengths.put(9, 31); //october
		monthLengths.put(10, 30); //november
		monthLengths.put(11, 31); //december

		while(year <= 2000){
			//check if leap year
			if(year%4 == 0 && year%100 != 0 || year%400 == 0){
				isLeapYear = true;
			}
			else{
				isLeapYear = false;
			}

			for(int i = 0; i < 12; i++){
				System.out.println(day);
				if(day == 0 && year != 1900){
					sundays++;
				}
				dayCounter += monthLengths.get(i);
				day += monthLengths.get(i);
				day = day % 7;
			}

			year++;
			dayCounter = 0;
		}

		System.out.println(sundays);
		//Answer: 171
		
	}

}