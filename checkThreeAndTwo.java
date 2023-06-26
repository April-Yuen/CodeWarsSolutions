// Check three and two

// DESCRIPTION:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

import java.util.HashMap;
import java.util.*;

public class Solution {
    public boolean checkThreeAndTwo(char[] chars) {
      // your code
      HashMap<Character, Integer> letterCounts = new HashMap<Character, Integer>();
      for(int i = 0; i < chars.length; i++){
        if(!letterCounts.containsKey(chars[i])){
          letterCounts.put(chars[i], 1);
        }else{
          letterCounts.put(chars[i], letterCounts.get(chars[i]) + 1);
        }
      }
      if(letterCounts.containsValue(2) && letterCounts.containsValue(3)){
        return true;
      }else{
        return false;
      }
    }
}