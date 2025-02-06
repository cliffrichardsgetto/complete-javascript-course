'use strict';
const  Person =function(firstName, birthYear) {
    //console.log(this);   it  will show  person{}
    //instnace properties
    this.firstName =firstName;
    this.birthYear = birthYear;
    // never  create method  inside constructor  function       
   // this.calcAge=function() {
     //   console.log(2037-this.birthYear)
    }
    

//new  Person('Jonas', 1991);
const jonas=new  Person('Jonas', 1991);
console.log (jonas);

//arrow function  does  not  work  with  constructor  function 
//1 new  {} empty object  created  
//2  function  is  called  with 'this'  newly  created  object  = {}
//3. {] linked  to prototype
//4.  function automatically  return {}

const matilda =new Person('Matilda', 2017);
const jack =new Person('Jack', 1975);
const sheela =new Person('Sheela', 1975);
const jay2= 'Jay';
console.log(matilda, jack, sheela);
console.log(jonas instanceof Person);
console.log(jay2 instanceof Person);

Person.hey=function () {
  console.log('Hey  There');
  console.log(this);
} ;

Person.hey();

//prototypes
console.log(Person.prototype);
Person.prototype.calcAge=function() {
      console.log(2037-this.birthYear);
}; 

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects
Person.prototype.species="Homo Sapiens";
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);

//object.prototype top  of prototype chain

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3,6,4,5,6,9,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set (this)];

};

console.log(arr.unique());

const  h1 =document.querySelector('h1');

const  Personnew =function(nickName, sex, education) {
      this.nickName =nickName;
     this.sex = sex;
     this.education = education;  
}


const Car =function (make, speed) {
  this.make=make;
  this.speed=speed;
};

Car.prototype.accelerate=function(){
  this.speed +=10;
  console.log(`${this.make} is going  at ${this.speed} km/h`);
};

Car.prototype.brake=function(){
  this.speed -=5;
  console.log(`${this.make} is going  at ${this.speed} km/h`);
};
const bmw=new Car ('BMW',120);
const mercedes = new Car('Mercedes', 95 );

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


const EV=function(make,speed,charge) {
  Car.call(this, make,speed);
  this.charge =charge;
};

//link the  prototypes
EV.prototype=Object.create(Car.prototype);

EV.prototype.chargeBattery=function (chargeTO) {
  this.charge=chargeTO;
};

//when  remove  this  speed  will change
EV.prototype.accelerate=function() {
  this.speed +=20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};
const tesla= new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

class PersonCl {
   //constructor(firstName, birthYear) {  change  to  fullname  later

    constructor(fullName, birthYear) {  
    //this.firstName=firstName;
    this.fullName=fullName;
    this.birthYear=birthYear;
   }
   //methods will be added  to prototype  property 
    calcAge() {
       console.log(2037-this.birthYear);

    }
    greet() {
      console.log(`Hey ${this.firstName}`);
    }
    get age() {
      return 2037 - this.birthYear;
    } 
    set fullName(name) {
      console.log(name);
      if(name.includes(' ')) this._fullName=name;
      else alert(`${name} is not  a  full name!` ) 
    }
    get fullName() {
      return this._fullName;
    } 
    //static  method
     static hey() {
     console.log('Hey there');
     }
    }


  const  jessica = new PersonCl ('Jessica Davis', 1996);
  console.log(jessica);
  jessica.calcAge();

  console.log(jessica.age);

console.log(jessica.__proto__  === PersonCl.prototype);

PersonCl.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`);
}

jessica.greet();
//1,  classes  are  not  hosted 
//2.  class are  first class citizens
//3. classes  are  executed in strict  mode  

const walter = new PersonCl('Walter Whte', 1965);

//PersonCl.hey();   it  did not work

console.log(Personnew);

const Audry=new  Personnew('Audry', 'male','10th')

console.log (Audry);

//const jonas=new  Person('Jonas', 1991);
//console.log (jonas);
const mishal =new Personnew('Mishal', 'female', 'b.com');
const ryan =new Personnew('Ryan', 'male', 'ba');
const arthi =new Personnew('Arthi', 'female', 'ma');
const daina =new Personnew('Daina', 'female', 'ca');


console.log(mishal, ryan,daina,  arthi);

const  account = {
  owner :'Jonas',
  movements : [200,530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();

  },
  set latest(mov) {
    this.movements.push()
  }
}


const PersonProto ={
  calcAge() {
    console.log(2037 - this.birthYear);
  },
    init(firstName, birthYear) {
      this.firstName=firstName;
      this.birthYear=birthYear;
    },
};

const steven =Object.create(PersonProto);
console.log(steven);
steven.name='Steven';
steven.birthYear=2002;
steven.calcAge();

const StudentProto = Object.create(PersonProto);
StudentProto.init=function(firstName,birthYear,course) {
  PersonProto.init.call(this,firstName, birthYear);
  this.course=course;
};

//const jay=Object.create(StudentProto);
//jay.init('Jay', 2010, "Computer Science");
//jay.introduce();
///jay.calcAge();

StudentProto.introduce=function() {
  console.log(`My name  is  ${this.fullName} and  I  study ${this.course}`);
}

const jay=Object.create(StudentProto);
jay.init('Jay', 2010, "Computer Science");
jay.introduce();
jay.calcAge();

//const jay = Object.create(StudentProto);

console.log(steven.__proto__ === PersonProto);

const sarah=Object.create(PersonProto);
sarah.init('Sarah' , 1979);
sarah.calcAge();

class CarCl {
  constructor(make, speed) {
    this.make=make;
    this.speed=speed;
 
}
/*const Car =function (make, speed) {
  this.make=make;
  this.speed=speed;
};
*/
accelerate(){
  this.speed +=10;
  console.log(`${this.make} is going  at ${this.speed} km/h`);
};

brake() {
  this.speed -=5;
  console.log(`${this.make} is going  at ${this.speed} km/h`);
  return this; //to  make  chain 
}
get speedUS() {
  return this.speead / 1.6
}
set speedUS(speed) {
  this.speed=speed *1.6;
}
}

class EVCl extends CarCl {
  // to  make  private 
  #charge;
  constructor(make,speed,charge) {
    super(make, speed);
    //this.charge =charge;
    this.#charge =charge; // to make  private
  };

chargeBattery(chargeTo) {
  this.#charge= chargeTo
  return this; 
}

accelerate() {
  this.speed +=20;
  this.#charge --;
  console.log(`${this.make} is going  at  ${
    this.speed} km/h, with a charge of ${this.#charge}`);
    return this;   
  };
   

}
const rivian = new EVCl('Rivian', 120,23);

