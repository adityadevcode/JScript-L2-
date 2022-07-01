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

////////////////////////////////
Numbers and number methods
let num = 33;
console.log(num);
 33

let num1 = 33.32;
console.log(num1);
33.32

const myNumber =42;
const myFloat =42.0;
const myString ="42";
console.log(myNumber ===myString);
 false

console.log(myNumber === myFloat);
 true

// we can chamge string data type to number using number function

console.log(Number(myString));// converted string to number
 42

console.log(Number(myString) +3);
 45

 const myNumber =42;
const myFloat =42.0;
const myString ="42";
console.log (Number(myString) === myNumber);
 true

//if we pass boolean true or flase it will return number
console.log(Number(true));
 1

//if we pass boolean true or flase it will return number
console.log(Number(false));
 0

//isInteger
//number methods
const myNumber =42;
const myFloat =42.0;
const myString ="42";

//is Integer
the Number.isInteger() method determines whether the 
passed value is an integer
console.log(Number.isInteger(myNumber));
VM9402:7 true
undefined
console.log(Number.isInteger(myString));
VM9644:1 false
undefined

//Number.parseFloat() method parses an argument and returns
a floating point number

//number methods
const myNumber =42;
const myFloat =42.0;
const myString ="42";

console.log(Number.parseFloat(myFloat));

VM9872:6 42
undefined
console.log(Number.parseFloat(myString));
VM9953:1 42

//toFixed() formats a number accoridng to how many decimal points you provide 
as the parameter
//number methods
const myNumber =42;
const myFloat =42.04353234;
const myString ="42";

console.log(myFloat.toFixed(2));
42.04

//number methods
const myNumber =42;
const myFloat =42;
const myString ="42";

console.log(myFloat.toFixed(2));
42.00

//parseInt method parses arguments and returns integer, it removes non numeric character 
let string = "43234.234abc";
console.log(Number.parseInt(string));
VM10645:3 43234

///////////////////////
Math methods and properties

console.log(Math.PI);
 3.141592653589793

//TRUNC MEHTOD WILL REMOVES ALL DECIMALS FROM PIE
console.log(Math.trunc(Math.PI));
 3

//ROUND MEHTOD ROUNDED VALUE TO NEAREST INTEGER
let number = 234.553434;
console.log(Math.round(number));
235

//ceil MEHTOD ROUND the VALUE up
let number = 234.553434;
console.log(Math.ceil(number));
 235

//floor method number is rounded down 
let number =131.85938;
console.log(Math.floor(number));
VM11725:3 131

//pow method will take 2 number to the power of 2 with is 4

undefined
console.log(Math.pow(2, 2));
VM12036:1 4
undefined
console.log(Math.pow(252, 26));
VM12057:1 2.7315808558161414e+62

//Math.min will return small number
console.log(Math.min(2,56,9,5));
 2
//Math.max will return max number
console.log(Math.max(135.6,3,5,));
135.6

//Math random method (Result is always 0to 1)
console.log(Math.random());
 0.20385660813932693

console.log(Math.random());
 0.8312185009066055

 
 *************IMPORTANT TOPIC
 console.log(Math.random());
 0.6478387439819695

console.log(Math.random()*10);
 6.66489703372177

//enclosed that in floor 
console.log(Math.floor(Math.random() *10)+1);
 5

//enclosed that in floor 
console.log(Math.floor(Math.random() *10)+1);
 5

//enclosed that in floor 
console.log(Math.floor(Math.random() *10)+1);
 6

//enclosed that in floor 
console.log(Math.floor(Math.random() *10)+1);
 7

//**** *
CHOOSE Math.floor() not Math.ceil() for generating a random number
1 to 10

---------------------------------------------
condtions

condition is true
 if (condition){    
    run some code
}

if condition is false then
 if (condition) {
   run some code
 } else{
   run some difference code
 }
 
/condtional if statements
let soup = "chicken";
let reply;
if (soup) {
    reply=`Here your order of ${soup}`;
}
console.log(reply);
 Here your order of chicken

//
let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply= "no soup";
}else if(soup && crackers) {
    reply= `here is the order of ${soup}`;
} else if(soup) {
    reply= `here's your order of $[soup}`;
}else{
    reply="sorry out of soup";
}
console.log(reply);
 no soup

 //
 let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply= "no soup";
}else if(soup && crackers) {
    reply= `here is the order of s and c ${soup}`;
} else if(soup) {
    reply= `here's your order of only soup $[soup}`;
}else{
    reply="sorry out of soup";
}
console.log(reply);
VM1747:15 here is the order of s and c chicken noodle soup

