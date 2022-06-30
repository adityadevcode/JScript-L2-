/*
Destructuring:it will allows us to pull single elements (array) or properties (objs)
and stored them in varibles
//we can extract data from arrays and objs and assign them to variables
Array:
const numbers = [1,2,3];
[num1, ,num3]=numbers;
console.log(num1, num3);
op: 1,3

//Basic array destructuring
let some = ['hi','bye','welcome'];
let [a,b]=some;
console.log(a);
console.log(b);

hi
bye

let ind = ['a','b','c','d','e'];
let [sum,,,,add]= ind;
console.log(sum);
console.log(add);
VM773:3 a
VM773:4 e

let ind = ['a','b','c','d','e'];
let [sum,add]= ind;
console.log(sum);
console.log(add);
VM804:3 a
VM804:4 b

//comma separator does the magic
//extract data from an array returned from a function

//destructuring assignment with functions
function getArray() {
    return ['a','b','c','d'];   array
}

getArray;
ƒ getArray() {
    return ['a','b','c','d'];
}

getArray();
(4) ['a', 'b', 'c', 'd']

function getArray1() {
    return ['a','b','c','d']; array
}
let[sample, coup]=getArray1();
console.log(sample);
console.log(coup);
VM1683:5 a
VM1683:6 b
undefined

function getArray1() {
    return ['a','b','c','d'];
}
let[sample,,, coup]=getArray1();
console.log(sample);
console.log(coup);
VM1697:5 a
VM1697:6 d
undefined

//swapping values using the destructuring assignment, swap the values of variables
let a =3;
let b =6;

[a,b]=[b,a];
console.log(a);
console.log(b);

VM2147:6 6
VM2147:7 3

////basic object destructuring
let details = {
    firstName:"sam",
    lastName:"tyler",
    age:23,
    place:"toronto",
    nationality:"can"
};
console.log(details);
VM2506:9 {firstName: 'sam', lastName: 'tyler', age: 23, place: 'toronto', nationality: 'can'}
undefined
//basic object destructuring
let details = {
    firstName:"sam",
    lastName:"tyler",
    age:23,
    place:"toronto",
    nationality:"can"
};
let {firstName,lastName,age,place,nationality}=details;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(place);
console.log(nationality);

VM3155:10 sam
VM3155:11 tyler
VM3155:12 23
VM3155:13 toronto
VM3155:14 can
undefined

////diff appraoch
let det = {
    firstName1:"sam",
    lastName1:"tyler",
    age1:23,
    place1:"toronto",
    nationality1:"can"
};

let firstName1,lastName1,age1,place1,nationality1;

({firstName1,lastName1,age1,place1,nationality1}=det);

console.log(firstName1);
console.log(lastName1);
console.log(age1);
console.log(place1);
console.log(nationality1);

VM3561:12 sam
VM3561:13 tyler
VM3561:14 23
VM3561:15 toronto
VM3561:16 can

//changing names and assigning diff names
let person = {
    name: "Sarah", 
    country: "Nigeria", 
    job: "Developer"
};

let {name: foo, job: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//"Developer"

//combing arrays with the objects
let person = {
    name:'sam',
    country:'ran',
    age:34,
    place:'kkk',
    friends:['a','b']
};

let {name:foo, friends:close} = person;
console.log(foo);
console.log(close);

sam
VM3589:11 (2) ['a', 'b']












