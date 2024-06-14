//introduction of react js

const { Children } = require("react");

// Integration of react into an html structure
//  --> Including react from CDN links
//  --> Including react DOM from links

// JSX

//   --> Including react from CDN links

// react.createElement(type, props, [...children])
// console.log("welcome to react js");

////////////////////////////////////////////////

// console.log("react js");

// const Tag1 = document.createElement("h1");
// Tag1.innerHTML = "welcome to react js class";
// const Tag2 = document.getElementById("root");
// Tag2.append(Tag1);
// console.log(Tag2);

/////////////////////////////////////////////////////
// Integration of react into an html structure
//  --> Including react from CDN links
//  --> Including react DOM from links

// syntax =>  const tag1 = React.createElement(type, props, [...Children]);

// const tag1 = React.createElement(
//   "h1",
//   { id: "1", style: { color: "red" } },
//   "welcome to react js course",
//   [
//     React.createElement("p", null, "Day-1 class of react js"),
//     React.createElement("div".null, "let's start day-1 class"),
//   ]
// );
// const tag2 = ReactDom.render(tag1, document.getElementById("root"), () => {
//   alert("render suc");
// });

// tag2();

///////////////////////////////////////////////

// ------------ JSX -----------------
function reuse() {
  let tag1 = (
    <h1 id="1" style={{ color: "red" }}>
      Welcome to React js classes
      <p>Day-1 classes fo react js</p>
      <div>let's Start class</div>
    </h1>
  );
  return tag1;
}

function reactCall() {
  let functionalCall = (
    <div>
      {reuse()}, {reuse()}
    </div>
  );

  ReactDOM.render(functionalCall, document.getElementById("root"), () => {
    alert("render successfully");
  });
}

reactCall();
