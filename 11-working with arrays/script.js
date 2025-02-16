'use strict';

/*let arr =['a','b','c','d','e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));

//splice
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

//reverse
arr=['a','b','c', 'd','e'];
const arr2=['j','i','h','g','f'];
console.log(arr2.reverse());

//concat 
const  letters =arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log(letters.join('-'));
*/
const arr=[23,11,64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.at(-1));
const  movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

for (const movement of  movements) {
    


    if (movement >0)  {
        console.log(`You deposited ${movement}`);
    }else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }}
//another  way
for (const [i,movement] of movements.entries()) {
      if (movement >0)  {
            console.log(`Movement ${i+1} : You deposited ${movement}`);
        }else {
            console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
        }}

    console.log('for each') 
    movements.forEach(function (movement) {
        if (movement >0)  {
            console.log(`You deposited ${movement}`);
        }else {
            console.log(`You withdrew ${Math.abs(movement)}`);
        }
    });

    //another  way 
    //first  current element,  then  index. inside array  you are  looping  
    console.log('for each') 
    movements.forEach(function (movement, index,array) {
        if (movement >0)  {
            console.log(`You deposited ${movement}`);
        }else {
            console.log(`You withdrew ${Math.abs(movement)}`);
        }
    });

    //first  current element,  then  index. inside array  you are  looping  
    console.log('for each') 
    movements.forEach(function (movement, index,array) {
        if (movement >0)  {
            console.log(`You deposited ${movement}`);
        }else {
            console.log(`You withdrew ${Math.abs(movement)}`);
        }
    });

    //first  current element,  then  index. inside array  you are  looping  
    console.log('for each') 
    movements.forEach(function (movement, index,array) {
        if (movement >0)  {
            console.log(`You deposited ${movement}`);
        }else {
            console.log(`You withdrew ${Math.abs(movement)}`);
        }
    });
    //first  current element,  then  index. inside array  you are  looping  
    console.log('for each') 
    movements.forEach(function (mov,i, arr) {
        if (mov >0)  {
            console.log(`Movement ${i+1}: You deposited ${mov}`);
        }else {
            console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
        }
    });

    const currencies = new Map([
        ['USD', 'United States Dolar'],
        ['EUR', 'Euro'],
        ['GBP', 'Pound Sterling'],

    ]);
    currencies.forEach(function (value, key, map) {
        console.log(`${key}: ${value}`);
    }); 

    //set  
    const currenciesunique = new Set(['USD', 'GBP', 'USD','EUR', 'EUR']);
    console.log(currenciesunique);
    //currenciesunique.forEach(function (value,value,map)
    currenciesunique.forEach(function (value, _, map)
{
    console.log(`${value}:${value} `);
}
);

/////////////////////////////////////////////////
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    type : 'premium',
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    type : 'standard',
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    type : 'premium',
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    type : 'basic',
  };
  
  const accounts = [account1, account2, account3, account4];
  
  /////////////////////////////////////////////////
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');
  
  /////////////////////////////////////////////////
  // Functions
