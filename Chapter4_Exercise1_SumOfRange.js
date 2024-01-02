// Your code here.
function range(start, end, step) {
  step = (step || 1);
  console.log("step is ", step)
  var array = [];
  var i = start;
  while(i != end) {
    console.log(i)
    array.push(i);
    i += step;
    }
  console.log(i)
  array.push(i);
  console.log("array has ", array)
  }

function sum(range) {
   console.log("we are in the sum function")
   }
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55