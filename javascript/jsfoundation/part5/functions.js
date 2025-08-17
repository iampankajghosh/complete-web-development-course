/**
 1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like 'making green tea' when called with 'green tea'. store the result in a variable named 'teaOrder'.
 */

function makeTea(typeOfTea) {
  return `making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");

/**
 2. Creat a function named 'orderTea' that takes one parameter, 'teaType'. Inside the function, create another function named 'confirmOrder' that returns a message like 'order confirmed for chai'. Call 'confirmOrder' from within 'orderTea' and return the result.
 */

function orderTea(teaType) {
  function confirmOrder() {
    return `order confirmed for ${teaType}`;
  }

  return confirmOrder();
}

orderTea("chai");

/**
 3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'. Store the result in a varible named 'totalCost'.
 */

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(499, 100);

/**
 4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument 'earl grey'. return the result of calling 'makeTea'.
 */

function processTeaOrder(fn) {
  return fn("earl grey");
}

let teaProcess = processTeaOrder(makeTea);

/**
 5. Write a function named 'createTeaMaker' that returns another function. the returned function should take one parameter, 'teaType' and return a message like 'making green tea'. Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
 */

function createTeaMaker(name) {
  let score = 100;
  return function (teaType) {
    return `making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker("hello");
let result = teaMaker("green tea");
