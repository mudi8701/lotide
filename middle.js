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

// Function to compare two arrays
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) { // comparing array lenghts
    if (arr1[i] !== arr2[i]) // checking if array is the same
      return false;
  }
  return true; // output true if arrays are the same
};

const middle = function(arr) {
  // for arrays with 1 or 2 elements
  if (arr.length <= 2 && arr.length > 0) {
    return [];
  // For arrays with an even number of elements
  } else if (arr.length % 2 === 0) {
    return [arr[Math.ceil(arr.length / 2) - 1], arr[Math.ceil(arr.length / 2)]];
  // for arraya with an odd number of elements
  } else {
    return arr[Math.floor((arr.length - 1) / 2)];
  }

};

//test code
// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]