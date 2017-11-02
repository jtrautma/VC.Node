/*
LOOPING A TRIANGLE

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.

Source: http://eloquentjavascript.net/02_program_structure.html
*/


/*
// SOLUTION
let counter = 0
let hashes = ''
while (counter <= 7) {
    console.log(hashes)
    hashes = hashes + '#'
    counter++
}



// ADVANCEMENT_1: CONSTRUCTING A FUNCTION THAT ALLOWS FOR A VARIABLE AMOUNT OF HASHES
function printHashes(desiredHashes) {
    let counter = 0
    let hashes = ''
    while (counter <= desiredHashes) {
        console.log(hashes)
        hashes = hashes + '#'
        counter++
    }
}
printHashes(3) // where the number in the paranthesis allows me to specify the maximum number of hashes
*/


/*
// ADVANCEMENT_2: REPLACING "while" WITH "for"
let hashes = ""
for (let counter = 0; counter <= 7; counter++)
    console.log(hashes = hashes + "#")
*/



// ADVANCEMENT_3: EMBED THE "for" NOTATION INTO A FUNCTION
function printHashes(desiredHashes) {
    let hashes = ''
    for (let counter = 0; counter < desiredHashes; counter++) {
        hashes = hashes + "#"
        console.log(hashes)
    }
}
printHashes(7) // where the number in the paranthesis allows me to specify the maximum number of hashes