// Beginner - Reduce but Grow

// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

import java.util.stream.*;
import java.util.*;

public class Kata{

  public static int grow(int[] x){
    
    int result = Arrays.stream(x)
                  .reduce(1, (acc, cur) -> acc * cur);

    return result;
  
  }

}