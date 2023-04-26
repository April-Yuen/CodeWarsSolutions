// Minimize Sum Of Array (Array Series #1)

// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
// minSum({9,2,8,7,5,4,0,6}) ==> return (74)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

// I need to sort the array from highest to lowest. 
// then I am multiplying the highest number * lowest number. 
import java.util.*;
import java.util.stream.IntStream;

public class Solution
{
    public static int minSum(int[] passed)
    {
      Arrays.sort(passed);
      int sumPro = 0;
      int largestIndex = passed.length-1;
      for(int i = 0; i < passed.length /2; i++){
        sumPro += passed[i] * passed[largestIndex];
          largestIndex--;
      }
      
        return sumPro; // Do your magic!
    }
}