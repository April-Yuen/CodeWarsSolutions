// Highest and Lowest

// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5")  // return "5 1"
// highAndLow("1 2 -3 4 5") // return "5 -3"
// highAndLow("1 9 3 4 -5") // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

import java.io.*;
import java.util.*;
import java.util.Arrays;

public class Kata {
  public static String highAndLow(String numbers) {
    String[] str = numbers.split(" ");
    int[] arr = new int[str.length];
    for(int i = 0; i < str.length; i++){
      arr[i] = Integer.valueOf(str[i]);
    }
    Arrays.sort(arr);
//     int[] newArr = new int[2];
//     newArr[0] = arr[arr.length-1];
//     newArr[1] = arr[0];
//     System.out.println(Arrays.toString(newArr));
//     String newStr = Arrays.toString(newArr);
      
//     System.out.println(Arrays.toString(newArr));
//     return newStr.replace(",", " ");
    return arr[arr.length-1] + " " + arr[0];
  }
}