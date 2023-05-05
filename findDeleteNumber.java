// Lost number in number sequence

import java.util.stream.IntStream;

public class Kata {
    public static int findDeletedNumber(int[] arr, int[] mixedArr){ 
      return IntStream.of(arr).sum() - IntStream.of(mixedArr).sum();
//       Arrays.sort(mixedArr);
//       Arrays.sort(arr);
//       for(int num : mixedArr){
//         System.out.print(num);
//       }
//       for(int num : arr){
//         System.out.print(num);
//       }
      
//       for(int i = 0; i < arr.length-1; i++){
//         if(arr[i] != mixedArr[i]){
//           return arr[i];
//         }
//       }
//       return 0;
    //Your code here
   }
}