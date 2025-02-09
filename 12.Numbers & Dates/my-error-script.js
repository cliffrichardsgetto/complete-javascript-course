const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      '2019-11-18T21:31:17.178Z',
      '2019-12-23T07:42:02.383Z',
      '2020-01-28T09:15:04.904Z',
      '2020-04-01T10:17:24.185Z',
      '2020-05-08T14:11:59.604Z',
      '2020-07-26T17:01:17.194Z',
      '2020-07-28T23:36:17.929Z',
      '2020-08-01T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T06:04:23.907Z',
      '2020-01-25T14:18:46.235Z',
      '2020-02-05T16:33:06.386Z',
      '2020-04-10T14:43:26.374Z',
      '2020-06-25T18:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
  };
  
  const accounts = [account1, account2];
  
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

//functions

//experimentating api
//const  now =new Date();


/*const formatMovementDate = function (date, locale) {
    const calcDaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);
  
    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  };
  */
const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = '';
    //console.log(acc.movements); 

    const combinedMovsDates = acc.movements.map((mov,i) => ({
        movement: mov,
        movementDate: acc.movementsDates.at(i),
    }));
    console.log(combinedMovsDates)

    const  formatMovementDate =function(date, locale) {
      const calcDaysPassed = (date1, date2) =>
        Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
        const daysPassed = calcDaysPassed(new Date(), date);
        console.log(daysPassed);
        if (daysPassed === 0) return 'Today';
        if (daysPassed === 1) return 'Yesterday';
        if (daysPassed <= 7) return `${daysPassed} days ago`;
        //else {
        const  day = `${date.getDate()}`.padStart(2,0);
        const  month = `${date.getMonth()+1}`.padStart(2,0);
        const year = date.getFullYear();
       //return `${day}/${month}/${year}`;
       return  new Intl.DateTimeFormat(locale).format(date);
      };
    

      const formatCur = function (value, locale, currency) {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency,
        }).format(value);
      };
      //const formattedMov = new Intl.NumberFormat(acc.locale, {style : 'currency', currency : 'USD'}).format();
     
    if(sort) combinedMovsDates.sort((a,b)=> a.movement-b.movement);

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  
     movs.forEach(function (mov, i) {
        //const { movement, movementDate} =obj   
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const date = new Date(acc.movementDate[i]);
        const displayDate=formatMovementDate(date, acc.locale);
       // const formattedMov=new Intl.NumberFormat(acc.locale, {
        //  style : 'currency', currency : acc.currency }).format(mov);
        const formattedMov=formatCur(mov,acc.locale, acc.currency )
        //.format(mov);
        
          //const formattedMov=new Intl.NumberFormat(acc.locale, {
          //  style : 'currency', acc.currency : 'USD'}).format(mov);

        /* combinedMovsDates.forEach(function (obj, i) {
          const { movement, movementDate} =obj   
          const type = movement > 0 ? 'deposit' : 'withdrawal';
          const date = new Date(movementDate);
          const displayDate=formatMovementDate(date, acc.locale); */   
       // const formattedMov=formatCur(movement, acc.locale,acc.currency);

        //`${day}/${month}/${year}`;
  /*   combinedMovsDates.forEach(function (mov, i) {

      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const date = new Date(acc.movementsDates[i]);
      const  day = `${date.getDate()}`.padStart(2,0);
      const  month = `${date.getMonth()+1}`.padStart(2,0);
      const year = date.getFullYear();
      const displayDate=`${day}/${month}/${year}`;
      // const hour =now.getHours();
     // const min =now.getMinutes(); */
     
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };
  
      //div class="movements__value">${mov.toFixed(2)€</div>
  

  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
   // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
    labelBalance.textContent = formatCur(acc.balance,acc.locale, acc.currency);
  };
  
  const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;
  
    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  };
  
  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);
  
  const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);
  
    // Display balance
    calcDisplayBalance(acc);
  
    // Display summary
    calcDisplaySummary(acc);
  };
  
  ///////////////////////////////////////
  // Event handlers
//clear  input fields


