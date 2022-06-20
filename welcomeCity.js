//PREP(parameters, returns, examples, pseudocode)

// Welcome to the City

// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// Create a function that takes in 3 parameters. It's name, city, and state. The name will be in the form of an array, with firstName, lastName
// Need to return a string Hello, name! Welcome to city, state.

// Use the template literal and indexing to access the part of name. Then place city and state in the template literals. 

function sayHello( name, city, state ) {
 return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))//'Hello, John Smith! Welcome to Phoenix, Arizona!','Hello, John Smith! Welcome to Phoenix, Arizona!')