'use strict';

const  weekdays=['mon', 'tue', 'wed', 'thu','fri', 'sat', 'sun'];

const openingHours = {
    //thu : {
    [weekdays[3]]:{
        open: 12,
        close: 22,
    },
    //fri :{
    [weekdays[4]]: {
        open : 11,
        close : 23,  
   },
   //sat: {
   [`day-${2+4}`] : {
   //[weekdays[5]]: {
    open : 0,  // open  24 hours
    close : 24,
   },
}; 
const restaurant = {
    name : "Classico Italiano",
    location : 'Villa Angello Tavani 23,Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pissa', 'Pasta', 'Risotto'],
    // opening  hours  inside  
   /* openingHours : {
      [weekdays[3]]:{
          open: 12,
          close: 22,
      },
      [weekdays[4]]: {
          open : 11,
          close : 23,  
     },
     [weekdays[5]]: {
      open : 0,  // open  24 hours
      close : 24,
     },
  },
*/
// opening  hours  from  outside  as seperate  function 
// es6 enhanced object kiterals  need  to  put as  
  //openingHours:openingHours,
   openingHours, 
   //hours,
   //  order  function  as 
   /*order: function(starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },*/
   order(starterIndex,mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
   },
    //orderdelivery:function (obj) {
    //console.log(obj);
   // orderdelivery: function ({starterIndex,mainIndex, time, address}) {
   
   //neednot  write  function  word  
   //orderdelivery: function ({starterIndex = 1,mainIndex =0, time ='20:00', address}) {
   orderdelivery({starterIndex = 1,mainIndex =0, time ='20:00', address}) {
     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be  delivered  to  ${address} at ${time}`);
    },
    // need not  mention  function  
    //orderPasta : function (ing1,ing2,ing3) {
    orderPasta (ing1,ing2,ing3) {
      console.log(`Here  is  your  delicious pasta with  ${ing1}, ${ing2} and  ${ing3}`);
    },
    //orderPizza : function (mainIngredient, ...otherIngredients) {
    orderPizza (mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
 }; 

 const menu3 = [...restaurant.starterMenu,...restaurant.mainMenu];

 for (const item of  menu3) console.log(item);
 for (const item of  menu3.entries()) {
     console.log(`${item[0] +1}: ${item}[1]}`);
 }
 for (const [i,el] of menu3.entries()) {
  console.log(`${i +1}: ${el}`);
};

//if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours && restaurant.openingHours.mon) 
  console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.mon?.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

const days =['mon','tue','wed', 'thu', 'fri', 'sat','sun'];


for ( const  day  of  days) {
  const  open =restaurant.openingHours[day]?.open;
  //??  'closed';
  console.log(`on ${day}, we open at ${open} `);
}
//methods
console.log(restaurant.order ?.(0,1) ?? 'Method does  not  exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does  not  exist');

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const properties =Object.keys(openingHours);
console.log(properties);
console.log(`We are open  on ${properties.length} days `);
let openStr = `We are open  on ${properties.length} days: `;

for (const  day  of  properties) {
  openStr += `${day},`;
  }
 console.log(openStr); 

//property values
const  values =Object.values(openingHours);
console.log(values);
//entire  object
const  entries =Object.entries(openingHours);
console.log(entries);

for (const x  of  entries) {
  console.log(x);
}

for  (const  [key, {open,close}] of entries) {
  console.log(`On ${key} we open at  ${open} and  close at ${close}`);
} 
for  (const  [day, {open,close}] of entries) {
  console.log(`On ${day} we open at  ${open} and  close at ${close}`);
} 
 //Arrays 
const  users = [{name : 'Jonas', email : 'hello@jonas.io'}];
//const users =[];
console.log(users[0]?.name ?? "user array empty");

if  (users.length > 0) console.log(users[0].name);
else console.log('user arrayempty');  
 restaurant.numGuests = 0;
 const guests = restaurant.numGuests || 10;
 console.log(guests);
//nullish : nukk  and  undefined
 const guestCorrect = restaurant.numGuests ?? 10;
 console.log(guestCorrect);

 const rest1 ={
  name : 'Capri',
  numGuests : 20,
 };
 const rest2 = {
   name : 'La Piazza',
   owner: 'Giovammo Rossie'
 };
// or  assignment  operator
 rest1.numGuests = rest1.numGuests || 10;
 rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||=10; 

// nullish  assignment  operator 
rest1.numGuests ??= 10;
rest2.numGuests ??=10;
//AND assignment operator
rest1.owner =rest1.owner && '<ANONYMOUS>';
rest2.owner =rest2.owner && '<ANONYMOUS>';

rest1.owner  &&= '<ANONYMOUS>';
rest2.owner  &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

restaurant.orderdelivery ({

  time : '22:30',
  address: 'Villa del Sole, 21',
  mainIndex : 2,
  starterIndex:2,
});
restaurant.orderdelivery ({

  address: 'Villa del Sole, 21',
  starterIndex:1,
});


/*const {name, openingHours, categories} = restaurant;  */
//console.log(name, openingHours, categories);

const {
  name : restaurantName,
  openingHours: hours,
  categories:tags } = restaurant;
  console.log(restaurantName,hours, tags);

//default  values
  //const {menu =[], starterMenu : starters =[]}=restaurant;
const {menu , starterMenu : starters =[]}=restaurant;  //same  result 
console.log(menu,starters);

//mutating variables
 
let  a =111;
let  b = 999;
const obj = {a:23,b:7, c: 14};
({a,b} =obj);
console.log(a,b); 

//nested objects

const {
  fri : {open :o, close : c}, 
} = openingHours;
console.log(o,c);
  /*  //es6 engabced object literals
    openingHours,
     
    order(straterIndex, mainIndex) {
       return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  
    },
    orderDelivery({starterIndex =1, mainIndex =0, time ='20.00', address }) {
     console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

   orderPasta(ing1,ing2,ing3) {
       console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPissa(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);},
};


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze', 'Italy' );
console.log(rest.set(2, 'Lison', 'Portugal'));
rest
 .set ('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
 .set('open',11)
 .set('close',23)
 .set(true, 'We are open : D')
 .set(false, 'We are  closed :(');

 console.log(rest.get('name'));
 console.log(rest.get(true));
 console.log(rest.get(1));


 const  arr=[2,3,4];

const a =arr[0];
const b=arr[1];
const c =arr[2];

const [x,y,z] =arr;
console.log(x,y,z);

const [first,,second] = restaurant.categories;
//const [first,second] = restaurant.categories;
console.log(first,second);

//const [main, , secondary]=restaurant.categories;  //  give  error  typeerror  assignemnt  to  constable  variable  change  to  let 
let [main, , secondary]=restaurant.categories; 
console.log(main,secondary);
/*const temp=main;
main=secondary;
secondary =temp;  
console.log(main, secondary); 
*/
[main, secondary]= [secondary,main];
console.log(main,secondary);

console.log(restaurant.order(2,0));

// receive  2  return  values  from 
const  [starter, mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);

const nested =[2,4,[5,6]];
//const [i,,j]=nested;
const [i,, [j,k]]=nested;
//console.log(i,j);
console.log(i,j,k);

//default  values 
//const [p,q,r]=[8,9];
const [p=1,q=1,r=1]=[8,9];
console.log(p,q,r);


const arr =[7,8,9];
const badNewArr =[1,2,arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr=[1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu= [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); 

// copyarray
const mainMenuCopy =[...restaurant.mainMenu];
// join arrays 
const menu1 =[...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//iterables: arrays, strings,maps, sets, not  objects
const  str ='jones';
const  letters=[...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log('j', 'o');

const ingredients = [
  prompt("Let's make pasta! Ingredients 1?"),
  prompt('Ingredients 2?'),
  prompt('Ingredients 3'),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//ohjects 
const newRestaurant ={foundedIn : 1998, ...restaurant, founder :'Guiseppe'};
console.log(newRestaurant);
const restaurantCopy = { ...restaurant};
restaurantCopy.name ='Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//spread beacuse  of  right  side  of  =
const arr3 =[1,2,...[2,4]];
//rest because  of  left  side  of  =
const [a1,b1, ...others]=[1,2,3,4,5];
console.log(a1,b1,others);

const [pissa,, risotto, ...otherFood] =[
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,];

console.log(pissa, risotto, otherFood);
//ohjects 

const {sat,...weekdays1} =restaurant.openingHours;
console.log(weekdays1);

const add = function (...numbers) {
  let  sum = 0;
  for  (let i =0; i < numbers.length; i++) sum +=numbers[i];
  console.log(sum);
};
add(2,3);
add(5,3,7,2);
add(8,2,5,3,3,1,4);

const x =[23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


// challenge
const  game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [[
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Samcho',
      'Gotze',
  ],],
  score: '4.0',
  scored : ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hammels'],
  date: 'Nov 9th, 2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5,
  }
};
const [players1,players2] = game.players;
console.log(players1,players2);

const [gk, ...fieldPlayers]= players1;
console.log(WebGLTransformFeedback, fieldPlayers);
const allPlayers=[...players1, ...players2];
console.log(allPlayers);
//4
const palyer1Final =[...players1, 'Thiago', 'Coutinho', 'Periscic'];
//5
const {odds : {team1, x : draw, team2}} = game;
console.log(team1, draw,team2) ;
// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were  scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muuler');

printGoals(...game.scored);
team1 < team2 &&  console.log('TEam1 is  more  lickly  to  win');
team1 > team2 &&  console.log('Team2 is  more  lickly  to  win');

//1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i+ 1}: ${player}`);
//2.
const odds=Object.values(game.odds);
let  average =0;

for (const odd  of  odds) average += odd;
average /= odds.length
console.log (average);

//3.
for (const [team,odd] of  Object.entries(game.odds)) {
 
  console.log(`Odd  of  ${odd}`);
}
for (const [team,odd] of  Object.entries(game.odds)) {
   const teamStr=team==='x' ? 'draw' : `victory ${game[team]}`;

   console.log(`Odd of ${teamStr} ${odd}`);
}

const ordersSet = new Set(['Pasta', 'Pizza','Pizza','Risotto','Pasta','Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Rsotto');
console.log(ordersSet);
//ordersSet.clear();
console.log(ordersSet[0]);
for (const order  of  ordersSet) 
  console.log(order);

//example
const  staff=['Waiter', 'Chef', 'Waiter','Manager', 'Chef','Waiter'];
const staffUnique =[...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter','Manager', 'Chef','Waiter']).size);
console.log(new Set('jonasschmedtmann').size);

const italianFoods = new Set(['pasta','gnocchi','tomatoes','olive oil','garlic','basil']);

const mexicanFoods = new Set(['tortillasns', 'beans','rice','tomatoes','avocado','garlic']);

const  commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection', commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

console.log([... new Set([...italianFoods.difference(mexicanFoods)])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);