//start  writing  function  to      html  code  copied  from instpect  element after clicking   on  close 
 /* const  displayMovements =  function(movements,sort=false ) {
    containerMovements.innerHTML ='';
    const movs =sort ? movements.slice().sort((a,b) => a-b) : */
    const displayMovements =  function(movements,sort=false ) {
        containerMovements.innerHTML ='';
        const movs =sort ? movements.slice().sort((a,b) => a-b) : movements; 
    
       movs.forEach(function(mov, i) {
        const  type= mov >0 ? 'deposit' : 'withdrawal'; 
        const html =`
       <div class="movements__row">
          <div class="movements__type movements__type--deposit">${type}"</div>
          <div class="movements__date">${1+1}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

           // developer.mozila.org
      containerMovements.insertAdjacentHTML ('afterbegin', html);
      });
        
    };
displayMovements(account1.movements);
/*
const calcDisplayBalance =function (movements) {
    const  balance = movements.reduce((acc, mov) => acc+mov, 0);
    labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
*/ 
//re writtne  aboce  function to  save the  balance 
const calcDisplayBalance =function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc+mov, 0);
    labelBalance.textContent = `${balance} EUR`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary =function(acc) {
    const incomes = acc.movements.filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
   labelSumIn.textContent=`${incomes}`;  
   const out = acc.movements.filter(mov => mov < 0)
   .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent=`${Math.abs(out)}`; 

const interest = acc.movements.filter(mov => mov > 0)
               .map(deposit => (deposit *  acc.interestRate)/100) 
               .filter((int, i, arr) => {
                console.log(arr);
                return int >=1;
               })
               .reduce((acc,int ) => acc + int, 0);
               labelSumInterest.textContent=`${interest}`;         
}  
//calcDisplaySummary(account1.movements);
console.log(calcDisplaySummary);
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username =acc.owner
       .toLowerCase().split(' ').map( name => name[0]).join('');  
  });
};
console.log(calcDisplaySummary)


createUsernames(accounts);
console.log(accounts);

const updateUI =  function(acc){
 //display movements
displayMovements(acc.movements);
//changed currentaccount  to acc 
//displayMovements(CurrentAccount.movements);
// display balance 
calcDisplayBalance(acc);
//display summary
calcDisplaySummary(acc);

}


//event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
   e.preventDefault();
   console.log('LOGIN');

 currentAccount= accounts.find(acc=> acc.username === inputLoginUsername.value) ; 
  console.log(currentAccount);  
if (currentAccount ?.pin === Number(inputLoginPin.value)){
  // display ui  and  message
labelWelcome.textContent =`Welcome back, ${currentAccount.owner.split(' ')[0]}`;
console.log('LOGIN')
containerApp.style.opacity=100;


//clear  input  fields
inputLoginUsername.value =inputLoginPin.value='';
inputLoginPin.blur();
updateUI(currentAccount )
//display movements 
//displayMovements(currentAccount.movements);
// display balance
//calcDisplayBalance(currentAccount.movements);


//display summary
calcDisplaySummary(currentAccount);
}
});



btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount=Number(inputTransferAmount.value);
    const receiverAcc=accounts.find(acc=>acc.username=== inputTransferTo.value);

inputTransferAmount.value=inputTransferTo.value='';
console.log(amount, receiverAcc);

if (
    amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username!== currentAccount.username 
    ) {
        //doing the  transfer
        console.log('Transfer valid');
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
      //update  ui
      updateUI(currentAccount)
   
    }});


 btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    inputCloseUsername.value=inputClosePin.value=''; 

    if( inputCloseUsername.value===currentAccount.username &&
        Number(inputClosePin.value)===currentAccount.pin) {     
        const index = accounts.findIndex(
           acc=> acc.username===currentAccount.username);
        console.log(index); 
        //delete  account
        accounts.splice(index,1);
        //ui
        containerApp.style.opacity=100; 
        //hide ui
        containerApp.style.opacity=0; 
        
          }
         inputCloseUsername.value=inputClosePin.value=''
        }
      
    );  
 /*let sorted=false;   
 btnSort.addEventListener('click',function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements,true);
 });
*/
 let sorted=false;   
 btnSort.addEventListener('click',function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted=!sorted;
 });

 btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount =Number(inputLoanAmount.value);

    if (amount>0 && currentAccount.movements.some(mov=> mov>=amount * 0.1)) {
        //add movement
        currentAccount,movements.push(amount);
        //update ui
        updateUI(currentAccount)
    }
    inputLoanAmount.value='';
   });   
console.log(movements);
const  lastWithdrawal = movements.findLast(mov=> mov<0);
console.log(lastWithdrawal);    
//latest  large movement was  x  movements  ago 

const  lastestLargeMovementIndex=movements.findLastIndex(mov=>Math.abs(mov)>2000);

console.log(lastestLargeMovementIndex);
console.log(`Your latest large movement was ${movements.length -lastestLargeMovementIndex-1} movements agoe`);

console.log(movements.includes(-650));
const  anyDeposits=movements.some(mov=>mov>0)
console.log(movements.some(mov=>mov===-650));
console.log(anyDeposits);

//every
console.log(movements.every(mov=>mov>0));
console.log(account4.movements.every(mov  =>mov > 0));

//separate callback

const deposit1 = mov => mov> 0;
console.log(movements.some(deposit1));
console.log(movements.every(deposit1));

console.log(movements.filter(deposit1));

const arr1 = [[1,2,3],[4,5,6], 7,8];
console.log(arr1.flat());
const arrDeep =[[[1,2],3], [4,[5,6]],7,8];
console.log(arrDeep.flat(2));


const accountMovements = accounts.map(acc=>acc.movements);
console.log(accountMovements);
const  allMovements=accountMovements.flat();
console.log(allMovements);

const overallBalances =allMovements.reduce((acc,mov)=>acc+ mov,0);
console.log(overallBalances);
const overallBalance=accounts.map(acc=>acc.movements).flat().reduce((acc,mov) => acc+mov,0);
console.log(overallBalance);

//flatMap 

const overallBalance2=accounts.flatMap(acc=>acc.movements).reduce((acc,mov) => acc+mov,0);
console.log(overallBalance2);

/*  console.log(createUsernames('Steven Thomas Williamns'));
  const createUsernames = function (user) {
    const username = user.toLowerCase().split(' ').map( name => name[0]).join('');  
  };
  console.log(createUsernames('Steven Thomas Williamns'));
  */
  /*const user = 'Steven Thomas Williams'; //stw
  const  username = user.toLowerCase().split(' ').map(
    /*function(name) {
        return name[0];
   
       }).join('');
//     in short  cut
       name => name[0]).join('');  
  console.log(username);
*/


  //  // console.log(containerMovements.innerHTML);
const  checkDogs = function(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
//    dogsJulia.slice(1,3);
const dogs=dogsJuliaCorrected.concat(dogsKate);
console.log(dogs);

dogs.forEach(function(dog,i) {
    if (dog >=3) {
        console.log(`Dog number ${i+1} is an  adult and  is  ${dog} years old  `)
     } else {
        console.log(`Dog number ${i+11} is  still a  puppy`);
     }
 })

};
checkDogs([3,5,2,12,7], [4,1,15,8,3]);
checkDogs([9,16,6,8,3], [10,5,6,1,4]);

const  eurTOUSd = 1.1;

/*const  movementsUSD = movements.map(function ( mov)  {
    return mov * eurTOUSd
  // return 23;
});
*/
const movementsUSD = movements.map(mov =>  mov * eurTOUSd
  // return 23;
);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor =[];

for (const mov of movements) movementsUSDfor.push(mov * eurTOUSd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => 
   `Movement ${i+1} : You ${mov > 0 ? 'deposited' : 'withdrew' } ${Math.abs(mov)}`
   );    
   /* if (mov >0)  {
        return `Movement ${i+1}: You deposited ${mov}`;           // console.log(`Movement ${i+1}: You deposited ${mov}`);)
    }else {
        return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`;
        }
    });
