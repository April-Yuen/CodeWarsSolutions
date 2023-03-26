// Vowel Count

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

public class Vowels {

    public static int getCount(String str) {
      char[] vowelsToSearch = {'a', 'e', 'i', 'o', 'u'};
      String toLower = str.toLowerCase();
      int numVowels = 0;
      for(int i = 0; i < toLower.length(); i++){
        char ch = toLower.charAt(i);
        for(int j = 0; j < vowelsToSearch.length; j++){
          if(vowelsToSearch[j] == ch){
            numVowels += 1;
          }
        }
      }
      return numVowels;
    }
  
  }