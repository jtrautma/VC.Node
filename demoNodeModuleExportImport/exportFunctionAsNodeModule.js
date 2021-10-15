console.log('We will create a function that adds two values and then export it')

let valueOne = 15
let valueTwo = 20

console.log('We add', valueOne, '+', valueTwo)


// This defines the function
function sumOfTwoValues(a, b) {
    return a + b
}

// Now we call the function
let result1 = sumOfTwoValues(valueOne, valueTwo)

// And print the result
console.log(result1)

// Let's do it again with numbers instead of variables
let result2 = sumOfTwoValues(5, 3)
console.log(result2)

// Export the function
module.exports = {
    sumOfTwoValues
}
