/*
Closures
A closure is a feature in JS where an inner function has access
 to the outer function variables and parameters

 closure has 3 scopes
 -It has access to its own scope- var defined between its curly brackests
 -it has access to the outer function variables
 -it has access to the global varible

 EXAMPLE: BOY has access to the house, play ground and moon

IIFE
Immediately invoked function expression-is a js function
that runs as soon as it is defined.
-they dont pollute the global obj, they are a simple way to 
isolate variables declaration

ex:Example for iife (clock- when we keep batteries in clock it will run
 automatically no need to change needles  manually to change time)

Spread
Spread syntax (...)allows an iterable such as an array expression
or string to be expanded in places where zero or more arguments are 
Expected

Hoisting
Hoisting is JS default behavior moving declarations to the top
js declaration are hoisted
function declaration is possible but not function expression

Synchronous




Asynchronous



Callbacks
-A callback is a function passed as an argument to another function
this technique allows a function to call another function
-a callback function can run after another function has finished

example: if we call some one, if they are busy they will call back to us
after some time

Callback Hell


Promises
-A promise is a JS object that links producing code and consuming code
-producing code is code that can take some time
-consuming code is code that must wait for the result
-in promise we have Pending, Fullfilled and Rejected
-in promises we have chaining process 



Async/Await:this one is introduced because of call back hell/ promises and async and await
-async and await make promises easier to write
-async makes a function return a promise
-await makes a function wait for a promise
























/*
console.log(prompt("enter your name"));
VM1686:1 krishna

alert ("enter your name");
prompt("enter your name");

//Ternary operator
let points = 90;
let type = points >100 ?'gold':'silver';
console.log(type);
silver

let points =40;
let marks = points>45 ?"pass":"fail";
console.log(marks);
VM1979:3 fail
undefined

let points =45;
let marks = points>45 ?"pass":"fail";
console.log(marks);
VM1990:3 fail
undefined

let points =46;
let marks = points>45 ?"pass":"fail";
console.log(marks);
VM2000:3 pass

let points =150;
let type = points <100 ? 'gold':'silver';
console.log(type);
VM3080:3 silver
undefined

let points =150;
let type = points >100 ? 'gold':'silver';
console.log(type);
VM3090:3 gold

---------------------------------























