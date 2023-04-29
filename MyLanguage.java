// My Language Skills

// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java" => 10, "Ruby" => 80, "Python" => 65}   -->  ["Ruby", "Python"]
// {"Hindi" => 60, "Dutch" => 93, "Greek" => 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++" => 50, "ASM" => 10, "Haskell" => 20}    -->  []



import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.stream.*;
import java.util.*;

public class MyLanguages {
 
  public static List<String> myLanguages(final Map<String, Integer> results) {
     return results.entrySet()
       .stream()
       .filter(entry -> entry.getValue() >= 60)
       .sorted((num1,num2) -> Integer.compare(num2.getValue(), num1.getValue()))
       .map(num -> num.getKey())
       .collect(Collectors.toList());

  }
}