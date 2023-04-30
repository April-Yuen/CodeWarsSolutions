// //Maximum Triplet Sum (Array Series #7)

// DESCRIPTION:
// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// Input >> Output Examples
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
// Explanation:
// As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
// Explanation:
// As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

// 3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
// Explanation:
// As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

// Note : duplications are not included when summing , (i.e) the numbers added only once .

import java.util.Collections;
import java.util.Arrays;

public class Solution
{
    public static int maxTriSum (int[] numbers)
    // turn the array into a stream
    {       return Arrays.stream(numbers)
        // turn the stream into a collection, I need to box the elements because I have primitive int values
        // & collection api expects objects. The boxed turns the primitive to objects. 
               .boxed()
        // to use the sorted method & reverse the order, I need to use the collection stream.
               .sorted(Collections.reverseOrder())
        // returns unique elements
               .distinct()
        // limit to the first 3 elements. 
               .limit(3)
        // convert each of the elements to int so that it's not an object. 
               .mapToInt(i -> i)
        // find the sum of the imt. 
               .sum();
    }
}