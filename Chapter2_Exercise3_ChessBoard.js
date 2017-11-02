/*
CHESS BOARD

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

Source: http://eloquentjavascript.net/02_program_structure.html
*/

function printChessBoard(size) {
    let counter = 1
    let printer = 1
    oddline = ""
    evenline = ""
    while (counter <= size * .5) { // Width
        oddline = oddline + " #"
        evenline = evenline + "# "
        counter++
    }
    while (printer <= size * .5) { // Height: print n lines where length = width
        console.log(oddline)
        console.log(evenline)
        printer++
    }
}
printChessBoard(8)