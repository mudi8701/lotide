// Function to compare two arrays
const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) { // comparing array lenghts
    if(arr1[i] !== arr2[i]) // checking if array is the same
    return false;
  }
  return true; // output true if arrays are the same
}

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
        return false;
      }
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
return true;
}

const without = function (source, remove) {
  
  for (let a = 0; a < remove.length; a++) {
    for (let b = 0; b < source.length; b++) {
      if (source[b] === remove[a]) {
        source.splice(b, 1);
      }
    }
  }
  return source;
}

console.log(without([1, 2, 3], [1]));

// Testing parameters
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

