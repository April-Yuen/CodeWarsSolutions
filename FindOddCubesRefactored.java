// Sum of Odd Cubed Numbers

public class FindOddCubes {
 
    public static int cubeOdd(int arr[]) {
    
    int sum = 0;
      for(int i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
          int cubed = arr[i] * arr[i] * arr[i];
          System.out.println(cubed);
          sum += cubed;
        }
      }
    
      return sum;
     }
   }