// Check three and two

// DESCRIPTION:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

import java.util.HashMap;
import java.util.Map;

public class Solution {
    public boolean checkThreeAndTwo(char[] chars) {
      // your code
      
      Map<Character, Integer> count = new HashMap<>();
      for(char ch : chars){
        if(!count.containsKey(ch)){
          count.put(ch, 1);
        }else{
          count.put(ch, count.get(ch) + 1);
        }
      }
      return count.size() == 2 && count.containsValue(3);
    }
}