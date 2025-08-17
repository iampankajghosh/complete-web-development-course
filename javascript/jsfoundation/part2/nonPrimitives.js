// Object

const username = {
  firstname: "hello",
  "last name": "world",
  isLoggedIn: true,
};

username.firstname = "world";
username["last name"] = "hello";

// console.log(username);
// console.log(typeof username);

let today = new Date();
// console.log(today.getDate());

// Array

let anotherUser = ["hello", true];

// console.log(anotherUser[0]);

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));
