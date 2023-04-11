// Sentence Smash


// DESCRIPTION:
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

import java.util.Arrays;

public class SmashWords {

	public static String smash(String... words) {
    int lenOfWords = words.length;
    String[] sentence = Arrays.copyOfRange(words, 0, lenOfWords);
    return String.join(" ", sentence);
    // TODO Write your code below this comment please
  }
}