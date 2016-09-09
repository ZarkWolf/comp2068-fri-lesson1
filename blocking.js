// link to node's filesystem module to read text files
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt', 'utf8');

// print a food heading and the list of food
console.log('FOOD');
console.log(food);

// open and read the drinks list
var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log('\nDRINKS');
console.log(drinks);
