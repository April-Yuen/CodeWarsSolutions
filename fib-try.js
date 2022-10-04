// Fibonacci, Tribonacci and friends

// DESCRIPTION:
// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

// Take the length if the original array to find out how sum of the numbers. 
// then I want to make sure the next number in the sequence is the sum of those numbers. 
// then I want to make sure the following numbers in the sequence are the sum of the numbers of the length of the orginal sequence. 
// the sum of the numbers should be taken from the index of the numbers right before the sum. 
// I only want the array to be the length of n. 

// Edge cases= for arrays with two, the fibonacci sequence should be followed, so the sum of the two numbers before the sum. 

function Xbonacci(signature,n){
    let index = 0
    
    while(index < n){
      let ListOfNum = signature.slice(index, signature.length+1)
        let summed = ListOfNum.reduce((acc,cur) => acc + cur, 0)
        signature.push(summed)
        index++
    }
    return signature.slice(0, n)
  }