*/
console.log(movementsDescriptions);

const  deposit = movements.filter(function (mov) { return mov > 0;});
console.log(movements);
console.log(deposit);

const  depositFor =[]
for (const  mov  of movements ) if (mov >0) depositFor.push(mov);
console.log(depositFor);

const  withdrawls =movements.filter(mov =>mov<0);

console.log(withdrawls)



const balance = movements.reduce(function (acc,cur,i,arr) {
    console.log(`Iteration ${i} : ${acc}`);
    return  acc+cur 
},0) ;
console.log(balance);


const balance1 = movements.reduce((acc,cur) => acc + cur, 0); 
console.log(balance1);

let balance2 =0;
for (const mov  of movements) balance2 += mov;
console.log(balance2);

//maximum  value

const  max =movements.reduce((acc, mov) => {
    if (acc> mov)
    return acc;
    else 
    return mov;
}, movements[0]);
console.log(max);


//maximum  value

const  min =movements.reduce((acc, mov) => {
    if (acc< mov)
    return acc;
    else 
    return mov;
}, movements[0]);
console.log(min);

const  calAverageHumanAge = function (ages) {
    const  humanAges =ages.map(age => (age <=2 ?2 * age : 16 +age * 4));
   // console.log(humanAges); 
   const adults =humanAges.filter(age => age >= 18);
   console.log(humanAges);
   console.log(adults);
  // const  average = adults.reduce((acc, age) => acc + age, 0) /adults.length ; 
   const  average1 = adults.reduce((acc, age, i, arr) => acc + age/arr.length, 0) ; 
  // return average; 
   return average1; 
}
calAverageHumanAge([5,2,4,1,15,8,3]);
const avg1=calAverageHumanAge ([5,2,4,1,15,8,3]);
const avg2=calAverageHumanAge ([16,6,10,5,6,1,4]);  
console.log(avg1,avg2);
const  calAverageHumanAge1 =  ages => 
    ages.map(age => (age <=2 ?2 * age : 16 +age * 4))
   // console.log(humanAges); 
     .filter(age => age >= 18)
     .reduce((acc, age, i, arr) => acc + age/arr.length, 0) ; 
  
 

