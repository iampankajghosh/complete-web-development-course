/**
 1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable name 'sum'.
 */

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i; // sum = sum + i
  i++;
}

/**
 2. Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
 */

let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}

/**
 3. Write a 'do while' loop that propmts a user to enter thier favorite tea type until they enter 'stop'. Store each tea type in an array named 'teaCollection'.
 */

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type 'stop' to finish )`);

  if (tea.toLowerCase() !== "stop") {
    teaCollection.push(tea);
  }
} while (tea.toLowerCase() !== "stop");

/**
 4. Write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
 */

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

/**
 5. Write a 'for' loop that multiplies each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'multipliedNumbers'
 */

let multipliedNumbers = [];
let arry = [2, 4, 6];

for (let i = 0; i < arry.length; i++) {
  const num = arry[i] * 2;
  multipliedNumbers.push(num);
}

/**
 6. Write a 'for' loop that lists all the cities in the array '[paris, new york, tokyo, london]' and stores each city in a new array named 'cityList'.
 */

let cities = ["paris", "new york", "tokyo", "london"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  const city = cities[i];
  cityList.push(city);
}
