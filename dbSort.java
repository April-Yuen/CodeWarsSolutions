// Double Sort

// DESCRIPTION:
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

import java.util.Arrays;
import java.io.*;
import java.util.ArrayList;
import java.util.*; 

// check to see if element is string or number. 
// if it is an int, then incretment int count. 
// if it is a string, increment string count. 
// create new arrays, one for int & add it to the array. 
// create string array & add the strings. 
// sort the int array
// sort the string array
// add both to a new obj array starting with int first
// return obj array. 

public class DoubleSort {
    public static Object[] dbSort(Object[] a){
      int intCount = 0;
      int strCount = 0;
      
      for(Object i : a){
        if(i instanceof Integer){
          intCount++;
        }else{
          strCount++;
        }
      }
     ArrayList<Integer> nums = new ArrayList<Integer>();
     ArrayList<String> strs = new ArrayList<String>();
      for(Object i : a){
        if(i instanceof Integer){
          nums.add((int)i);
        }else{
          strs.add((String)i);
        }
      }
      Collections.sort(nums);  
      Collections.sort(strs);
      
      Object[] result = new Object[intCount + strCount];
      
      int index = 0;

      for (Integer num : nums) {
        result[index++] = num;
      }

      for (String str : strs) {
        result[index++] = str;
      }

        return result;
      }
}