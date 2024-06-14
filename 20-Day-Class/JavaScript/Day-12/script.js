console.log("welcome to javascript class");

// looping  statements.
// for loop and while loop

// for looping
// example for print 1 to 100; numbers.

for (let x = 1; x <= 4; x++) {
  console.log(x);
}

for (let numbers = 1; numbers <= 3; numbers++) {
  console.log(numbers);
}

// while  looping

var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}

// var count = 0;
// while(count<=5){
//     console.log(count);
//     count++
// }

// looping though the array and object.

const number1 = [2, 3, 4, 1, 5, 43, 767];
for (let n = 0; n < number1.length; n++) {
  console.log(number1[n] + 2);
}

var magicalLibrary = {
  book1: {
    name: "Fantasy",
    author: "Eleanor Moon",
    keyPlayer: "Aria",
  },
  book2: {
    name: "Mystery",
    author: "Maxwell Nightingale",
    keyPlayer: "Detective Drake",
  },
  book3: {
    name: "Adventure",
    author: "Isabella Silverwing",
    keyPlayer: "Captain Hawk",
  },
  book4: {
    name: "Adventure",
    author: "Isabella Silverwing",
    keyPlayer: "Captain Hawk",
  },
};

for (let book in magicalLibrary) {
  console.log(magicalLibrary[book].name);
  console.log(magicalLibrary[book].keyPlayer);
}
console.log(magicalLibrary.book1);
