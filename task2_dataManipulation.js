/*
Problem Statement -  Data Manipulation
Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/

const array = [9, 8, 1, 9, 5, 5, 1, 2];

const sumOfAllNumbers = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfAllNumbers(array));
