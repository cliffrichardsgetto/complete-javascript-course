// linking  a  javascript file
let js ="amazing";
console.log(40+8+23-10);
console.log("jones");
console.log(23);
//let firstname="Matilda";

//console.log(firstname);
//const massMark=78;
//const heightMark=1.69;
//const massJohn=92;
//const  heightJohn=1.95;

const massMark=95;
const heightMark=1.88;
const massJohn=85;
const  heightJohn=1.76;

const BMIMark=massMark/heightMark ** 2;
const  BMIJohn=massJohn/ heightJohn **2 ;

const  markHigherBMI = BMIMark >  BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const  firstname="jones";
const  job='teacher';
const  birthyear=1991;
const  year=2037;

const  jonas= "I`m " + firstname + `, a `+(year-birthyear) + ` year old ` + job + `!`; 
console.log(jonas); 
const  jonasnew = `I'm ${firstname}, a ${year-birthyear} year old ${job}!`;
console.log(jonasnew);


const age =14;

if (age >=18) {
    console.log(`Sarah can start driving license `);
} else {
    const yearsleft =18 - age;
    console.log(`Sarah is  too  young, wait  another ${yearsleft} years :`);
}

const birthYear = 2012;
let  century;
if (birthYear <= 2000) {
    century = 20 ;
} else {
    century =21;
    }
console.log(century);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is  higher than John's (${BMIJohn})!`)
} else{
    console.log(`John's BMI (${BMIJohn}) is  higher than Mark's (${BMIMark})!`)
}

// type  conversion

const  inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18 );
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log(`I am ` +  23  + ` years old`);
console.log('23' - '10' - 3);
console.log('23' /'2');

let  n = '1' + 1;
n=n-1;
console.log(n);

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money =100;

if (money) {
    console.log("Don't  spend it all;");
} else {
    console.log('You should  get a job!');
}


let  height =0;
if (height) {
    console.log('YAY!  height  is  defined' );
} else {
    console.log('Hieght is  undefined');
}

// equality operators 

const age1 = '18';
if (age1 === 18 ) console.log(`You just  became an  adult : D (strict)`);

if  (age1 ==18) console.log(`You just  became an  adult : D (loose)`);

//const  favorite =  Number (prompt("what  us  your  favourite number ?"));
//console.log(favorite);
//console.log(typeof  favorite);

//if  (favorite === 23) { 
  //  console.log('cool! 23  is  an  amazing  number!')
   //  } else if (favorite === 7) {
    //    console.log('7 is  also  a  cool number') 
    // } else  if (favorite ===9 ) {
    //    console.log('9 is  also a cool number')
    //  } else {
        console.log('Number is  not  23  or 7  or  9 ')
     // }


//if  (favorite !==23)  console.log('Why not 23');     


// logical  operators

const hasDriverLicense = true;
const  hasGoodVision = true;

console.log(hasDriverLicense &&  hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
    console.log(`Sarah is  able  to  drive!`) ;
    } else {
        console.log(`Soneone else should  drive ... `) ;
    }

const isTired =  false;
console.log(hasDriverLicense &&  hasGoodVision && isTired)

if (hasDriverLicense &&  hasGoodVision && isTired) {
console.log(`Sarah is  able  to  drive!`);
    } else {
        console.log(`Soneone else should  drive ... `) ;
    }


const scoreDolphins = (96+108+89)/3;
const scoreKolas = (88+91+110)/3;

console.log(scoreDolphins, scoreKolas);

if (scoreDolphins > scoreKolas) {
    console.log('Dolphins win  the  trophy');
} else  if (scoreKolas > scoreDolphins) {
    console.log('Kolas  win  the  tropy');
} else if (scoreDolphins === scoreKolas) {
    console.log('both  win the  trophy');
} 

// bonus 1 
const scoreDolphins1 = (97+112+80)/3;
const scoreKolas1 = (109+95+50)/3;
console.log(scoreDolphins1, scoreKolas1);

if (scoreDolphins1 > scoreKolas1 && scoreDolphins1 >= 100)  {
    console.log('Dolphins win  the  trophy');
} else  if (scoreKolas1 > scoreDolphins1 && scoreKolas1 >=100) {
    console.log('Kolas  win  the  tropy');
} else if (scoreDolphins1 === scoreKolas1 && scoreDolphins1 >=100 && scoreKolas1 >= 100) {
    console.log('both  win the  trophy');
} else {
    console.log ('No one  wins the  trophy')
}
//switch statement
const  day = 'friday';

switch (day) {
    case 'monday' :
        console.log('Plan  course  structure');
        console.log('Go  to  coding  meetup');
        break;
    case 'tueday' :
        console.log('prepare  theory  video');
        break;
    case 'wednesday':
    case 'thurday' :
        console.log('write code  example');
        break;
    case 'friday' :
        console.log('Record video');
        break;
    case 'saturday' :
    case 'sunday' :
        console.log('Enjoy the  weekend : D');
        break;
    default:
        console.log('Not a  valid  day!')                          
}

if (day === 'monday')  {
   console.log('Plan  course structure');
   console.log('got  to coding  meetup');
} else if  (day ==='tueday') {
    console.log('Prepare theroy videos');
} else if  (day === 'wednesday' || day === 'thursday'){
    console.log('write code  examples');
} else if (day === 'friday') {
    console.log('Record vedios')    
 } else if (day ==='saturday' || day === 'sunday') { 
    console.log('Enjoy the  weekend : D') ;
} else {
    console.log('not  a valid day! ');
} 
 
if (23 > 10) {
    const  str = '23 is  bigger';
} 

const  me = 'Jonas';
console.log(`I'm ${2037 - 1991 } years  old ${me}`);
const age2= 23;
age2 >= 18 ? console.log(`I like to  drink wine`) : console.log(`I like to  drink  water`);

const drink = age2 >= 18 ? `wine` : `water`;
console.log(drink);

console.log(` I  like  to  drink ${age >= 18 ? 'wine ' : 'water'} `);

const bill = 430;

const  tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the  bill was  ${bill} the  tip was  ${tip} and  the  total  value  is  ${bill + tip}`);