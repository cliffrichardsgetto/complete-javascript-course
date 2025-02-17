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