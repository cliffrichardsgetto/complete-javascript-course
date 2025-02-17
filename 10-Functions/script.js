'use strict';

const  bookings =[];

const  createBooking =  function (
    flightNum, numPassengers =1, price =199* numPassengers) 
 {
    
    //es5
   // numPassengers = numPassengers || 1;
    //price = pirce || 199;
 
     const booking = {
        flightNum,
        numPassengers,price
     };
     console.log(booking);
     bookings.push(booking);
};

createBooking("LH123");

createBooking("LH123" ,2,800);
createBooking("LH123" ,2);
createBooking("LH123" ,5 );
createBooking("LH123" );


const flight ='LH234';
const  jonas ={
    name :  'Jonas Schmedtmann',
    passport : 24739479284
}

const  checkIn = function(flightNum, passenger) {
    flightNum ='LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284){
        alert('Checked in');
    } else {
        alert('wrong passport');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport =  function(person) {
    person.passport= Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight,jonas);

const  oneWord = function (str) {
    return str.replace(/ /g,'').toLowerCase();
};

const upperFirstWord =  function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//higher order  function 

const  transformer = function (str, fn) {
   console.log(`Original string : ${str}`);
   console.log(`Transfored string : ${fn(str)}`); 
   console.log(`Trnasformed  by : ${fn.name}`); 

};

transformer('JavaScript is the  best', upperFirstWord);

transformer('JavaScript is the  best', oneWord);
//callback
const high5 = function () {
    console.log('Hello')
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const  greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

//console.log(greet('Jones'));

//const  greeterHey = greet('Hey');
const  greeterHey = greet('Hello');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello') ('Jonas');

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi') ('Joans');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode : 'LH',
    bookings:[],

    //book : functions() {}
    book(flightNum, name) {
        console.log(`${name} booked a  seat on ${this.airline} flight
            ${this.iataCode}${flightNum}`);
            this.bookings.push({flight : `${this.iataCode} ${flightNum}`, name});
    }, 
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635,'John Smith');

console.log(lufthansa);

const eurowings = {
    airline : 'Eurrowings',
    iataCode: 'EW',
    bookings:[],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const  swiss ={
    airline : 'Swiss Air Lines',
    iataCode : 'LX',
    bookings :[],
};

book.call(swiss, 583, 'Mary Cooper' );
console.log(swiss);

const flightData = [583, 'George Cooper'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//bind  method

book.call(eurowings,23, 'Sarah Willaims');

//const  bookEW = book.bind(eurowings);

//bookEW(23, 'Steven Williams');

const bookEW =book.bind(eurowings);

const bookLH =book.bind(lufthansa);
const bookLX =book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23= book.bind(eurowings,23);
bookEW23('Jones Schmedtmann');
bookEW23('Martha Cooper');

//with  event  Listners
lufthansa.planes=300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, value)=> value +value * rate;
console.log(addTax(0.1, 200));

const addVAT =addTax.bind(null, 0.23);
(rate,value) =>value+value*rate;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate =function (rate) {
    return function(value) {
        return value +value*rate;
    };
};
const addVAT2=addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
//challenge 

const poll = {
question : 'what  is  your  favourite programming language?',
options: ['0: JavaScript', '1: Python','2:Rust', '3:C++'],
//this  generates [0,0,0,0,] 
answers:new Array(4).fill(0),
registerNewAnswer() {
    //got  answer
    const answer = Number(
        prompt(`${this.question}\n${this.options.join('\n')}
        \n(Write  option  number)`)
    );   
    console.log(answer);
    //register answer
    typeof  answer === 'number' && answer <  this.answers.length
    &&  this.answers[answer]++;

   // console.log(this.answers);
   this.displayResults();
   this.displayResults('string');

},
displayResults(type = 'array') {
    if(type === 'array') {
        console.log(this.answers);
    } else  if (type === 'string') {
        //poll resulst  are 
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}
 };
poll.registerNewAnswer();

document.querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5,2,3]}, 'string' );    
poll.displayResults.call({answers: [1,5,3,9,6,1]}, 'string' );  
poll.displayResults.call({answers: [1,5,3,9,6,1]}); 

const runOnce =  function () {
    console.log('This  will  never run a gain');
   
};
runOnce();

//IIFE - immediately  involved  function expression
//1.
(function () {
    console.log('THis  is  never  run again');
    const isPrivate = 23;
})();

//console.log(isPrivate);

//2.
(() => console.log('This  wwill  also never  run  again'))();


{
    const  isPrivate =23;
    var notPrivate =46;
}
//console.log(isPrivate);
console.log(notPrivate);


const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let  f;

const  g =  function () {
    const a =23;
     f = function () {
       console.log(a * 2);
    };
};
g();
f();

const  h = function () {
    const  b = 777;
    f =  function () {
        console.log(b * 2);
    };
};
g();
f();

console.dir(f);
// Re-assigning  function
h();
f();
console.dir(f);

const boardPassengers = function(n, wait) {
    const perGroup = n /3;
    
    setTimeout(function () {
        console.log(`We are now  boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000); 
    
    
    console.log(`will  start boarding in ${wait} seconds`);


};
const perGroup =1000;
boardPassengers(180,3);
//setTimeout( Time)

/*(function () {
  const header =document.querySelector('hi');
  header.style.color = 'red';

  document.querySelector('body').addEventListener
  ('click',  function () {
    header.style.color='blue';
  });
})();
*/
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    document.querySelector('body').addEventListener
    ('click', function () {
      header.style.color = 'blue';
    });
  })();