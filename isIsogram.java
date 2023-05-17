// Isograms

// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//split, convert to array, then find the distinct elements using stream API, then compare 
// str.lowercase() to the stream disinct. 
import java.util.Arrays;
import java.util.stream.Stream;
import java.util.stream.Collectors;

public class isogram {
    public static boolean  isIsogram(String str) {
        String strOne = str.toLowerCase();
      String[] letters = strOne.split("");
      Stream<String> stream1 = Arrays.stream(letters);
      String joinedString = stream1.distinct().collect(Collectors.joining());
      return (strOne.equals(joinedString));
    } 
}