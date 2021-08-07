/*
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) { // comparing array lenghts
    if (arr1[i] !== arr2[i]) // checking if array is the same
      return false;
  }
  return true; // output true if arrays are the same
};

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
};
*/

const flatten = function(arr) {
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    // The Array.isArray() checks to see if value is an Array.
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(flatten(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));