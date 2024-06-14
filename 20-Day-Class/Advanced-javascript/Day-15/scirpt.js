console.log("Welcome to Advanced javascript class");
/////////////////////////////////////////////////////

//spread

// syntax => [...variableName];

// spread

//=> Arrays

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
const array3 = [...array2, 7, 8, 9];

console.log(array3);

// object --> spread

const obj1 = {
  name: "Durga",
  Role: "developer",
};

const obj2 = {
  ...obj1,
  name1: "naik",
  course: "javascript",
};

const obj3 = {
  ...obj2,
};

console.log(obj3);

// function of spread

function sum(a, b, c, d) {
  return a + b + c + d;
}
let numbers = [1, 2, 3, 4];
// console.log(sum(...numbers));

///////////////////////////////////////////////////

// REST

function addingTwoNumber(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
// console.log(total)

console.log(addingTwoNumber(...array3));

////////////////////////////////////////////////

// De=structuring

//Objects

const object = {
  fullName: "durga prasad naik",
  course: "javascript",
  jobTitle: "web development",
  age: 22,
  location: "Hyderabad",
};

console.log(object.fullName);
console.log(object.jobTitle);
console.log("by using De=structuring model");

const { fullName, course: course1, ...other } = object;
console.log(course1);
// console.log(course);
console.log(other);

// Arrays

const num = [4, 7, 3, 6, 67, 78];

const [first, second, ...otherNum] = num;

console.log(first);
console.log(second);
console.log(otherNum);
