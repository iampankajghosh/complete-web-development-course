/**
 1. Declear an array named 'teaFlavours' that contains the strings 'green tea', 'black tea' and 'oolong tea'. Access the first element of the array and store it in a variable named 'firstTea'
 */

let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavours[0];

/**
 2. Declear an array named 'cities' containing 'london', 'tokyo', 'paris' and 'new york'. Access the third element in the array and store it in a variable named 'favoriteCity'
 */

let cities = ["london", "tokyo", "paris", "new york"];
let favoriteCity = cities[2];

/**
 3. You have an array named 'teaTypes' containing 'herbal tea', 'white tea' and 'masala chai'. Change the second element of the array to 'jasmine tea'
 */

let teaTypes = ["harbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

/**
 4. Declear an array named 'citiesVisited' containing 'mumbai' and 'sydney'. Add 'berlin' to the array using the 'push' method.
 */

let citiesVisited = ["mumbai", "sydney"];
citiesVisited.push("berlin");

/**
 5. You have an array named 'teaOrders' with 'chai', 'iced tea', 'matcha' and 'earl grey'. Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
 */

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();

/**
 6. You have an array named 'popularTeas' containing 'green tea', 'oolong tea' and 'chai'. Create a soft copy of this array named 'softCopyTeas'.
 */

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

/**
 7. You have an array named 'topCities' containing 'berlin', 'singapore' and 'new york'. Create a hard copy of this array named 'hardCopyCities'.
 */

let topCities = ["berlin", "singapore", "new york"];
let hardCopyCities = [...topCities];

/**
 8. You have two arrayes: 'europeanCities' containing 'paris' and 'rome' and 'asianCities' containing 'tokyo; and 'bangkok'. Merge these two arrays into a new array named 'worldCities'.
 */

let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCities = europeanCities.concat(asianCities);

/**
 9. You have an array named 'teaMenu' containing 'masala chai'. 'oolong tea', 'green tea' and 'earl grey'. Find the length of the array and store it in a variable named 'menuLength'.
 */

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;

/**
 10. You have an array named 'cityBucketList' containing 'kyoto', 'london', 'cape town' and 'vancouver'. Check if 'london' is in the array and store the result in a variable names 'isLondonInList'.
 */

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];
let isLondonInList = cityBucketList.includes("london");
