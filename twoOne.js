// Two to One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    let news1 = ""
    let news2 = ""
    for (let i = 0; i < s1.length; i ++){
        if (news1.includes(s1[i])=== false){
            news1 += s1[i]
        }
    }
    for (let i = 0; i < s2.length; i++){
        if(news2.includes(s2[i])=== false){
            news2+= s2[i]
        }
    }
    let joined = news1.concat(news2)
    let unique = ""
    for (let i =0; i < joined.length; i++){
        if(unique.includes(joined[i])===false){
            unique += joined[i]
        }
    }
    return unique.split("").sort().join("")
  }

console.log(longest("aretheyhere", "yestheyarehere"))// "aehrsty")
 console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))// "abcdefghilnoprstu")
  console.log(longest("inmanylanguages", "theresapairoffunctions"))// "acefghilmnoprstuy")