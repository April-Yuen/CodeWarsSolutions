// Sum of Odd Cubed Numbers

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

// Note: There are ONLY integers in the JAVA and C# versions of this Kata.

import java.util.Arrays;

public class FindOddCubes {
 
 public static int cubeOdd(int arr[]) {
 
 return Arrays.stream(arr).filter(n -> n % 2 != 0).map(n -> n*n*n).sum();
  }
}
