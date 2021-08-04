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

const head = function(arrays) {
  if (arrays && arrays.length) {
    return arrays[0];
  } else {
    return undefined;
  }
};

assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");