console.log(rivian);
//console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

 console.log(rivian.speedUS);

const  ford= new CarCl('ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
/*

const  Student =function(firstName,birthYear, coruse) {
  this.birthYear =birthYear;
  this.firstName=firstName;
  this.course=coruse;

}
*/

const  Student =function(firstName,birthYear, course) {
  Person.call(this, firstName, birthYear);
  //this.firstName=firstName;
  this.course=course;

}
//linking  prototype
Student.prototype =Object.create(Person.prototype);
Student.prototype.introduce =function () {
  console.log(`My  name  is  ${this.firstName} and I study ${this.course}`);
};

const mike= new Student('Mike' , 2020, 'Computer Science');
mike.introduce();
mike.calcAge();


//#const bmw=new Car ('BMW',120);
//#const mercedes = new Car('Mercedes', 95 );
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);


class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always  needs  to  happend first 
    super(fullName, birthYear);
    this.course =course;

  } 
  introduce() {
    console.log(`My  name  is  ${this.fullName} and I  study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${
      2037-this.birthYear} years old, but  as  a student I  feel more  like ${2037 - this.birthYear + 10}`);
    } 
  }


const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
 
martha.introduce();
martha.calcAge();

/*class Account {
  loacale=navigator.language;
  bank='Bankist';
  #movements=[];
  #pin;
  constructor(owner, currency, pin) {
    this.owner=owner;
    this.currency=currency;
    this.#pin=pin;
   // this.movements=[];
    //this.locale= navigator.language;
    
    console.log(`Thanks  for  opening  an account, ${owner}`) ;
     }
  deposit(val) {
    this.#movements.push(val)
  }
  withdraw(val) {
    this.deposit(-val)
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`); 
    }
  }
  //  static #test(){
    //     console.log('Test');
    }
  

const acc1=new Account('Jonas', 'EUR', 1111);
//acc1.movements.push(250);
//acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(150);
acc1.deposit(300);
acc1.withdraw(100);
acc1.movements=[];
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1);
console.log(acc1.pin);

//Account.#test();
*/
//public interface (api)

class Account {
  loacale=navigator.language;
  bank='Bankist';
  #movements=[];
  #pin;
  constructor(owner, currency, pin) {
  this.owner=owner;
  this.currency=currency;
  this.#pin=pin;
 // this.movements=[];
  //this.locale= navigator.language;
  
  console.log(`Thanks  for  opening  an account, ${owner}`);
   }

getMovements() {
  return this.#movements;
  //not  chainable
}

deposit(val) {
  this.#movements.push(val);
  return this;
}
withdraw(val) {
  this.deposit(-val);
  return this;
}
#approveLoan(val) {
  return true;
}
requestLoan(val) {
  if (this.#approveLoan(val)) {
    this.deposit(val);
    console.log(`Loan approved`); 
  }
  return this;
}

}

/*const acc1=new Account('Jonas', 'EUR', 1111);
//acc1.movements.push(250);
//acc1.movements.push(-140);
acc1
   .deposit(300) 
   .withdraw(100) 
   .withdraw(50) 
    .requestLoan(25000) 
    .withdraw(4000) 
//acc1.movements=[];
///acc1.requestLoan(1000);
//acc1.approveLoan(1000);
console.log(acc1);
//console.log(acc1.pin);
*/
const acc1=new Account('Jonas', 'EUR', 1111);
const movements=acc1
   .deposit(300) 
   .withdraw(100) 
   .withdraw(50) 
    .requestLoan(25000) 
    .withdraw(4000) 
    .getMovements();
//acc1.movements=[];
///acc1.requestLoan(1000);
//acc1.approveLoan(1000);
console.log(acc1);
//console.log(acc1.pin);
console.log(movements);