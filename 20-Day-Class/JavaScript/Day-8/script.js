// "use strict";
console.log("Hello world!");

console.log("welcome to javascript classes on 29 day in youtube");

// variables in javascript

// let, var, const

const Name = "Durga";
var firstName = "kethavath durga parasda naik";
let fullName = "naik";
console.log(Name);
console.log(firstName);
console.log(fullName);

const x = 4;
const y = 3;
const z = x + y;
console.log(z);

// let and var difference

// var --it's was function scoped

console.log(g); // undefined
var g = 5;
console.log(g); // output-  5

// let -- it's was block scoped
/** 
console.log(d);
let d = 2; // error
console.log(d); //error
*/
// data type in  javascript

// data type: they are two type of data types     1.primitive   2. reference or Non-primitive data type

/**
  1.primitive data type       2.reference or Non-primitive data type
    - Number                    - Arrays
    -string                     - Object
    -boolean                    - Function
    -null
    -undefined
 */

// Numbers

const a = 2;
console.log(a);

// string
const naik = "name";
console.log(naik);

// Boolean -- true or false values

const b = 2;
const c = 5;
const d = b < c;
const f = c < b;
console.log(d); // true
console.log(f); //false

// undefined

// const naik;
// console.log(home)

// null

const home = "";
console.log(home);

// uses template operator -- ` `

const course = "javascript";
const start = "starting Day-8 section";
console.log(`welcome to ${course} class in ${start}.`);

const day8 = "javascript";
const topics = "Introduction and Variable & DataType , Operators";
const total = `Hii to all Today is Start ${day8} class and Topics are ${topics}. So, these are topics in first day of javaScript class`;

console.log(total);

console.log("Arithmetic Operator are : +,-,=,*,%,/,*");
