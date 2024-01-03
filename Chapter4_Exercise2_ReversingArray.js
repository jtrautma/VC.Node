// Your code here.





// Your code here.
function reverseArray(array) {
  var modArray = []
  for(var i = array.length-1; i >= 0; i--) {
    modArray.push(array[i])
    }
    return modArray
  }

function reverseArrayInPlace(arrayValue) {
  var arrayRev = []
  for(var j = arrayValue.length-1; j>=0; j--) {
  arrayRev.push(arrayValue[j])
    }
  return arrayRev
  }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
// → [5, 4, 3, 2, 1]

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]