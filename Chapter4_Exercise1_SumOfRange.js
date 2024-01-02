// Your code here.
function range(start, end, step) {
  step = (step || 1);
  var array = [];
  var i = start;
  while(i != end) {
    array.push(i);
    i += step;
    }
  array.push(i);
  return(array)
  }

function sum() {
   console.log("we are in the sum function")
   console.log(arguments[0].length)
   //for(var j=0; j<=arguments[0].length; j++)
   }
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55