//
let customerIsBanned = false;
let soup = "false";
let crackers = false;
let reply;

if (customerIsBanned) {
    reply= "no soup";
}else if(soup && crackers) {
    reply= `here is the order of s and c ${soup}`;
} else if(soup) {
    reply= `here's your order of only soup $[soup}`;
}else{
    reply="sorry out of soup";
}
console.log(reply);
VM1818:15 here's your order of only soup $[soup}
undefined
let customerIsBanned = false;
let soup = "true";
let crackers = false;
let reply;

if (customerIsBanned) {
    reply= "no soup";
}else if(soup && crackers) {
    reply= `here is the order of s and c ${soup}`;
} else if(soup) {
    reply= `here's your order of only soup $[soup}`;
}else{
    reply="sorry out of soup";
}
console.log(reply);
 here's your order of only soup $[soup}

  //
  let testScore = 45;
let collegeStudent = true;
let grade;

if (testScore>=90){
    grade = "A";
}else if(testScore>=80){
    grade = "B";
}else if(testScore >= 70) {
    grade ="C";
}else if (testScore >= 60) {
    grade ="D";
}else{
    //nested if statment
if (collegeStudent) {
    grade ="U";
}else {
    grade ="F";
}
}
console.log(grade);
 U

//
let testScore = 60;
let collegeStudent = false;
let grade;

if (testScore>=90){
    grade = "A";
}else if(testScore>=80){
    grade = "B";
}else if(testScore >= 70) {
    grade ="C";
}else if (testScore >= 60) {
    grade ="D";
}else{
    //nested if statment
if (collegeStudent) {
    grade ="U";
}else {
    grade ="F";
}
}
console.log(grade);
 D

 //
 let testScore = 50;
let collegeStudent = false;
let grade;

if (testScore>=90){
    grade = "A";
}else if(testScore>=80){
    grade = "B";
}else if(testScore >= 70) {
    grade ="C";
}else if (testScore >= 60) {
    grade ="D";
}else{
    //nested if statment
if (collegeStudent) {
    grade ="U";
}else {
    grade ="F";
}
}
console.log(grade);
 F

//switch statements
//switch statements

switch (1) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("No Match");
}
 1

//
switch (10) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;

    default:
        console.log("No Match");
}
 No Match

//Ternary operator
//Terinary operator : is short hand for if else statement
//condition ? true: false;
let soup = "Chicken Noodle Soup";
let response = soup ? "yes, we have soup.": "Sorry, no soup today.";
console.log(response);
 yes, we have soup.

let soup;
let response = soup ? "yes, we have soup.": "Sorry, no soup today.";
console.log(response);
Sorry, no soup today

*** multiple ternary conditions
let soup = "Chicken Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ?"sorry no soup for you":soup
                                  ?`yes we have ${soup} today`: "sorry no soup today";
console.log(soupAccess);
     yes we have Chicken Soup today

let soup = "Chicken Soup";
let isCustomerBanned = true;
let soupAccess = isCustomerBanned ?"sorry no soup for you":soup
                                  ?`yes we have ${soup} today`: "sorry no soup today";
console.log(soupAccess);
sorry no soup for you

//let testScore = 79;
let myGrade=testScore >90 ?'A':testScore >80
                        ?'B':testScore >70
                        ? 'C':testScore >60
                        ? 'D' :testScore >50
                        ? 'P':'Fail';
console.log(`my test grade is ${myGrade}.`);
                       
my test grade is C.

let testScore = 36;
let myGrade=testScore >90 ?'A':testScore >80
                        ?'B':testScore >70
                        ? 'C':testScore >60
                        ? 'D' :testScore >50
                        ? 'P':'Fail';
console.log(`my test grade is ${myGrade}.`);
 my test grade is Fail.

-------------------------------
//user input
alert just prompt
alert we dont get back any data

console.log(alert("hello"));
undefined

console.log(prompt("enter your name")); direct input form user
VM6791:1 s

confirm it will display name on alert screen
console.log(confirm("krishna"));

?? NULLISH COALESCING OPERATOR WORKS
let name = prompt("please enter your name");
console.log(name ?? "you did nt enter your name");
 you did nt enter your name

//ELIMAINATING EXTRA SPACES USING TRIM
let name = prompt("Please enter your name.");
if(name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}else{
    console.log("you didnt enter your name");
}
 57
 57
 krishna                                    kumar





































































































































































