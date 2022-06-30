//Level 2 Topics
//Arrays
/*
-An array is a collection of elements, arrays are objects
we can initialize an empty array in 2 way
Array literal syntax
const b =[];
console.log(b);
VM316 []
Array build in function
const c =Array();
console.log(c);
VM407 []
//an array can hold any value of different types
const a =[1,2,3];
const b =Array(1,2,3);
console.log(a);
console.log(b);
VM894:3 (3) [1, 2, 3]
VM894:4 (3) [1, 2, 3]

const i = new Array("a","b","c");
console.log(i);
VM1918:2 (3) ['a', 'b', 'c']
undefined
const p =Array.of(1,2,3);
console.log(p);
VM2070:2 (3) [1, 2, 3]

const a =[1, 'sam',3, ['ab','cv',1]]
console.log(a);

VM2497:2 (4) [1, 'sam', 3, Array(3)]

//we can add an array into an array, we can create multi-dimensional
arrays,
const mat = [
    [1,2,3],
    [2,3,4],
    [4,5,6]
    ]
undefined
console.log(mat);
VM2833:1 (3) [Array(3), Array(3), Array(3)]
undefined
mat[1];
(3) [2, 3, 4]
mat[2][1]
5
// we can initialize array with set of values

Array(12).fill(9);
(12) [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

//number of elements in array
let b =[1,2,4,5];
b.length;

// add item to array push method
let p = [11,22,34,'ab','c'];
p.push(44);
console.log(p);

VM3510:4 (6) [11, 22, 34, 'ab', 'c', 44]
undefined
//add element begining of array
p.unshift('krish');
console.log(p);
VM3719:3 (7) ['krish', 11, 22, 34, 'ab', 'c', 44]
undefined
//remove elements from array at end pop
p.pop();
console.log(p);
VM3915:3 (6) ['krish', 11, 22, 34, 'ab', 'c']
undefined
//remove element from begining of an array shift
p.shift();
console.log(p);
VM4125:3 (5) [11, 22, 34, 'ab', 'c']

//
//join 2 array
let a =[1,2,3,4];
let b=a;
console.log(b);
console.log(a);
VM4609:4 (4) [1, 2, 3, 4]
VM4609:5 (4) [1, 2, 3, 4]
undefined

//join 2 or more arrays concat();
let p= [1,23,4,35];
let q=['a','b','v'];
let i =p.concat(q);
console.log(i);
VM4944:5 (7) [1, 23, 4, 35, 'a', 'b', 'v']
undefined

//to join 2 arrays we can use spread operator (...)
let na =[1,2,3,4,54];
let pa =['as','de','gg'];
let z=[...na,...pa];
console.log(z);
VM5305:5 (8) [1, 2, 3, 4, 54, 'as', 'de', 'gg']
undefined

//filter, find, includes and indexof
// 4  methods to search an array in js
//filter method to find elements in an array that meet certain condition (array of num is greater than 10)
//find method to find the first elements that meets a certain condition
//includes method determines whether an array includes a certain values and return true or false as appropriate
//indexof method returns the first index at which a given element can be found in an array, it returns -1 if the element does not exist

//array.filter
syntax: let newArray = array.filter(callback);
const array = [9,20,3,40,5];
const greaterThanTen = array.filter(element => element >10);
console.log(greaterThanTen);

(2) [20, 40]
undefined

//array.find() first element that meets the condition

//syntax: let element =array.find(callback);

let i =[1,3,4,5,22,33,25,1,8,0];
let p =i.find(element=> element <5);
console.log(p);
VM8121:5 1
undefined
//Array.find
//syntax: let element =array.find(callback);
let i =[1,3,4,5,22,33,25,1,8,0];
let p =i.find(element=> element >5);
console.log(p);
VM8131:5 22

//let a =['hyd','ind','rus','chin'];
let b=a.find(element=> element ='ind');
console.log(b);
VM8817:3 hyd
undefined
let i =[1,2,4,0,6,5,9];
let p=i.find(element=> element>6);
console.log(p);
VM9033:3 9

//includes
//ARRAY INCLUDES whether an array includes a certain value and return true or false
let i = [2,3,4,7,8,9];
let p=i.includes(8);
console.log(p);
VM9985:4 true
undefined
//ARRAY INCLUDES whether an array includes a certain value and return true or false
let i = [2,3,4,7,8,9];
let p=i.includes(10);
console.log(p);
VM10009:4 false

//ARRAY INCLUDES whether an array includes a certain value and return true or false
const includesValue = array.includes(valueToFind, fromIndex)
let m = ['sam','krish','some'];
let s=m.includes('krish');
console.log(s);
VM10271:4 true
undefined
//ARRAY INCLUDES whether an array includes a certain value and return true or false
let m = ['sam','krish','some'];
let s=m.includes('ra');
console.log(s);
VM10294:4 false

//
//Array.indexOf() return the first index at which a given element can be found in an array. it returns -1 if the element does not exist in the array
let p =[1,34,5,3,455,34,6];
let n = p.indexOf(34);
console.log(n);
VM10834:4 1
undefined
//Array.indexOf() return the first index at which a given element can be found in an array. it returns -1 if the element does not exist in the array
let p =[1,34,5,3,455,34,6];
let n = p.indexOf(455);
console.log(n);
VM10869:4 4

let city = [1,2,2,4,5,6,6];
city[7]='sam';
console.log(city);

let num=[1,2,3,4,5,6];
typeof num;
'object'

let name = ['krish','tom','JEN',1,3,56];
console.log(name);
console.log(name.indexOf('tom'));
console.log(name.lastIndexOf('some'));
console.log(name.includes('krish'));
console.log(name.includes('some'));
VM5521:2 (6) ['krish', 'tom', 'JEN', 1, 3, 56]
VM5521:3 1
VM5521:4 -1
VM5521:5 true
VM5521:6 false

//objects in arrays
let courses = [
    {id:1, name:'maths'},
     {id:2, name:'physics'},
     {id:3, name:'chemistry'},
     {id:4, name:'Biology'},
     {id:5, name:'english'},
     {id:1, name:'sanskrit'},
    ];
console.log(courses);
console.log(courses[1]);
VM6175:9 (6) [{…}, {…}, {…}, {…}, {…}, {…}]
VM6175:10 {id: 2, name: 'physics'}

//arrays.map
//Arrays map
const numbers=[1,2,3,4,5,6];
const filtered =numbers.filter(n=>n>=0);
const items=filtered.map(n=>'<li>'+n+'</li>');
console.log(items);
VM6904:5 
(6) ['<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>', '<li>5</li>', '<li>6</li>']
0: "<li>1</li>"
1: "<li>2</li>"
2: "<li>3</li>"
3: "<li>4</li>"
4: "<li>5</li>"
5: "<li>6</li>"
length: 6
[[Prototype]]: Array(0)

















--------------------------------------------------------
Functions

function declaration, function expression, anonymous function
callback functions,arrow function

function declaration
function place() {
    console.log("enter");
}
console.log(place);
VM12570:4 ƒ place() {
    console.log("enter");
}
undefined
console.log(place());

VM12570:2 enter
VM12710:1 undefined
undefined
place();
VM12570:2 enter

functions continues
function test() {
    console.log("hello world");
}
test();
VM357:2 hello world
undefined
console.log(test);
VM425:1 ƒ test() {
    console.log("hello world");
}
undefined
console.log(test());
VM357:2 hello world

function mul(a,b){
    return a*b;
}
mul();
NaN

function mul(a,b){
    return a*b;
}
console.log(mul(2,3));
VM414:4 6
undefined

mul;
ƒ mul(a,b){
    return a*b;
}

mul();
NaN

console.log(mul(444,55));
VM577:1 24420
undefined

let sam=mul(23,54);
console.log(sam);
VM720:2 1242
undefined

function test2(num1, num3) { //parameters
    return num1+num3;
}

let sum1 =test2(3,4);//arguments
console.log(sum1);
VM1068:6 7
undefined

test2(122,345);
467

console.log(sum1);
VM1320:1 7
undefined

console.log(test2(23,34));
VM1441:1 57
undefined

console.log(test2);
VM1516:1 ƒ test2(num1, num3) { //parameters
    return num1+num3;
}
undefined

console.log(test2());
VM1598:1 NaN
undefined

//Arrow functions

























































































































































































