'use strict';
/*function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    console.log(age1);
    return age;
}


function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let  output = `${firstName}, you  are  ${age}, born in ${birthYear}`;
       // console.log(output);
       console.log("you are  new ")

        if (birthYear >= 1981  &&  birthYear <= 1996 ) {
            var  millenial = true;
            // creating new  variable  with  same name
            const  firstName ='Steven'

            // reassigning  outer  scope's  variable 
            output = 'New Output';
        
            const str = `oh and  you're a  millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a+b;
            }
            console.log(add(4,5));
        }
    //console.log(str);    
    console.log(output); 
    console.log(millenial);
    //console.log(add(2,5));
    }
    printAge();
    return age;

} 
const firstName ='Jonas';
//const age1=48;
calcAge(1991);
//console.log(add(2,5));
//console.log(millenial);    // reference  error  
//console.log(age1);
//printAge();


console.log(me);
//console.log(job);   //  reference error  cannot  access  before  declaration  error
var me='jonas'
let job ='teacher';  

console.log(undefined);
if  (!numProducts) deleteShoppingCart();

var  numProducts =10;

function deleteShoppingCart() {
    console.log('All products  deleted');
}

console.log(this);

const calcAge1 =  function (birthYear) {
    console.log(2037- birthYear);
    console.log(this);
};
calcAge1(1990);

const  calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
}
calcAgeArrow(1980);

const jonas = {
    year : 1991,
    calcAge2 : function () {
        console.log(this);
        console.log(2037- this.year);

    },
};

jonas.calcAge2();

const matidla ={
    year : 2017,
};

matilda.calcAge2 = jonas.calcAge2;
matilda.calcAge2();

const  f =jones.calcAge2;
f();
*/
/*
const jonas = {
    firstName :  'Joans',
    year : 1991,
    calcAge3 :  function () {
        console.log(2037 - this.year);
       // solution 1

       const  self =  this ;  
       const  isMillenial =  function () {
         console.log(self);
         console.log(self.year >=1981 &&  self.year <= 1996 );
       };

       //solution 2
       const isMillenial2 = () => {
          console.log(this);
          console.log(this.year  >= 1981 &&  this.year <= 1996);
       };
    
      isMillenial(); 
    },
    greet : () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

};
jonas.greet();
jonas.calcAge3();

// arguments  keyword
const addExpr = function (a,b) {
   console.log(arguments);
   return a+b; 
};
addArrow(2,5,8);
*/
const  jessical = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age :  27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName=newLastName;
    return originalPerson;
}
const marriedJessica =  marryPerson(jessical, 'davis');

const marriedJessica1=jessical;
marriedJessica1.lastName='davis';
console.log('Before', jessical);
console.log('After',  marriedJessica);


const  jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bob'],
};

// shallow copy 
const  jessicaCopy = {...jessica};
jessicaCopy.lastName='Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before:', jessica);
console.log('After:',  jessicaCopy);

//deep copy  / clone

const jessicaClone =  structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('clone', jessicaClone);