const startLogOutTimer = function () {
  //set time  to  5  minutes
  //let time =120;
  //call  the  timer  every  second
  //tick();
 // const timer = setInterval(function () {
  const tick = function () {

    //const min =time / 60    //  to  set  timer  for  every  minutes
    //const min =Math.trunc(time / 60).padStart(2,0);  
    const min =String(Math.trunc(time / 60)).padStart(2,0);  //  to  set  timer  for  every  minutes
  // const sec =time % 60 
    const sec =string(time % 60).padStart(2,0); 
    // In  each  call  print  the  remaining  time  to  UI
   // labelTimer.textContent = time;
   // labelTimer.textContent = min;
    labelTimer.textContent = `${min}:${sec}`;

    // decrease 1s
    //time--;
      //when  0  seconds, stop  timer  and  log  out  user 
    if(time ===0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log  in  to  get  started';
      containerApp.style.opacity = 0;
    } 
    // decrease  1s  
      time--;
    }; 
    let time =120;
    tick();
    const  timer =setInterval(tick, 1000);
    return timer;
    };

  //let currentAccount;
  let currentAccount, timer;
/*
  //fake always  logged  in
  currentAccount=account1;
  updateUI(currentAccount);
  containerApp.style.opacity=100;
*/

/*
  const now = new Date();
  //const  day = now.getDate();
  const  day = `${now.getDate()}`.padStart(2,0);
  const  month = `${now.getMonth()+1}`.padStart(2,0);
  const year = now.getFullYear();
  const hour =now.getHours();
  const min =now.getMinutes();
//  const month=now.getMonth() + 1;
*/
 // labelDate.textContent=now;
//labelDate.textContent=`${day}/${month}/${year}, ${hour}:${min}`;


  //
//experimenting  api
const now =new Date();
const options = {
  hour:'numeric',
  minute:'numeric',
  day : 'numeric',
  month : 'long',
  year : 'numeric',
  weekday : 'long',
};
const locale = navigator.language;
console.log(locale);

labelDate.textContent=new Intl.DateTimeFormat('en-US').format(now);
labelDate.textContent=new Intl.DateTimeFormat('en-GB').format(now);
labelDate.textContent=new Intl.DateTimeFormat('en-GB', options).format(now);
labelDate.textContent=new Intl.DateTimeFormat(locale, options).format(now);

  btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;

        //const  day = now.getDate();
      //const now = new Date(); 
      const  now =new Date();
      const options = {
      hour:'numeric',
      minute:'numeric',
      day : 'numeric',
      month : 'long',
      year : 'numeric',
      weekday : 'long',
      };
     // const locale = navigator.language;
      //console.log(locale);

     // labelDate.textContent=new Intl.DateTimeFormat(locale,options).format(now);   
      labelDate.textContent=new Intl.DateTimeFormat(currentAccount.locale,options).format(now);   


      /*const  day = `${now.getDate()}`.padStart(2,0);
      const  month = `${now.getMonth()+1}`.padStart(2,0);
      const year = now.getFullYear();
      const hour =`${now.getHours()}`.padStart(2,0);
      const min =`${now.getMinutes()}`.padStart(2,0);*/
//  const month=now.getMonth() + 1;

 // labelDate.textContent=now;
  //  labelDate.textContent=`${day}/${month}/${year}, ${hour}:${min}`;
  
      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur();
     //timer
     if  (timer)  clearInterval(timer);
      timer = startLogOutTimer(); 
      // Update UI
      updateUI(currentAccount);
    }
  });
  
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Math.floor(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
  
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      //add transfer date
      cuurentAccount.movementsDates.push(new Date().toISOString());
      receiverAcc.movementsDates.push(new Date().oISOString());
      // reset timer 
        clearInterval(timer);
        timer=startLogOutTimer();
      // Update UI
      updateUI(currentAccount);
    }
  });
  //after  adding  timer
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
  
    const amount = Number(inputLoanAmount.value);
  
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // Add movement
      setTimeout(function() {
      currentAccount.movements.push(amount);
      //add  loan  date
  
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
    
      updateUI(currentAccount);
      //reset timer
      clearInterval(timer);
      timer=startLogOutTimer();  
    },2500);
  }
    inputLoanAmount.value = '';
  });
  
  
  /* //after  before timer
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
  
    const amount = Number(inputLoanAmount.value);
  
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
      // Add movement
      
      currentAccount.movements.push(amount);
      //add  loan  date
  
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    
  }
    inputLoanAmount.value = '';
  });
  
  */

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();
  
    if (
      inputCloseUsername.value === currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
    ) {
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      console.log(index);
      // .indexOf(23)
  
      // Delete account
      accounts.splice(index, 1);
  
      // Hide UI
      containerApp.style.opacity = 0;
    }
  
    inputCloseUsername.value = inputClosePin.value = '';
  });
  
  let sorted = false;
  btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
  });
  


  console.log(Math.sqrt(25));
  console.log(25**(1/2));
  console.log(8**(1/3));

  console.log(Math.max(5,18,11,23,2));
  console.log(Math.max(5,18,11,'23',2));
  console.log(Math.min(5,18,11,23,2));
  console.log(Math.max(5,18,11,'23px',2));

  console.log(Math.PI * Number.parseFloat('10px') ** 2);
  console.log(Math.trunc(Math.random()*6 )+1);
  const  randomInt = (min,max) => 
    Math.trunc(Math.random()* (max-min) +1 ) + min;
