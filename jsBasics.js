/*
//
/* --*/
/*
"dave"
'dave'
typeof "dave";
'string'
typeof 42;
'number'
typeof true;
'boolean'

//if variable is more than one word then camelcase
oneTwo
one

4 data types
1string, 2number, 3boolean, 4undefined
//to check the datatype we use typeOf
let nu ="some";
console.log(nu);
 some

typeof nu;
'string'

//create a variable with let const and var
//camelCase naming convention if we have 2 words

alert("helloworld");
we get pop up box in js which is alert box
prompt("enter your name");
it will take our name as input

//string methods
length, charAt, indexOf, lastIndexOF


const myVar = "professor";
console.log(myVar.length);
 9

//charAt Method (it will return the char position)
const name ="something";
console.log(name.charAt(5));
 h

//first occurance of string indexOf
const name = "something";
console.log(name.indexOf("th"));
 4

//lastIndexOf will provide last occurance
const name = "something";
console.log(name.lastIndexOf("m"));
 2

 //Slice method:starting and ending parameters, it will return start and ending positions
let name ="technologies";
console.log(name.slice(2,4));
 ch

console.log(name.slice(6));
 logies

nothing will return if 2 argument value is least
console.log(name.slice(7,1));
Uncaught SyntaxError: Unexpected identifier

//UPPERCASE
let ram ="abcd";
console.log(ram.toUpperCase());
 ABCD

 let ram ="abcd";
console.log(ram.toUpperCase());
 ABCD

console.log(ram.toLowerCase());
 abcd

//include method if the group of elements are not in the string then it will show true or false
let some ="enginerro";
console.log(some.includes("adc"));
false

let some ="enginerro";
console.log(some.includes("adc"));
 false

console.log(some.includes("oeia"));
 false

console.log(some.includes("oei"));
 false

console.log(some.includes("ne"));
 true

 //split it will split the string, it will split multiple results in an array
const read ="engineering";
console.log(read.split("e"));
 (4) ['', 'ngin', '', 'ring']

const read1 ="abcdefgh";
console.log(read1.split("e"));
 (2) ['abcd', 'fgh']

 
