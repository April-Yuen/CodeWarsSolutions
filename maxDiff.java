// max diff - easy

// DESCRIPTION:
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

import java.util.Arrays;

public class Kata {

  public static int maxDiff(int[] lst) {
    if(lst.length == 0){
      return 0;
    }
  Arrays.sort(lst);
    int lastNum = lst.length-1;
    int difference = lst[lastNum] - lst[0];
    return difference;
  }
}