calAverageHumanAge1([5,2,4,1,15,8,3]);
const avg3=calAverageHumanAge ([5,2,4,1,15,8,3]);
const avg4=calAverageHumanAge ([16,6,10,5,6,1,4]);  
console.log(avg1,avg2);
console.log(avg3,avg4);
const eurToUSd = 1.1;
const totalDepositUSD =movements
    .filter(mov => mov < 0) 
   // .map((mov, i, arr) => mov * eurTOUSd)
    .map(mov => mov * eurTOUSd)
    .reduce((acc, mov) => acc + mov, 0);
 console.log(totalDepositUSD);   

 const totalDepositUSD1 =movements
 .filter(mov => mov < 0) 
 .map((mov, i, arr) =>  {
    console.log(arr);
    return mov * eurTOUSd;
 })   
 //.map(mov => mov * eurTOUSd)
 //.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD1);   

const totalDepositUSD2 =movements
.filter(mov => mov < 0) 
.map((mov, i, arr) =>  {
   console.log(arr);
   return mov * eurTOUSd;
})   
//.map(mov => mov * eurTOUSd)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD2);   

const  firstWithdrawal = movements.find(mov => mov < 0 );
console.log (movements);
console.log(firstWithdrawal);
console.log(accounts)

const  account=accounts.find(acc => acc.owner ==='Jessica Davis');

console.log(account);

const breeds = [
    {
      breed: 'German Shepherd',
      averageWeight: 32,
      activities: ['fetch', 'swimming'],
    },
    {
      breed: 'Dalmatian',
      averageWeight: 24,
      activities: ['running', 'fetch', 'agility'],
    },
    {
      breed: 'Labrador',
      averageWeight: 28,
      activities: ['swimming', 'fetch'],
    },
    {
      breed: 'Beagle',
      averageWeight: 12,
      activities: ['digging', 'fetch'],
    },
    {
      breed: 'Husky',
      averageWeight: 26,
      activities: ['running', 'agility', 'swimming'],
    },
    {
      breed: 'Bulldog',
      averageWeight: 36,
      activities: ['sleeping'],
    },
    {
      breed: 'Poodle',
      averageWeight: 18,
      activities: ['agility', 'fetch'],
    },
  ];
  
  // 1.
//1.
const  huskyWeight=breeds.find(breed => breed.breed=='Husky').averageWeight;
console.log(huskyWeight);

//2.
const dogBothActivities =breeds.find(breed =>breed.activities.includes('fetch') && breed.activities.includes('running')).breed;
console.log(dogBothActivities);

//3. 
const  allActivities=breeds.map(breed=>breed.activities).flat();

const  allActivities1=breeds.flatMap(breed=>breed.activities);
console.log(allActivities);

