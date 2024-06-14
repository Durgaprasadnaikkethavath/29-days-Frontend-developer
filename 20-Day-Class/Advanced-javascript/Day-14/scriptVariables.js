console.log("welcome to javascript class");

// variables
console.log("variables ---> 1.Var  2.Let and 3.Const");

//variables are two type of variables they are

console.log("Global Scope =>  Var variable");

console.log("Block Scope =>  Let and Const Variable");

//variable declaration
// 1.Re-declaration
// 2.Reassignment
// 3.scope
// 4.hoisting

//variable declaration
var varVariable = "var variable declaration";
console.log(varVariable);

let letVariable = "let variable declaration";
console.log(letVariable);

const constVariable = "const variable declaration";
console.log(constVariable);

//1.Re-declaration
console.log("Re-declaration");
//  var only only one variable can be re-declaration variables
//  const and let both are  not re-declaration variables

// var x = 4;
// var x = 3;
// console.log(x); // output--> 3

// let y = 4;
// let y = 3;
// console.log(y); // output --> Error

// const z = 4;
// const z = 3;
// console.log(z); // Error

//2.Re-Assignment

// re-assignment is both var and let variable
// const -- is not re-assignment variable

console.log("Re-Assignment");
/** 
var x = 4;
x = 3;
console.log(x); // output--> 3

let y = 4;
y = 3;
console.log(y); // output --> 3

const z = 4;
z = 3;
console.log(z); // Error
*/

//3.scope variables
// they three type of variables
console.log("scope variables");
console.log("Global scope and Block scope");

console.log("Global scope => Var only the Global scope");
console.log("Block scope => Let & const the both are Block scope");

if (true) {
  var varString = "name --> global scope";
  // console.log(varString);

  let letString = "kethavath durga prasad naik ---> block scope";
  console.log(letString); // it's block scope

  const constString = "Welcome to front-end developer classes ---> block scope";
  console.log(constString);
}
console.log(varString); //global scope

// 4.Hoisting

// hoisting variable is only one variable that is Var variable

console.log(fullName);
var fullName = "kethavath durga parada naik"; // output -- undefined

// console.log(firstName);
// let firstName = "kethavath"; // Error

// console.log(firstName);
// const firstName = "naik"; // Error

// templates literals

// templates literals are  -->    `${variableName}`
const student = "Durga";
const course = "javascript";
const totalInformation = `Hey i'm ${student} and i'm studying of class ${course}`;
console.log(totalInformation);
