// Insert dashes

// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

import java.util.stream.*;

public class Solution {
  
  public static String insertDash(int num) {
    // Your code here...
    String str = String.valueOf(num);
    char[] numbers = str.toCharArray();
    String result = "";

  for(int i = 1; i < numbers.length; i++){
    int value1 = Character.getNumericValue(numbers[i-1]);
    int value2 = Character.getNumericValue(numbers[i]);
    result += value1;
    if(value1 % 2 != 0 && value2 % 2 != 0) {
        result += "-";
    }
  }
    
    result += numbers[numbers.length-1];
    return result;
  }
  
}