//4.
const uniqueActiviites =[...new Set(allActivities)];
console.log(uniqueActiviites);

//5.
const swimmingAdjacent=breeds.filter(breed => breed.activities.includes('swimming')).map(breed=>breed.activities); 
console.log(swimmingAdjacent);  
const swimmingAdjacent1=breeds.filter(breed => breed.activities.includes('swimming')).flatMap(breed=>breed.activities);
console.log(swimmingAdjacent1); 
const swimmingAdjacent2=[...new Set(breeds.filter(breed => breed.activities.includes('swimming')).flatMap(breed=>breed.activities)),];
console.log(swimmingAdjacent2); 
const swimmingAdjacent3=[...new Set(breeds.filter(breed => breed.activities.includes('swimming')).flatMap(breed=>breed.activities).filter(activity=>activity !='swimming')),];
console.log(swimmingAdjacent3); 

//6. 
console.log(breeds.every(breed => breed.acerageWeight > 10));
//7.
console.log(breeds.some(breed=>breed.activities.length >=3 ));
//bonus 
const fetchBreeds=breeds.filter(breed=>breed.activities.includes('fetch')).map(breed=>breed.averageWeight);
console.log(fetchBreeds);
console.log(fetchBreeds);
const fetchWeights=breeds.filter(breed=>breed.activities.includes('fetch')).map(breed=>breed.averageWeight);
const heaviestFetchBreed=Math.max(...fetchWeights);
console.log(heaviestFetchBreed);

