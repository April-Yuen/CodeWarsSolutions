// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

public class Kata {
    public static int[] digitize(long n) {
      String s = String.valueOf(n);
      int num = s.length();
      int[] arr = new int[num];
      for(int i = 0; i < num; i++){
        arr[i] = (int) (s.charAt(num - i - 1)) -48;
      }
      
      return arr;
    }
  }