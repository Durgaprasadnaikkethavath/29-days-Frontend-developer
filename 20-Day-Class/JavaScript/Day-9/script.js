console.log("welcome to javascript");

// if statement

if (true) {
  // you can use false statement ---> than it's return null
  console.log("Durga");
}

//if else statement
// calculate age
const age = 18;
if (age >= 18) {
  console.log(`Your adult on this ${age} age`);
} else {
  console.log(`you are not a adult in this ${age} age`);
}
// Movie Ticket Booking

const totalSitesInTheater = 250;
const bookedSitesTheater = 250;
const availableSitesInTheater = totalSitesInTheater - bookedSitesTheater;
// console.log(availableSitesInTheater)

if (availableSitesInTheater > 0) {
  console.log(
    `movie ticket ${availableSitesInTheater} are available in this Theater`
  );
} else {
  console.log(
    `Not available movie tickets in Theater ${availableSitesInTheater} Movie Ticket.So, Best of Luck Next Time`
  );
}

// if else if statement
const ExamMakes = 100;
if (ExamMakes >= 90) {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "A"`);
} else if (ExamMakes >= 80) {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "B"`);
} else if (ExamMakes >= 70) {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "C"`);
} else if (ExamMakes >= 60) {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "D"`);
} else if (ExamMakes >= 35) {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "E"`);
} else {
  console.log(`Your ${ExamMakes} ExamMakes is Grade fo "F" Fail`);
}

// switch statement

const NameOfItem = "chai";

switch (NameOfItem) {
  case "1":
    message = "You are ordered chai";
    break;
  case "2":
    message = "you ordered greenTea";
    break;
  default:
    message = `This ${NameOfItem} item was not available today`;
}
console.log(message);
