// Find numbers which are divisible by given number

// DESCRIPTION:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

import java.util.*;
public class EvenNumbers {
  public static int[] divisibleBy(int[] numbers, int divider) {
    int count = 0;
    for(int i = 0; i < numbers.length; i++){
      if(numbers[i] % divider ==0){
        count += 1;
      }
    }
    int j = 0;
    int[] result = new int[count];
    for(int i : numbers){
      if(i % divider ==0){
        result[j] = i;
        j++;
      }
    }
    return result;
  }
}