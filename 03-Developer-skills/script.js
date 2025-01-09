'use strict';

const  calcmaxTemp =function (temps) {
   let max = temps[0];
   let min =  temps[0];

   for (let i=0; i < temps.length; i++ ) {
       if (temps[i] > max ) max=temps[i];
       if (temps[i] < min) min=temps[i];
    }
   console.log(max,min);
   console.log(min);
};
calcmaxTemp([3,7,9,14,8,6,2,11,5,1]);

const temperatures =[3,-2,-6,-1,'error', 9,13,17,15,14,9,5];
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let  min = temps[0];

    for  (let i= 0; i < temps.length; i++) {
        const  curTemp = temps[i];
        if ( typeof curTemp !== 'number') continue;
        if (curTemp > max ) max= curTemp;
        if (curTemp < min) min =curTemp;

     } 
    console.log(max, min);
    return max -min;
    }
calcTempAmplitude(temperatures);  
const amplitude=calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1,t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    
    let max = temps[0];
    let min = temps[0]; 

    for (let i=0; i < temps.length; i++) {
        const  curTemp=temps[i];
        //console.log(curTemp);
        if (typeof curTemp !== 'number') continue;    
        
        if (curTemp > max) max = curTemp;
        //console.log(max);
        if (curTemp < min) min = curTemp;
    }   
    console.log(max,min); 
    return max - min;   
 }; 
calcTempAmplitudeNew([3,5,11,2],[9,0,5,6]);
const amplitudeNew=calcTempAmplitudeNew([3,5,11,2],[9,0,5,6]);
console.log(amplitudeNew);

// debugging  with  console  abd  breakpoints

const measureKelvin = function () {
    const  measurement = {
        type :  'temp',
        unit : 'celsius',
       // c)  fix 
     //  value : Number(prompt('Degrees celsius :')),
       value : 10, 
    };
    console.log(measurement.value);
    const kelvin = measurement.value+273;
    return kelvin;
}
console.log(measureKelvin());

const calcTempAmplitudeNewbug = function (t1,t2) {
    const temps = t1.concat(t2);
    console.log(temps);
    
    //let max = temps[0];
    //let min = temps[0]; 
    let max = 0; 
    let min = 0;  

    for (let i=0; i < temps.length; i++) {
        const  curTemp=temps[i];
        //console.log(curTemp);
        if (typeof curTemp !== 'number') continue;    
        
        if (curTemp > max) max = curTemp;
        //console.log(max);
        if (curTemp < min) min = curTemp;
    }   
    console.log(max,min); 
    return max - min;   
 }; 
calcTempAmplitudeNew([3,5,11,2],[9,0,5,6]);
const amplitudeNewbug=calcTempAmplitudeNewbug([3,5,11,2],[9,0,5,6]);
console.log(amplitudeNewbug);

const  data1=[17,21,23];
const data2=[12,5,-5,0,4];

console.log(`...${data1[0]}ºC ...${data1[1]}ºC...${data1[2]}ºC...`);

const printForecast = function (arr) {
    let str = '';
    for (let i=0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i+1} days ...`;
    }
    console.log('...' + str);
};
printForecast(data1);

// written  by  chatgpt
function analyzeWorkWeek(dailyHours) {
    const  daysofWeek =[
        'Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday','Sunday'];
    // validate  the  input  array  has  exactly 7  elements
    if  (!Array.isArray(dailyHours) ||  dailyHours.length !==7) {
        throw new Error ('Input must  be an array  of  exactly  7  daily  work  hours');
    }
    // calculate  total  hors  worked
    const  totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    // calculate  average  daily  hours  rounded  to  one  decimal  place
    const averageHours=Math.round((totalHours / dailyHours.length)* 10)/10;
    // find  the  day  with  the  most  hours  worked

    const  maxHours=Math.max(...dailyHours);
    const  maxDayIndex=dailyHours.indexOf(maxHours);
    const  maxDay = daysofWeek[maxDayIndex];  // convert  index to  day name 

    // count  the  number  of  days  worked

    const  daysWorked=dailyHours.filter(hours=> hours > 0).length;

    // check if  the  week  was  full-time (35  hours  or  more )
    const  isFullTime =totalHours >=35;

    //return  the  result  object
    return {
      totalHours,averageHours,
       maxDay,  // name of  the  day  with  the  most  hours 
       daysWorked,
       isFullTime,
    };
}

const  weeklyHours = [7.5,8,6.5,0,8.5,5,0];
const  analysis=analyzeWorkWeek(weeklyHours);
console.log(analysis);

//const  weeklyHours2=[7.5,8,6.5,0,8.5];
//const  analysis2=analyzeWorkWeek(weeklyHours2);
//console.log(analysis2);