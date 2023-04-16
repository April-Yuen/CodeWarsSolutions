//Flatten and sort an array

// DESCRIPTION:
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

import java.util.*;

public class Kata {

	public static int[] flattenAndSort(int[][] array) {		
		int length = 0;
    for(int[] line: array){
      length += line.length;
    }
    System.out.println(length);
    int[] flattened = new int[length];
    int i = 0;
      for(int[] line : array){
        for(int cell : line){
          flattened[i] = cell;
          i++;
        }
      }
    Arrays.sort(flattened);
    return flattened;
	}

}

