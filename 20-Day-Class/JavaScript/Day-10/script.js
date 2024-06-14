console.log("welcome to Day-10 of javascript class");

// array

const arr = [1, 2, 3, 4, "string", "name"];
arr;
console.log(arr);
// Adding last position of element.
arr.push("kethavath durga prasad naik");
arr;
console.log(arr);
// Adding position of first element.
arr.unshift("javascript class array");
arr;
console.log(arr);
// Remove element form last position.

arr.pop();
arr;
console.log(arr);
// Remove form first element
arr.shift();
arr;
console.log(arr);
// these array methods was use to add and remove both operation at time.
// and it was three parameter in splice()

arr.splice(3, 1, "javascript class");
arr;
console.log(arr);

//Object()

const student = {
  name: "naik",
  age: 22,
  isStudent: true,
};

console.log(student);
student;

// adding element in object

student.course = "computer science";

student;

student["secondCourse"] = "javascript";
student;

console.log(student);

delete student.isStudent;
student;

console.log(student);

delete student["secondCourse"];
console.log(student);
student;
