// Your code here.
function range(start, end, step) {
  var rangeArray = []
  if (arguments.length < 3) {
    var step = 1
      }
  console.log("step is", step)
  for(var j = start; j <= end; j += step) {
    rangeArray.push(j);
     }
    return rangeArray
}

function sum(start, end) {
  console.log("let's sum it up")
  //range(start, end)
  }

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55