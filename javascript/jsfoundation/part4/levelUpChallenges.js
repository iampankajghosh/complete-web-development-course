/**
 1. Write a 'for' loop that loops through the array ['green tea', 'black tea', 'chai', 'oolong tea'] and stops the loop when it finds 'chai'. Store all teas before 'chai' in a new array named 'selectedTeas'.
 */

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i].toLowerCase() === "chai") break;
  selectedTeas.push(teas[i]);
}

/**
 2. Write a 'for' loop that loops though the array ['london', 'new york', 'paris', 'berlin'] and skips 'paris'. Store the other cities in a new array named 'visitedCities'.
 */

let cities = ["london", "new york", "paris", "berlin"];
let visitiedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].toLowerCase() === "paris") {
    continue;
  }
  visitiedCities.push(cities[i]);
}

/**
 3. Use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5, 6] and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.
 */

let numbers = [1, 2, 3, 4, 5, 6];
let smallNumbers = [];

for (const num of numbers) {
  if (num == 4) break;
  smallNumbers.push(num);
}

/**
 4. Use a 'for-of' loop t0 iterate through the array ['chai', 'green tea', 'herbal tea', 'black tea'] and skip 'herbal tea'. Store the other teas in an array 'preferredTeas'.
 */

let teasArray = ["chai", "green tea", "herbal tea", "black tea"];
let prefferdTeas = [];

for (const tea of teasArray) {
  if (tea.toLowerCase() === "herbal tea") continue;
  prefferdTeas.push(tea);
}

/**
 5. Use a 'for-in' loop to loop through an object containing city populations. Stop the loop when the population of 'berlin' is found and store all previous cities populations in a new object named 'cityPopulations'.

 let citiesPopulation = {
    'london': 8900000,
    'new york': 8400000,
    'berlin': 3500000,
    'paris': 2200000,
 }
 */

let citiesPopulation = {
  london: 8900000,
  "new york": 8400000,
  berlin: 3500000,
  paris: 2200000,
};

let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city.toLowerCase() === "berlin") break;
  cityPopulations[city] = citiesPopulation[city];
}

/**
 6. Use a 'for-in' loop to loop through an object containing city populations. Skip any city with population below 3 million and store the rest in a new object named 'largeCities'.

 let worldCities = {
    "sydney": 5000000,
    "tokyo": 9000000,
    "berlin": 3500000,
    "paris": 2200000,
 }
 */

let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 3500000,
  paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue;
  largeCities[city] = worldCities[city];
}

/**
 7. Write a 'forEach' loop that iterates through the array ['earl grey', 'green tea', 'chai', 'oolong tea']. Stop the loop when 'chai' is found, and store all previous tea types in an array named 'availbleTeas'.
 */

let teasArray1 = ["earl grey", "green tea", "chai", "oolong tea"];
let availbleTeas = [];
let isChaiChecked = false;

teasArray1.forEach((tea) => {
  if (isChaiChecked) return;

  if (tea === "chai") {
    isChaiChecked = true;
    return;
  }

  availbleTeas.push(tea);
});

/**
 8. Write a 'forEach' loop that iterates through the array ['berlin', 'tokyo', 'sydney', 'paris']. Skip 'sydney' and store the other cities in a new array named 'traveledCities'.
 */

let worldCities1 = ["berlin", "tokyo", "sydney", "paris"];
let traveledCities = [];

worldCities1.forEach((city) => {
  if (city.toLowerCase() === "sydney") return;
  traveledCities.push(city);
});

/**
 9. Write a 'for' loop that iterates through the array [2, 5, 7, 9]. Skip the value '7' and multiply the rest by 2. Store the results in the new array named 'doubleNumbers'.
 */

let numbers1 = [2, 5, 7, 9];
let doubleNumbers = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] === 7) continue;
  doubleNumbers.push(numbers1[i] * 2);
}

/**
 10. Use a 'for-of' loop to iterate through the array ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea'] and stop when the length of the current tea name is greater than 10. Store the teas iterated over in an array named 'shortTeas'.
 */

let teas2 = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of teas2) {
  if (tea.length > 10) break;
  shortTeas.push(tea);
}

console.log(shortTeas);
