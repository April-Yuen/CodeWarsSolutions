// PREP(parameters, return, examples, pseudocode)

//String Templates - Bug Fixing #5

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//parameters- will be string, it can be multiplie items in the string. Will never be number, float, or undefined, null)
//return the template literal with the items listed in the string. 
//fix the bug in the function. 
//take the dots out of the parameters. 
//Took the octothorpe out b/c it should be the $ for the variable in the the return statement. 
//join is only on arrays not strings, so I need to do, template . split() to turn it into an array, and then do join. 
function buildString(...template){
    
    return `I like ${template.join(", ")}!`;
  }

console.log(buildString('Cheese','Milk','Chocolate'))// 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
  console.log(buildString('Cheese','Milk'))// 'I like Cheese, Milk!', 'Return the correct String');
  console.log(buildString('Chocolate'))// 'I like Chocolate!', 'Return the correct String');