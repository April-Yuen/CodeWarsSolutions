// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

// Notes
// Array/list size is at least 2 .

// Array/list's numbers Will be only Positives

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// productArray ({12,20}) ==>  return {20,12}
// Explanation:
// The first element in prod [] array 20 is the product of all array's elements except the first element

// The second element 12 is the product of all array's elements except the second element .

// productArray ({1,5,2}) ==> return {10,2,5}
// Explanation:
// The first element 10 is the product of all array's elements except the first element 1

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.

// productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
// Explanation:
// The first element 180 is the product of all array's elements except the first element 10

// The second element 600 is the product of all array's elements except the second element 3

// The Third element 360 is the product of all array's elements except the third element 5

// The Fourth element 300 is the product of all array's elements except the fourth element 6

// Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2

// create a new array. then take the product of the array. 
// divide the product by each element that I am looping through
// push the quotient into the new array. 
// push the product for each element into the array.
// loop through the array & divide the product by each element in the results array. 
// set the result array as the 


public class Solution
{
    public static long[] productArray(int[] numbers)
    {
      int n = numbers.length;
      long product = 1;
      for(int i = 0; i < numbers.length; i++){
        product *= numbers[i];
      }
      System.out.println(product);
      long prod[] = new long[n];
      for(int i = 0; i < prod.length; i++){
        long quotient = product/numbers[i];
        prod[i] = quotient;
      }
//       Try to return this statement
      
         return prod; // Do your magic!
      
    }
}