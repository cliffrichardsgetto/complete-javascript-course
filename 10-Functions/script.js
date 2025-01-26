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