const  owners=['Jones', 'Zach','Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//numbers
console.log(movements);
console.log(movements.sort());
//return < 0, a,b
// return > 0,b,a 
//ascending
movements.sort((a,b) => {

    if(a >b) return 1;
    if(a< b) return -1;
});

console.log(movements);
//descending
movements.sort((a,b) => {

    if(a >b) return -1;
    if(a<b) return 1;
});


console.log(movements);
movements.sort((a,b) =>a-b);
console.log(movements);
movements.sort((a,b) =>b-a);
console.log(movements);

const  groupedMovements =Object.groupBy(movements,movement=> movement >0 ? 'deposits' : 'withdrawals');
console.log(groupedMovements);

const groupedByActivity =Object.groupBy(accounts, account => {
  const movementCount =account.movements.length;
  if(movementCount>=8) return 'very active';
  if(movementCount>=4) return 'active';
  if (movementCount>=1) return 'moderate';
  return 'inactive';
  });
  console.log(groupedByActivity);

const groupedAccounts1=Object.groupBy(accounts, account=> account.type);
const groupedAccounts=Object.groupBy(accounts, ({type}) => type);
console.log(groupedAccounts);

const arr2=[1,2,3,4,5,6,7];
console.log([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7));
//empty array

const x = new Array(7);
console.log(x);
//console.log(x.map(()=>5));

x.fill(23,2,6);
x.fill(1);

console.log(x);
arr.fill(23,2,6);
console.log(arr);

//array from

const y = Array.from({length:7} , ()=> 1);
console.log(y);

const z= Array.from({length : 7}, (_,i) => i+1);
console.log(z);

labelBalance.addEventListener('click', function() 
 {const movementsUI1=  Array.from(
  document.querySelectorAll('.movements__value'));
 //   const movementsUI =Array.from(document.querySelectorAll('.movements__value'));
//console.log(movementsUI);
console.log(movementsUI1.map(el=>el.textContent.replace('E', '')));
 });

 labelBalance.addEventListener('click', function() 
 {const movementsUI=  Array.from(
  document.querySelectorAll('.movements__value'),el=>Number(el.textContent.replace('E', '')));

console.log(movementsUI);
}); 

const movementsUI2=[...document.querySelectorAll('.movements__value')];

console.log(movements);

const reversedMOV=movements.slice().reverse();
console.log(reversedMOV);
const reversedMOV1=movements.toReversed();
console.log(reversedMOV1);
movements[1] =2000;
console.log(movements);

const newMovements=movements.with(1,2000);
console.log(newMovements);

const  bankDepositSum= accounts.map(acc=> acc.movements);

const  bankDepositSum1= accounts.flatMap(acc=> acc.movements)
    .filter(mov=> mov >0)
    .reduce((sum, cur) => sum+cur,0);
 console.log(bankDepositSum1); 
 
 //  
 const  numDeposits1000=accounts.flatMap(acc=>acc.movements)
     // .reduce((count, cur) => (cur >=1000 ? count +1 : count), 0)
      //  .reduce((count, cur) => (cur >=1000 ? count++ : count), 0)
        .reduce((count, cur) => (cur >=1000 ? ++count : count), 0)
 console.log(numDeposits1000)     

 let a=10;
 console.log(++a);
 console.log(a);

 const sums=accounts.flatMap(acc=>acc.movements)
    .reduce((sums,cur)=> { cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur);
      return  sums;
    },
    {deposits :0 ,withdrawls : 0}); 
 console.log(sums)   

 
 const {deposits, withdrawals} =accounts.flatMap(acc=>acc.movements)
    .reduce((sums,cur)=>{ sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
    return sums;
   },
  {deposits: 0 ,withdrawals: 0}); 
 console.log(deposits,withdrawals); 

 const convertTitleCase=function (title) {
  const expectations =['a','an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const  titlecase=title.toLowerCase().split(' ');
  return titlecase;
 };
 
 console.log(convertTitleCase('This is a nice title'));
 console.log(convertTitleCase('This is a LONG title but not too long'));
 console.log(convertTitleCase('and here is another title with  an EXAMPLE'));

 
const convertTitleCase1=function (title1) {
  const expections =['a','an', 'the', 'but', 'or', 'on', 'in', 'with'];
   const titleCase1=title1
   .toLowerCase().split(' ')
   //.map(word => word[0].toUpperCase() 
   //+ word.slice(1));
return titleCase1;
 };
  

 // 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase2 = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
   // .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

 console.log(convertTitleCase2('This is a nice title'));
 console.log(convertTitleCase2('This is a LONG title but not too long'));
 console.log(convertTitleCase2('and here is another title with  an EXAMPLE'));


 const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog =>(dog.recFood=Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2. 
const  dogSarah=dogs.find(dog=> dog.owners.includes('Sarah'));
console.log(`Sarah dog  eats too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'title'}`);

//3.
const ownersToomuch=dogs.filter(dog =>dog.curFood > dog.recFood)
     .flatMap(dog=>dog.owners);
 console.log(ownersToomuch);
 const ownersToolittle=dogs.filter(dog =>dog.curFood < dog.recFood)
     .flatMap(dog=>dog.owners);
 console.log(ownersToolittle);


 //4.
 console.log(`${ownersToomuch.join(' and ' )}'s dogs are eating too  much `);
 console.log(`${ownersToolittle.join(' and '   )}'s dogs  are  eating  too little`);

 //5. 
 console.log(dogs.some(dog => dog.curFood === dog.recFood));

 //6.
const checkEatingOkay = dog => dog.curFood < dog.recFood *1.1 && dog.curFood> dog.recFood * 0.9;
console.log(dogs.every(checkEatingOkay));
console.log(dogs.every(dog=> dog.curFood < dog.recFood *1.1 && dog.curFood> dog.recFood * 0.9))

const dogsEatingOkay=dogs.filter(checkEatingOkay); 
console.log(dogsEatingOkay);

//8.
const dogsGroupedBYPortion=Object.groupBy(dogs, dog=> {
  if (dog.curFood>dog.recFood) {
    return 'too-much'}
  else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'exact';
  }}
  );
console.log(dogsGroupedBYPortion) ;
 
//9. 
const dogsGroupedByOwners=Object.groupBy(
  dogs,dog => `${ dog.owners.length}-owners`);
console.log(dogsGroupedByOwners);

//10.
const  dogsSorted =dogs.toSorted((a,b) => b.recFood-a.recFood);
console.log(dogsSorted);
 