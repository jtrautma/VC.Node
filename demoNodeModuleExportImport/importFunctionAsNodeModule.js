console.log('We will import the function that adds two values and then call it')

// Import the function
const lib = require('./exportFunctionAsNodeModule');

// Call the function and print the result
result3 = lib.sumOfTwoValues(2, 2)
console.log(result3)