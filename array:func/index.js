//write a function that will check if this array is ONLY odd numbers.
//Bonus: replace any even numbers with odd numbers

let oddNumbers = [1, 3, 5, 7, 9, 10, 11, 13, 15, 17, 19, 20];

const checkAndReplaceOdd = (numbers) => {
  let allOdd = true;

  for (const number of numbers) {
    if (number % 2 === 0) {
      allOdd = false;
      // Bonus: Replace even numbers with odd numbers
      numbers[numbers.indexOf(number)] = number + 1;
    }
  }

  return allOdd;
};

console.log(checkAndReplaceOdd(oddNumbers));
console.log(oddNumbers);

// Write a function that will Calculate the average temperature of this array. 
// Also find the highest temperature and log it
const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];

const calculateAverageTemperature = (temperatures) => {
  const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
  return sum / temperatures.length;
};

console.log(calculateAverageTemperature(fahrenheitTemps));

const findHighestTemperature = (temperatures) => {
  return Math.max(...temperatures);
};

console.log(findHighestTemperature(fahrenheitTemps));


// Write a function that will search this array for your favorite fruit. If your favorite fruit isn't found, add it!
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
const favoriteFruit = "Pineapple";

const searchAndAddFavoriteFruit = (fruitArray, favorite) => {
  if (!fruitArray.includes(favorite)) {
    fruitArray.push(favorite);
  }
};

searchAndAddFavoriteFruit(fruits, favoriteFruit);
console.log(fruits);

// write a function that will shorten each string to just it's first 3 characters ("January" turns into  "Jan")
const months = [
    "January", "February", "March", "April", "May", "June",    
    "July", "August", "September", "October"
];
  
const shortenMonths = (monthArray) => {
    return monthArray.map(month => month.substring(0, 3));
  };
  
console.log(shortenMonths(months));

// Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 
const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

const onlyStrings = mixedData.filter(item => typeof item === 'string');
console.log(onlyStrings);
