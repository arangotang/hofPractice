// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(tot, x) {
    return tot + Number(x.price.substring(1, x.price.length));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var categories = _.map(desserts, function(dessert) {
    return dessert.type;
  });

  return _.reduce(categories, function(list, type) {
    list[type] = list[type] + 1 || 1;
    return list;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(list, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      list.push(movie.title);
    }
    return list;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
// I: array of objects, number
// O: boolean
// C:
// E: timeLimit is enough for at least one movie

// return reduce of movies, function(bool, movie), accumulator starts as false
  // if bool === false
    // set bool equal to if movie's time is less than timeLimit
    // return bool
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(bool, movie) {
    bool = bool === true ? bool : movie.runtime < timeLimit;
    return bool;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
// I: array of strings
// O: new array of uppercase strings
// C:
// E: n/a

// return map of fruits, function(fruit)
  // return uppercase version of fruit

var upperCaseFruits = function(fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// I: array of dessert objects, O: array of dessert objects with additional property
// C: n/a, E: n/a

// return map of desserts, function of dessert obj
  // if desssert's ingredients contain flour
    // set glutenFree prop to false
  // otherwise
    // set glutenFree prop to true
  // return dessert object
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    dessert.glutenFree = _.indexOf(dessert.ingredients, 'flour') !== -1 ? true : false;
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];
I: array of grocery objects, coupon percentage; O: array of objects with salePrice as additional property (rounded to 2 decimals)
C: n/a; E: decimal rounding
--- pseudocode ---
// return map (groceries, fn(product))
  // product.salesPrice = Math.round(100 * product.price * (1 - coupon))/100
  // return product
*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(product) {
    var price = Number(product.price.substring(1, product.price.length));
    product.salePrice = '$' + (Math.round(100 * price * (1 - coupon)) / 100).toString();
    return product;
  });
};
