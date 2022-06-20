// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let str1 = str.replace(/a/g,"")
    let str2 = str1.replace(/e/g, "")
    let str3 = str2.replace(/i/g, "")
    let str4 = str3.replace(/o/g, "")
    let str5 = str4.replace(/u/g, "")
    let str6 = str5.replace(/A/g,"")
    let str7 = str6.replace(/E/g, "")
    let str8 = str7.replace(/I/g, "")
    let str9 = str8.replace(/O/g, "")
    let str10 = str9.replace(/U/g, "")
    return str10
  }

  console.log(disemvowel("This website is for losers LOL!"))// "Ths wbst s fr lsrs LL!")
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))// "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
  console.log(disemvowel("What are you, a communist?"))// "Wht r y,  cmmnst?")
    