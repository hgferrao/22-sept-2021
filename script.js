'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//Object literals
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals //Included openingHours in restaurent
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
  //Same as orderPizza: function(mainIngredient).... on so on // This is the feature of ES6
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// //Looping over property names of an object
// const properties = Object.keys(openingHours);
// console.log(openingHours);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day} `;
// }
// console.log(openStr);

// //Looping over property names of an object
// const values = Object.values(openingHours);
// console.log(values);
// //Object entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we are open at ${open} and close at ${close}`);
// }
//without optional chaining
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// //With Optional chaining
// console.log(restaurant.openingHours.mon?.open); //checks for openingHours.mon is present then reads (open) property
// console.log(restaurant.openingHours?.fri?.open); //Multiple optional chaining.checks for openingHours is present then reads (fri) property

// //Example for optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day},we open at ${open}`);
// }
// //Optional chaining for methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exists'); //checks for method exists if not den retunrs does not exists string
// console.log(restaurant.orderMe?.(0, 1) ?? 'method does not exists'); //checks for method exists if not den retunrs does not exists string
// //Optional chaining on ARRAYS
// const users = [{ name: 'jonas', email: 'hgferrao@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');
////////////////////////////////////////
// let cars = ['bmw', 'maruti', 'ford'];
// for (let item of cars) console.log(item);
// //The for of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// //To print index number use entries method
// for (const item of menu.entries()) {
//   console.log(item);
// }
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; //will print 10 even after giving 0 guests.to over come this we use Nullish operator.
// console.log(guests);
// const guestCorrect = restaurant.numGuests ?? 10; //using nullish will print 0
// console.log(guestCorrect);
// console.log('------OR-----');
// //Use any data type,return any data type,Short-circuit
// console.log(3 || 'Henry');
// console.log('' || 'Henry');
// console.log(undefined || null);
// console.log(true || 0);
// console.log(false || true);
// console.log('' || 0 || false || 'henry' || 23);

// restaurant.numGuests = 20;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);
// const guests2 = restaurant.numGuests || 10; //using OR(||) short circuit
// console.log(guests2);
// console.log('------AND-----');
// console.log(0 && 'Henry');
// console.log(7 && 'Henry');
// console.log(7 && 10 && 0 && 5);
// console.log('henry' && 23 && null && 'ferrao');
// //Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
// ///IF using && short circuit
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
////////////////////////////////////
//Rest pattern and parameters
// 1)Destructuring
//Spread,because on RIGHT side of =
// const arr = [1, 2, 3, ...[4, 5]];

// //REST, because on LEFT side of =
// const [pizza, , risotto, ...others] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, others);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// //2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 36, 76];
// add(...x);
// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
//Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //old way to create new array
// console.log(badNewArr);
// //Using spread operator (...)
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); //to print array items individually
// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);
// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arry
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// //Real world example
// const ingredients = [
//   // prompt("Let's make some pasta!! Ingredient 1 ?"),
//   // prompt('Ingredient 2:'),
//   // prompt('Ingredient 3:'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients); //calling using spread operator

// //Objects
// const newRestaurent = { foundedIn: 1995, ...restaurant, founder: 'Henry' };
// console.log(newRestaurent);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'henry rest';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// /////////////////////////
//Destructuring object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// const {
//   name: retaurentName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; //Giving new variable names
// console.log(retaurentName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant; //Setting default value
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // use () to destructure in objects.
// console.log(a, b);
// //Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// // let [main, secondary] = restaurant.categories; //To acess first 2 element
// let [main, , secondary] = restaurant.categories; //Here check for output if we want to acess other element
// console.log(main, secondary);

//Switiching main to secondary using tempory variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching using Destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructure of array
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // destructuring
// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//Coding challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //Challenge 2
// //Step 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }
// //Step 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //Step 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamstr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamstr} ${odd}`);
// }
// //Step 1
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //Step 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //Step 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //Step 4
// const playersFinal = [...players1, 'Thiago', 'Coutino', 'Periscic'];
// //Step 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //Step 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored.`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// // printGoals(game.scored);
// printGoals(...game.scored);
// //Step 7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// sets
// const orderSet = new Set(['henry', 'henry', 'ferrao', 'george', 'whrer']);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has('ferrao'));
// console.log(orderSet.has('xyz'));
// orderSet.add('xyz');
// orderSet.delete('xyz');
// // orderSet.clear();
// console.log(orderSet);
// //looping on sets
// for (const items of orderSet) {
//   console.log(items);
// }
// //example
// const staff = [
//   'chef',
//   'manager',
//   'waiter',
//   'ceo',
//   'director',
//   'waiter',
//   'chef',
// ];
// // const uniqueset = new Set(staff); //this is converted in to set which has unique values
// const uniqueset = [...new Set(staff)]; // converted in to array using spread operator
// console.log(uniqueset);

//Maps
// const rest = new Map();
// rest.set('name', 'henry resort');
// rest.set(1, 'belgaum');
// rest.set(2, 'mumbai');
// rest
//   .set('catogries', ['Italian', 'Pizzeria', 'vegetarian', 'orgainic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set('false', 'we are close');
// console.log(rest.get('name'));
// console.log(rest.get(true));
