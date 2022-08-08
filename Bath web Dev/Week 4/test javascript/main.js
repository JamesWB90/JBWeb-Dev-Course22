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

// const fruits = ['apples','oranges','pears']; //0,1,2 - as 0 is inclueded 

// fruits[3] = 'grapes'; // will then be added to the array like this.

// fruits.push('mangos');// add the the array to the end

// fruits.unshift('strawberries'); // add to the beggining 

// fruits.pop() // will take the last one off

// console.log(Array.isArray(fruits));// do this to check if something is an array or not

// console.log(fruits.indexOf('oranges')) // this will give you the index of the string or number

// console.log(fruits);

//----------------------------------------------------------------------------------------------------------------

// Object literials 

// These are key value pairs

// const person = {
//     firstName: 'James',
//     lastName: 'Bailey',
//     age: 31,
//     hobbies: ['cars','music','gym','movies'],
//     address: {
//         street: 'Downing',
//         city: 'Canterbury',
//         county: 'Kent',
//     }
// }
//console.log(person.firstName,person.lastName)- by adding a , you can get in to show multiples
//console.log(person.hobbies[3]); - by putting [2] numer in brackets this will call up an array assigned to that ie gym
//console.log(person.address.city); - this will pull out the city named in brackets

//const { firstName, lastName,} = person; //this will pull the name and is call destructuring.
//console.log(firstName,lastName);

// person.email = 'james@gmail.com'; - this will add an emal address to the variable
// console.log(person); 


const todos =

    [

        {
            id: 1,
            text: 'take out trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'meeting with boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Dentist appt',
            isCompleted: false
        },


    ];
// // how to do a JSON format file
// const todoJSON =JSON.stringify(todos);
// console.log(todoJSON);

//console.log(todos[1].text); this will pull just the text to the console.

// For loop

// for(let i = 0; i <= 10; i++) {

//     console.log(`For Loop Number: ${i}`);

// }

// while loop - differance is you set the loop outside the variable

// // let i = 0;
// // while(i< 10){

// //     console.log(`While Loop Number: ${i}`);
// //     i++;
// }

// for(let i = 0; i < todos.length; i++) {

//         console.log(todos[i].text);
// }

// for of ------------------------

// for(let todo of todos){

// console.log(todo.id);

// }

// high order array methods
    //forEach - which loops through them, map -  allow to create a new array from an array, filter- will create a new array based on a condition

//     todos.forEach(function(todo){
// console.log(todo.text);
//     });

    const todoCompleted = todos.filter(function(todo){
    return todo.text
    });

    console.log(todoCompleted);