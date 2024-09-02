const arr = [2,3,4,5,6,7,8,9,10,11,12,13];
let newarr = arr.slice(1,5); // used to return new array with selected elements
let newarr2 = arr.slice(5); // method extracts the array starting from index 5 till the end of the array and returns it as the answer.
let newarr3 = arr.slice(); // extracts the entire array from the given string and returns it as the answer, Since no arguments were passed to it.

console.log("With both the begin and end argument "+newarr);
console.log("With the beginning only "+newarr2);
console.log("Without the beginning and the end "+newarr3);