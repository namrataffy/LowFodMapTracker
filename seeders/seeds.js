var db = require("../models");

let users = [
  {
    user_name: "Arman_user",
    password: "password",
    first_name: "Arman",
    last_name: "Riahi",
  },
  {
    user_name: "Chris_user",
    password: "password",
    first_name: "Chris",
    last_name: "Melby",
  },
  {
    user_name: "JDawg",
    password: "password",
    first_name: "Jerome",
    last_name: "Chenette",
  },
];
function userGenerate(users) {
  for (var i = 0; i < users.length; i++) {
    db.User.create(users[i]);
  }
}

userGenerate(users);