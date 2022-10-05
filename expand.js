// Write Number in Expanded Form

// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// 1.split the number and convert it to toString first so that I can grab each number individually. It will also convert it to an array
// I am going to take the length of the array. I'm goiing to subtract the length by 1/ This will tell me how many zeros the multiple of 10 needs to be. 
// Convert each number into an integer
// multiply the number by the multiple of 10 from the length I had found before. 
// I can concatinate the numbers together and conver it into a string. 


function expandedForm(num) {
    let newArray = num.toString().split("")
    let exponent = newArray.length-1
    let expanded = []
  //   Afterwards I'm to join each number with a "+"
    for(let i = 0; i < newArray.length; i++){
      let multiplesOfTen = 10**exponent
      let expandedEl=Number(newArray[i]) * multiplesOfTen
      expanded.push(expandedEl)
      exponent--
    }
    return expanded.filter(num => num !==0).join(" + ")
  }

  console.log(expandedForm(12))// '10 + 2');
  console.log(expandedForm(42))// '40 + 2');
  console.log(expandedForm(70304))// '70000 + 300 + 4');  