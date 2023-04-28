// Removing Elements

// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

public class Kata {
  
    public static Object[] removeEveryOther(Object[] arr) {
      Object[] result = new Object[(arr.length + 1) /2];
      for(int i = 0; i < result.length; i++){
        result[i] = arr[i * 2];
      }
      return result;
    }
  }