// magazine

//Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

 function ransomNote(note, magazine){
    // Remember to split the note and magazine. 
    const splitNote = note.split(" ")
    const splitMag = magazine.split(" ")
    let map = {}
    // set the words in the magazine into the hashmap. 
    for(let word of splitMag){
        map[word] = map[word] + 1 || 1
    }
    // iterate through the splitnote 
    for(let word of splitNote){
        // check to see if the hashmap has the splitnote. 
        if(map[word]){
            // if it does, decrement the value of the word down. 
            map[word]--
            // if the value goes below 0, return false.
            if(map[word] < 0){
                return false
            }
        // This else means that the hashmap doesn't have the note at all. Therefore, return false. 
        }else{
            return false
        }
    }
    // Otherwise, return true. 
    return true
 }

 console.log(ransomNote("sit ad est sint", magazine))//true
 console.log(ransomNote("sit ad est love", magazine))//false
 console.log(ransomNote("sit ad est sint in in", magazine))//true
 