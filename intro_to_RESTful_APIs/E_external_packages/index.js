// Example using lodash, mathjs, and a nodemon log

// Import lodash
const _ = require('lodash');
// Import mathjs
const math = require('mathjs');

// Use lodash to shuffle an array
const arr = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(arr);
console.log('Shuffled array:', shuffled);

// Use mathjs to calculate a square root
console.log('Square root of 16:', math.sqrt(16));

// Log a message to show nodemon is working
console.log(
  'If you change this file and save, nodemon will auto-restart the app!'
);
