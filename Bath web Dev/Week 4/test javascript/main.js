/*multi
line
Comments*/


// veruiables- 
//var
//let - (you can re assign values),
//const - constant value and cant be changed or re assigned


//data types

//Strings - this is words or multiple caracters 
// numbers 
//const name = "James"; // String needs ""
 //const age = 31; // number
 // const rating = 4.5;
//const iscool = true //buolean - no ""
//const x = null; no infomation
//const = y = undefined;

//----------------------------------------------------------------------------------------------------

//console.log(typeof); - will give you your output type

//--------------------------------------------------------------------------------------------------------

//cocatenation
//console.log( ' My name is ' +  name  +' and i am' + age); - old way 

// to get the string to show this information you would concatenate the date you want to show with a + each side of that data.
// or use console.log (`my name is ${James} and I am ${31}`); using backticks`` - new way 
//const name = 'James';
//const age = 31;

//console.log(`my name is ${name} and I am ${age}`);

//const s ="Hello World";
// console.log(s.length);  - this gives you the length of the string 

//console.log(s.toUpperCase()) - as this is changing somthing this means its a method so you have to add ()
// method is a function assosiated with an object

//console.log(s.substring(0,5)) - This will show only the first 4 letters of the string as 5 is a space 0=beggining 5=end of string.

//console.log(s.split(``)) - if you want to split by letter you would put `` without  a space this creates an array

//---------------------------------------------------------------------------------------------
//const  s = 'technology, computers, it, code';

//console.log(s.split(`, `))
// To get an array of this you would put `, `= backticks , and space = would present as 4 arrays

//--------------------------------------------------------------------------------------------------------

//  Arrays - varibles that hold multiple values.

/*const numbers =  new Array(1,2,3,4,5,);
console.log(numbers);*/

const fruits = ['apples','oranges','pears']; //0,1,2 - as 0 is inclueded 

fruits[3] = 'grapes'; // will then be added to the array like this.

fruits.push('mangos')

fruits.unshift('strawberries');

console.log(fruits);




