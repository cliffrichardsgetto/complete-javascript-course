`use strict`;
// activating  strict  mode
let hadDriversLicense = false;
const  passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I  can drive : D');

// fucntions
function logger(){
    console.log('My name is Jonas');
}

//calling  .running.invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const  juice = `juice  with ${apples} apples and  ${oranges} organes`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

function calcAge1(birthYeah) {
   return 2037 - birthYeah;
}

const age1= calcAge1(1991);

//function expression
const calcAge2 = function(birthYeah) {
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3); 

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement =   65 - age;
   // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991,  'Jonas'));
console.log(yearsUntilRetirement(1980, 'BOB')) 

//function  calling  other  functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples,organes) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces =cutFruitPieces(organes);
    const juice = `Juice  with ${applePieces} piece of  apple  and  ${orangePieces} pieces of  organe.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement1 = function (birthYeah, firstName) {
    const age=calcAge(birthYeah);
    const  retirement = 65 -age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
       } else {
        console.log(`${firstName} has already retired`);
        return -1; 
       }
    }

console.log(yearsUntilRetirement1(1991, 'Jonas'));
console.log(yearsUntilRetirement1(1950, 'Mike'));    

const calcAverage =(a,b,c) => (a+b+c) /3;
console.log(calcAverage(3,4,5));

let scoreDolphins = calcAverage(44,23,71);
let scoreKolas = calcAverage(65,54,49);

console.log(scoreDolphins, scoreKolas);

const checkWinner =  function(avgDolphins, avgKolas) {
    if ( avgDolphins >= 2 * avgKolas ) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKolas})`);
    } else if (avgKolas >= 2 * avgDolphins) {
        console.log(`Kolas win (${avgKolas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }

    }

scoreDolphins = calcAverage(85, 54, 41);
scoreKolas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKolas);
checkWinner(scoreDolphins, scoreKolas);
//checkWinner(576,111);

//introduction  to arrays

const  friend1='Machael'
const friend2='Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friend1.length -1]);

friends[2]='Jay';
console.log(friends);

const firstName = 'Jonas';
const  jonas=[firstName,'Schmedtmann', 2037-1991, 'teacher', friends]; 
console.log(jonas);
console.log(jonas.length);

const years = [1990,1967,2002,2010,2018];

const age11=calcAge(years[0]);
const age12=calcAge(years[1]);
const age13=calcAge(years[years.length-1]);
console.log(age11,age12,age13);

const ages=[calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);

//basic array operations
const  friends1=['Michael', 'Steven', 'Pter'];

// add  elements
const newLength =friends1.push('Jay');
console.log(friends1);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop();
const popped=friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.indexOf('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have  a  friend called Steven');
    } else  {
        console.log('You  dont  have such  friend');
    }

 console.log(friends);  

 
// const  calcTip =function(bill) {
  //  return bill >= 50 &&  bill <= 300 ? bill * 0.15 :  bill * 0.2;
// }

 const calcTip = bill => bill >=50 &&  bill  <= 300 ? bill  * 0.15:  bill  * 0.20; 

 const calcTip1 =  function (bill) {
    if  (bill >=50  &&  bill  <= 300) {
      return  `bill * 0.15`  
        //console.log('bill')
    } else {
       return  `bill * 0.20`
    }  
 }
const  bills1=125

 calcTip1(125);
 console.log(calcTip1)

 const bills=[125,555,44];
 const tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 const totals =[bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

 console.log(bills,tips, totals);

 //introduction  to  objects
 const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter','Steven']
 ] ;
 const  jonas1 = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
   // hasDriversLicense: true,
    //calcAge : function (birthYeah) {
     //   return 237 - birthYeah;
  //  }
};

// dot  vs  bracket  Notation

console.log(jonas1);
console.log(jonas1.lastName);
console.log(jonas1['lastName']);

const  nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
console.log(jonas,'last + namekey')

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! Choose betwwen firstName,lastName, age,job, and friends');
} 

jonas.locatiion = 'Portugal';
jonas['twitter']= '@jonasschmedtman';
console.log(jonas);

// Challenge
console.log(`${jonas1.firstName} has  ${jonas1.friends.length} friends, and  his  best friend  is  called ${jonas1.friends[0]}`);

const  jonas2 = {
    firstName : 'Jonas',
    lastName : 'Schmedtmann',
    birthYeah : 1991,
   // age : 2037 - 1991,
    job : 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
   
   // calcAge : function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
  //  calcAge: function () {
        //console.log(this);
    //    return 2037 - this.birthYeah;
    // }
    calcAge: function () {
       this.age =2037 -this.birthYeah;
       return this.age;
     },
    getSummary : function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${jonas2.job},  and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
   
};
//console.log(jonas2.calcAge(1991));
console.log(jonas2.calcAge());
//console.log(jonas2.calcAge());
//console.log(jonas2.calcAge());
//console.log(jonas2.calcAge());

console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.age);
console.log(jonas2.getSummary());
//console.log(jonas2['calcAge'](1991));
//calcAge: function (birthYeah) {
//    return 2037 - birthYeah;
//}  
//calcAge:function () {
  //  console.log(this);
   // return 2037 - this.birthYeah;
//}

//calcAge : function () {
  //  this.age =2037 - this.birthYeah;
   // return this.age;
//},


const  mark = {
    fullName :'Mark Miller',
    mass: 78,
    height : 1.69,
    calcBMI :  function () {
        this.bmi =this.mass /this.height **2 ;
        return  this.bmi;
    }
};

const  john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,

    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return  this.bmi;

    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if  (mark.bmi > john.bmi) {
    console.log(`{mark.full.Name}'s BMI (${mark.bmi}) is  higher  than ${john.fullName}'s BMI (${john.bmi})`)
    } else if (john.bmi > mark.bmi) {
    console.log(`{john.full.Name}'s BMI (${john.bmi}) is  higher  than ${mark.fullName}'s BMI (${mark.bmi})`)
    }  
    
// for  loop 
for  (let  rep = 1; rep <= 30; rep++) {
    console.log(`Lifiting  weights  repetition ${rep}`)
}; 

// Looping Arrays, Breaking and Continuing
const jonas3 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  const types = [];

  console.log(jonas3[0])
  console.log(jonas3[1]);

  for (let i=0; i< jonas3.length; i++) {
    console.log(jonas3[i], typeof jonas3[i]);
  }

  const years1 = [1991,2007, 1969, 2020];
  const ages1 =[];

  for  (let i =0; i < years1.length; i++ ) {
    ages1.push(2037- years1[i]);
  }
  console.log(ages1);

  for (let i =0; i < jonas3.length; i++) {
    if ( typeof jonas3[i] !== 'string') continue;
       console.log(jonas3[i], typeof jonas3[i]);
  }

  for (let i=0; i < jonas3.length; i++) {
    if (typeof jonas[i] === 'number') break;
        console.log(jonas[i] ,  typeof jonas3[i]);
  }  
for (let i= jonas3.length - 1; i> 0; i--) {
    console.log(i, jonas3[i]);
}

for (let exercise =1; exercise < 4; exercise ++) {
    console.log('------ Starting exercise ${exercise}');

    for (let rep =1; rep<6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
    }
}

// while4  loop
let  rep =1;
while (rep <=10 ) {
    console.log(`while : lifting weights repetition ${rep}`);
    rep++;
}

let  dice = Math.trunc(Math.random() * 6) + 1;

while (dice !==6 ) {
    console.log(`You rolled  a $}dice`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6 )  console.log('Loop  is  about  to  end ... ');}

const calcTip2 = function (bill) {
    return bill >= 5 &&  bill <= 3 ? bill * 0.15 : bill * 0.2;
}

const bills2 = [22, 295, 176,440, 37, 105, 10, 1100,86,52] ;
const tips1 =[];
const totals1 =[];

for (let i =0; i < bills2.length; i++) {
    const tip = calcTip2(bills2[i]);
    tips.push(tip);
    totals.push(tip + bills2[i]);

} 
console.log(bills2, tips, totals); 

const calcAverage1 = function (arr) {
    let  sum = 0;
    for (let i =0; i < arr.length; i++) {
        // sum = sum + arr[i];
        console.log(sum);
        sum += arr[i];
    }
    return sum/ arr.length; 
}

console.log(calcAverage1([12,13,27]));
console.log(calcAverage1(totals));
console.log(calcAverage1(tips)); 