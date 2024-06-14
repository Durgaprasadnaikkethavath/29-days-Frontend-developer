console.log("welcome to JavaScript Day-11");
/** 
// Today Topic are 1.functions 2.object Methods

// function : it war set of statement that performed a task are calculate value in the function

// they are duffer type of function---> function declaration and expression,
// Arrow function ,reviewing functions and recalling function

// Normal function

// function fullName(firstName, lastName) {
//   return firstName + lastName;
// }

// console.log(fullName("kethavath", "durga naik"));

// Another type of declaration in function

// const studentDetails = function (studentName, birthYear) {
//   return `studentDetails of Name: ${studentName} and Date of birthYear: ${birthYear}`;
// };
// const details = studentDetails("Durga", 22);
// console.log(details);

// function declaration

// calculate Age

function calcAge(birthYear) {
  return 2037 - birthYear;
}
const age = calcAge(1997);
console.log(age);

// function expression

const studentDetails = function (studentName, birthYear) {
  return `studentDetails of Name: ${studentName} and Date of birthYear: ${birthYear}`;
};
const details = studentDetails("Durga", 2001);
console.log(details);

// Arrow function

// const age1 = (birthYear) => 2024 - birthYear;
// const year = age1(2001);
// console.log(year);

// const YearUntilRetirementAge = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `I'm retirement age: ${retirement}`;
// };
// const age3 = YearUntilRetirementAge(1991);
// console.log(age3);
// console.log(YearUntilRetirementAge(1998));

// function() calling another function()

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function AllTypeFruits(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const orangesPieces = cutFruitPieces(oranges);
  return `The Both fruits are ${applePieces} apples and ${orangesPieces} oranges`;
}

const fruit = AllTypeFruits(4, 6);
console.log(fruit);

// Reviewing function()

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
// console.log(totalAge(1991));

const YearUntilRetirementAge = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement >= 0) {
    return retirement;
    console.log(
      `you are able to retirement age ${birthYear} Mr. ${firstName}.`
    );
  } else {
    return -1;
    console.log(`you are not able this time time of age ${birthYear}`);
  }
};
console.log(YearUntilRetirementAge(1991, "durga"));
*/

// object methods
var magicalToolBox = {
  compartments: {
    screws: ["wood screws", "sheet metal screws", "machine screws"],
    wires: ["red wires", "black wires", "green wires"],
    gears: [
      "small gears - 12 teeth",
      "medium gears - 24 teeth",
      "large gears - 36 teeth",
    ],
  },
  openToolBox: function () {
    return "The magical toolbox opens";
  },
  closeToolBox: function () {
    return "The magical toolbox closes";
  },
};

console.log(magicalToolBox.openToolBox());
console.log(magicalToolBox.closeToolBox());
// console.log(Object.magicalToolBox());
// object.keys
console.log(Object.keys(magicalToolBox));

console.log(Object.values(magicalToolBox));

console.log(Object.entries(magicalToolBox));
console.log(magicalToolBox);
