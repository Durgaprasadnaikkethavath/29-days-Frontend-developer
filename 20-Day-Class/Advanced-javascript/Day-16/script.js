console.log("javascript arrow function");

// Arrow function

// 1.syntax

// traditional function

// syntax: function functionName() {}
function addNum(x, y) {
  console.log(x + y);
}
addNum(2, 3);

// Arrow function : const functionName = (parameters) => {};

const subNum = (x, y) => {
  console.log(x - y);
};
subNum(7, 10);

//2.this keyword

const obj1 = {
  name: "Durga",

  //traditional function
  fullName: function () {
    console.log("Hii i'm " + this.name);
  },

  //Arrow function
  firstName: () => {
    // console.log(this.name); arrow function are not accept the this key word
    console.log(obj1.name);
  },
};
// console.log(fullName); error

obj1.fullName();
obj1.firstName();

//3. Arguments Object or parameters

//traditional function
function total() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
total(1, 3, 4, 5, 6);

// arrow function
let total1 = (...arguments) => {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
};
total1(5, 6, 7, 3, 75, 7);

// 4. Return

function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 3));

let multiplyA = (x, y) => x * y;
console.log(multiplyA(4, 5));
