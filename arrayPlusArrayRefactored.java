// Array plus array

// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

public class Sum {

    public static int arrayPlusArray(int[] arr1, int[] arr2) {
      int sumOfArrays = 0;
      for(int i : arr1){
        sumOfArrays += i;
      }
      for(int j : arr2){
        sumOfArrays += j;
      }
      // arr1 + arr2 is not working...
      return sumOfArrays;
    }
  
  }