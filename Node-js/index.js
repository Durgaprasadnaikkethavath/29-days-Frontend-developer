// const myCall = require("./App.js");

// console.log(myCall.sayHello());
// console.log(myCall.School);

////////////////////////////////////////////////////////////
// operating system

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());

////////////////////////////////////////////////////////

// file systems
// const { error } = require("console");
// const fs = require("fs");

//////////////////////////////////////////////////////////
// (file,data,[optional], callback) --> writeFile parameters

// fs.writeFile(
//   "output",
//   "welcome to node js class of topic of file system.",
//   "utf-8",
//   (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("file has created successfully");
//     }
//   }
// );

//////////////////////////////////////////////////////
// path,[optional].callback  --> readFile parameter

// fs.readFile("./output", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

///////////////////////////////////////////////////////////

// HTTP-server created

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("welcome to javascript class");
});

// listen() --> parameter(PORT, HOSTNAME, BACKLOG, CALLBACK)

const PORT = 3000;
const HOSTNAME = "127.0.0.1";
const BACKLOG = 551;
const CALLBACK = () => {
  console.log(`Server has start http://${HOSTNAME}:${PORT}`);
};

server.listen(PORT, HOSTNAME, BACKLOG, CALLBACK);
