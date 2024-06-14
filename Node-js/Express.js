///////////////////////////////////////////////////////////////////

// Express Topic of -> Get method and post method

const express = require("express");
const callingData = require("./Data.js");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get(path,callback function)

app.get("/", (req, res) => {
  res.send("Hii, Welcome to express class");
});

app.get("/about", (req, res) => {
  res.send("About, the class of express");
});

app.get("/item", (req, res) => {
  res.send(`
  <h1>Welcome to 29-Day class of web development</h1>
  <h2>${callingData[0].id}<h2>
  <h2>${callingData[0].name}<h2>
  <h2>${callingData[1].id}<h2>
  <h2>${callingData[1].name}<h2>
  <h2>${callingData[2].id}<h2>
  <h2>${callingData[2].name}<h2>
  `);
});

// post(path,callback function)

app.post("./api", (req, res) => {
  newData = {
    id: req.body.id,
    name: req.body.id,
  };
  callingData.push(newData);
  res.json(callingData);
});

// create server http://

const POST = 3000;
const HOSTNAME = "127.0.0.1";
const BACKLOG = 551;

app.listen(POST, HOSTNAME, BACKLOG, () => {
  console.log(`Server is running at http://${HOSTNAME}:${POST}`);
});
