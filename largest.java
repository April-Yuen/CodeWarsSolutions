// Largest Elements

// DESCRIPTION:
// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, new int[]{7, 6, 5, 4, 3, 2, 1})
// // => new int[]{6, 7}

import java.util.Arrays;
import java.util.*;

public class Solution {
  
   public static int[] largest(int n, int[] arr) {
     
     Integer[] result = new Integer[n];
      Integer[] boxedArray = Arrays.stream(arr) // IntStream
                                .boxed()                // Stream<Integer>
                                .toArray(Integer[]::new);
     Arrays.sort(boxedArray, Collections.reverseOrder());
     for(Integer i = 0; i < n; i++){
       result[i] = boxedArray[i];
       System.out.println(boxedArray[i]);
     }
     int[] intArray = Arrays.stream(result).mapToInt(Integer::intValue).sorted().toArray();
     
     return intArray;
//      return new int[]{};
   }
}