// import to the mongoDB or mongoose

const mongoose = require("mongoose");

// Access the mongoDB path or location

mongoose.connect("mongodb://localhost:27017/myDataBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema methods

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Model method

const User = mongoose.model("User", userSchema);

// fake details for user

const newUser = User({
  username: "Durga",
  email: "kethavathdurga@gmail.com",
  password: "kdpn8888",
});

// save the data

newUser
  .save()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

// update the data

// user name must and be matched in the you change of user name that be change than return thw values was error or no changes in the mongoDB in the class

User.updateOne({ username: "Durga" }, { password: "Durga@8688" }).then(
  (result) => {
    console.log(result);
  }
);

// user.save();