console.log(randomInt(10,20));

// flooor  works  better  than  trunc 
const  randomInt1 = (min,max) => 
    Math.floor(Math.random()* (max-min) +1 ) + min;
console.log(randomInt1(10,20));
//rouding integers
console.log(Math.trunc(23.3));
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.9));
console.log(Math.floor(23.3));
console.log(Math.trunc(-23.9))
console.log(Math.floor(-23.9))
console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))

//roundign  decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

console.log(5 % 2);
console.log(5 /2);
console.log(8 % 3);
console.log(8/ 3);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
console.log(isEven(8));

labelBalance.addEventListener('click', function() {
   [...document.querySelectorAll('.movements__row')].
   forEach(function(row, i) {
       if (i % 2 === 0) row.style.backgroundColor ='orangered'; 

       if (i % 3 === 0) row.style.backgroundColor ='blue'; 
});
});

const diameter=287_460_000_000
console.log(diameter);

const price=345_999
console.log(price);


const transferFee1=15_00;

const transferFee2=1_500;

console.log(2**53 -1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2**53 +1)
console.log(2**53 +2)
console.log(2**53 +3)
console.log(2**53 +4)
console.log(2**53 +5)


console.log(4835888822299999999978878988999999999999988888n);
//console.log(Bigint(48384302));

//operators
console.log(10000n + 10000n);
//console.log(36286372637263726666666*111111111n);

const  huge =(20289830234283n);
const  num1 =23;

console.log(huge * BigInt (num1));

//exceptions
console.log(20n > 15);
console.log(20n === 15);
//console.log(typeof 20n);
console.log(20n === '20');

console.log(huge + '  is Really big');

//divisions
console.log(11n / 3n);
console.log(10 / 3);

//create date
/*
const now =new Date()
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));

console.log( new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15,23,5));
console.log(new Date(2037,10,31));

console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));
const  future = new Date(2037, 10,19, 15,23);
//working with  dates

const  future = new Date(2037,10,19,15,23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

const future = new  Date(2037,10,19,15,23);

console.log(future);

const calcDaysPassed =(date1,date2)=>
  Math.abs(date2-date1)/(1000*60*60*24);

const day1=calcDaysPassed(new Date(2037,3,4), new Date(2037,3,14)); 
console.log(day1)

const num=3884764.23

const options1 = {
  //style : 'unit',
  //style : 'percent',
  style : 'currency',
 // unit : 'mile-per-hour',
  unit : 'celsius',
  currency: 'EUR', 
  useGrouping : false,
};
console.log('US:', new Intl.NumberFormat('en-US', options1), format(num));
console.log('US:', new Intl.NumberFormat('en-US'), format(num));
console.log('Germany:', new Intl.NumberFormat('en-DE'), format(num));
console.log('Syria:', new Intl.NumberFormat('ar-SY'), format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language), format(num));

const  ingridents=['olives','spinach']
const pizzaTimer= setTimeout((ing1,ing2 )=> console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, 'olives','spinach');
console.log('waiting...');

if (ingridents.includes('spinach')) clearTimeout(pizzaTimer);

//setTimeout( ()=> console.log('Here  is  your  pizza'), 3000);
//console.log('waiting...');
//setInterval

setInterval(function () {
   const now1 = new Date(); 
   console.log(now1);}, 1000);