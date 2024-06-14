console.log("welcome to the day-17 class of javascript");

console.log("callback functions");

// callback function

// function name(x) {
//   console.log("Durga");
//   fullName();
// }
// name(fullName);

// function fullName() {
//   console.log("prasad");
// }
// fullName();

// callback function with Arrow function

// const name = (x) => {
//   console.log("Durga");
//   fullName();
// };

// const fullName = () => {
//   console.log("prasad");
// };

// console.log(name);

//Arrays methods  --> 1.map() 2.filter() 3.reduce()

// 1.map() method

const array = [1, 2, 3, 4, 5, 6, 7];

const newArray = array.map((curr, ind, arr) => {
  // return curr;
  // return ind;
  return arr;
});

console.log(newArray);

// 2.filter() method

const array1 = [2, 64, 7, 76, 5, 8, 4];

const newArray1 = array1.filter((curr, ind, arr) => {
  // return curr;
  // return ind;
  return arr;
});

console.log(newArray1);

//3.reduce() method

const array2 = [4, 56, 7, 2, 4, 67, 5, 7, 9];

const newArray2 = array2.reduce((acc, curr, ind, arr) => {
  // return acc;
  // return curr;
  // return ind;
  // return arr;
});

console.log(newArray2);
