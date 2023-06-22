// Bingo ( Or Not )

// DESCRIPTION:
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

import java.util.Arrays;
import java.util.stream.*;
import java.util.*;

public class BingoOrNot {
  public static String bingo(int[] numberArray){
    LinkedHashSet<Integer> set = new LinkedHashSet<Integer>();
    for (int i = 0; i < numberArray.length; i++)
            set.add(numberArray[i]);
      boolean winBingo = false;
      int count = 0;
    for(Integer i : set){
      if(i == 2){
        winBingo = true;
        count++;
      }else if(i == 9){
        winBingo = true;
        count++;
      }else if(i == 14){
        winBingo = true;
        count++;
      }else if(i == 7){
        winBingo = true;
        count++;
      }else if(i == 15){
        winBingo = true;
        count++;
      }
    }
    
    return winBingo == true && count >= 5 ? "WIN" : "LOSE";
  }
}

