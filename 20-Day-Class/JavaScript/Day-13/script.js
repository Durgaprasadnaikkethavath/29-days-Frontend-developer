// document.getElementById

const subHeading = document.getElementById("about");
subHeading.textContent = "About : javascript Coding School";

// document.getElementsByClassName
const paragraphElement = document.getElementsByClassName("aboutParagraph");
paragraphElement[0].textContent =
  "javascript Coding School is dedicated to providing high-quality coding education. Our experienced instructors are committed to helping you build a strong foundation in programming.";

// document.getElementsByTagName
const h3Element = document.getElementsByTagName("h3");
h3Element[0].textContent = "Full Stack Web Development Course";

// document.querySelector
const highlightElement = document.querySelector(".highlight");
highlightElement.innerHTML = "<b>Course Highlights:</b>";

// document.querySelectorAll
const paragraphStyle = document.querySelectorAll("p");
for (let i = 0; i < paragraphStyle.length; i++) {
  paragraphStyle[i].style.color = "red";
}

//By Id and create element and adding some element.
const highlightsList = document.getElementById("courseHighlightsList");
const listItemsContent = [
  "Introduction to Responsive Web Design",
  "Advanced JavaScript Concepts",
  "Server-Side Rendering with Node.js",
  "Database Design and Management",
  "Git and Version Control",
  "Real-world Project Development",
];
// var newListItem = document.createElement("li");
// newListItem.textContent = "Introduction to Responsive Web Design";
// highlightsList.appendChild(newListItem);

for (let i = 0; i < listItemsContent.length; i++) {
  var newListItem = document.createElement("li");
  newListItem.textContent = listItemsContent[i];
  highlightsList.appendChild(newListItem);
}
