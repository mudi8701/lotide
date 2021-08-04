// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // string literals
    // console.log('Assertion Pass:' + actual + '===' + expected)
    // string concatenate
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to compare two arrays
const eqArrays = function(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) { // comparing array lenghts
    if(arr1[i] !== arr2[i]) // checking if array is the same
    return false;
  }
  return true; // output true if arrays are the same
}

// Test parameters
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
