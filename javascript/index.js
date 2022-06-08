//number, boolean, string, null, undefined, symbol, bigint ===> primitive type data
// console.log(typeof 1); //number
// console.log(typeof 'hello'); //string
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof true); //boolean

// Pass by value vs. pass by reference
// var a = 5;
// function foo(input) {
//   input = 6;
//   console.log(input); //6
// }

// foo(a);
// console.log(a); //5

// var b = 1;
// var c = b;
// b = 2;
// console.log('b: ', b); //2
// console.log('c: ', c); //1

// Coersion
// var result = true + false;
// console.log(result);
// '==' vs. '==='
// console.log('1' == 1); //true
// console.log('1' === 1); //false

//Truthy and falsy
// Falsy values in JS
// false, 0, '', null, undefined, NaN, docuemnt.all ===> falsy values
// console.log(!false);
// console.log(!0);
// console.log(!'');
// console.log(!null);
// console.log(!document.all);

// let obj = {};
// // console.log(obj);
// let obj2 = Object.create({});
// console.log('Obj2: ', obj2); //plain objects

// class classObj {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let myObj = new classObj('Xin');
// console.log(myObj);

// function foo() {}
// console.dir(foo);

// let arr = [1, 2];
// console.log(arr);

// var obj = { name: 'Xin' };
// function foo(input) {
//   input.name = 'Li';
//   console.log(input); //Li
// }
// foo(obj);
// console.log(obj); //Xin?Li?

//var, let, const
//scope

// function foo() {
//   console.log(a); //5?
//   if (true) {
//     var a = 5;
//   }
//   console.log(a); //5?
// }
// foo();

// var a = 5;
// function foo() {
//   console.log(a); //5
//   if (true) {
//     var a = 3; //function scope
//   }
//   console.log(a); //3
// }
// foo();

// function foo() {
//   //   console.log(a);
//   if (true) {
//     const a = 5; //block scope
//   }
//   console.log(a);
// }
// foo();
// undefined vs not defined

// const obj = { name: 'xin' };
// obj.name = 'li';
// console.log(obj);
// obj = { name: 'xin' };

//hoisting
// var: only declaration can be hoisted, initialization won't
//let, const: temporal dead zone
// function hoisting: normal functions: both declaration and initialization will be hoisted
//Exception: function stored in a variable; arrow function

// foo();
// let foo = () => {
//   console.log('foo');
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let p = new Person('xin', 1);
// console.log('Class', p);

// function FuncPerson(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let funcP = FuncPerson('xin', 1);
// console.log('Function', funcP);

// function Person(name, age) {
//   let obj = {};
//   obj.name = name;
//   obj.age = age;
//   //dunder proto
//   obj.__proto__.constructor = Person;
//   return obj;
// }

// let p = Person('xin', 1);
// console.log('Without new keyword', p);

//__proto__: the actual obj that is used in the look up chain to resolve methods
//prototype: the object that is used to build __proto__ when you create an obj with the new keyword

//instance method vs. class method

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //   walk() {
  //     console.log(this.name + ' is walking ');
  //   }
}
<<<<<<< HEAD
Person.prototype.walk = function () {
  console.log(this.name + ' is walking ');
};
=======

Person.prototype.walk = function () {
  console.log(this.name + ' is walking ');
};

>>>>>>> 94b9d6a444d3b129bf94eeb2c9539ba27473dd0c
let p = new Person('xin', 1);
console.log ("typeof", typeof p);
//instance method
// p.walk = function () {
//   console.log(this.name + ' is walking ');
// };
// console.log(p);
p.walk();
<<<<<<< HEAD
let newP = new Person('li', 2);
// newP.walk = p.walk;
newP.walk();
=======

let newP = new Person('li', 2);
// newP.walk = p.walk;
newP.walk();

>>>>>>> 94b9d6a444d3b129bf94eeb2c9539ba27473dd0c
console.log(p.__proto__ === Person.prototype); */



// const person = new Person("adam", 18);

// const person1 = {name:"adam", age:18};

// //class keyword will enable the instance object of inheriting method from the prototype of the class
// console.log(person, person1);

// //instance method, prototype method

// /* person.walk();//1.adam is walking, 2. error
// person1.walk();//error */

// person.walk = function(){
//   console.log(`${this.name} is walking!`);
// }

// person1.walk = function(){
//   console.log(`${this.name} is walking!`);
// }

// person.walk();//adam is walking
// person1.walk();//adam is walking

// const newPerson = new Person("jane",20);

// /* newPerson.walk();//error */
// //es5 es6, ecmascript

// function Person1(name, age){
//   this.name = name;
//   this.age = age;
// }

// const person2 = new Person1("adam",18);

// //person2.walk();//error


// /* Person1.prototype.walk = function(){
//   console.log(`${this.name} is walking!`);
// } */



// person2.__proto__.walk = function(){
//   console.log(`${this.name} is walking!`);
// }
// person2.walk();//work


//prototype chain

/* class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  walk(){
    console.log(`${this.name} is walking!`);//prototype method
  }
}
<<<<<<< HEAD
const person = new Person("adam",18);
person.walk();
=======

const person = new Person("adam",18);
person.walk();

>>>>>>> 94b9d6a444d3b129bf94eeb2c9539ba27473dd0c
class Employee extends Person{
    constructor(name,age,company){
      super(name, age);
      this.company = company;
    }
<<<<<<< HEAD
    walk(){
      console.log(`${this.name} is walking!!!`);//prototype method
    }
=======

    walk(){
      console.log(`${this.name} is walking!!!`);//prototype method
    }

>>>>>>> 94b9d6a444d3b129bf94eeb2c9539ba27473dd0c
    work(){
      console.log(`${this.name} is working!!!`);//prototype method
    }
}
<<<<<<< HEAD
const employee = new Employee("john",19,"antra");
employee.walk();//!!!
employee.work();
=======

const employee = new Employee("john",19,"antra");
employee.walk();//!!!
employee.work();


>>>>>>> 94b9d6a444d3b129bf94eeb2c9539ba27473dd0c
person.work();//error */


// getter setter function
//private field

// class Person {
//   #name
//   constructor(name, age) {
//     this.#name = name;
//     this.age = age;
//   }
//   get name() {
//     console.log("getter function for name")
//     return this.#name;
//   }

//   set name(newName) {
//     console.log("setter function for name")
//     this.#name = newName;
//   }
//   walk() {
//     console.log(`${this.name} is walking!!!`);
//   }
//   static walk() {
//     console.log("walking!")
//   }

// }

// const person = new Person("adam",18);

// //console.log(person.#name,person.age);

// // person.age = 19;

// // console.log(person.age);

// // console.log(person.name);

// // person.name = "jane";

// // console.log(person);

// person.walk();

// Person.walk();


// const obj = {
//   name:"adam",
//   walk:function(){
//     console.log(`${this.name} is walking!!!`);
//   }
// }

// obj.walk();//adam is walking!!!

// const obj1 = {
//   name:"john",
//   walk:obj.walk
// }

// obj1.walk();//john is walking!!!

// //this keyword from the method is from the obj that is invoking the method

//outter scope

// const obj = {
//   name: "adam",
//   walk: () => {
//     console.log(`${this.name} is walking!!!`);
//     console.log(this);
//   }
// }
// obj.walk();
// //javascript is ecmascript and webapi, nodejs is javascript and nodeapi


// //console.log(global); //node.api

// const obj1 = {
//   name: "adam",
//   walk: function () {
//     //
//     console.log(this.name)//

//     const helper = () => {
//       console.log(`${this.name} is walking!!!`);
//     }
//     helper();
//   }
// }

// //function scope, block scope

// obj1.walk();//adam is walking!!!


// //function keyword: this keyword is from the object that is calling the method
// //arrow function: this keyword is the same as the its outter scope

// //let const has block scope
// //var has function scope
// // const test = function (){
// //   //function scope
// //   if(true){
// //     //block scope
// //     let a = 1
// //   }
// //   console.log(a)

// // }

// // test();

// //array
// //for loop, map, for of, for in, forEach, filter,  while, do while

// const arr = [1, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i])
// }

// for (let i of arr) {
//   console.log(i);
// }

// var i = 0
// while (i < arr.length) {
//   console.log(i, arr[i]);
//   i++;
// }

// arr.forEach((value, key) => {
//   console.log(key, value)
// });


// console.log(arr.__proto__);
// console.log(Array.prototype);

//myForEach
//arr.myForEach(()=>{})

/* arr.myForEach(
  (value, key) => { console.log(key, value) }
); */

// const arr = [1, 2, 3];

// const result = arr.map((value) => value + 1);
// console.log("result", result)

// Array.prototype.myForEach = function (fn) {
//   //const arr = this;
//   for (let key = 0; key < this.length; key++) {
//     fn(this[key], key)
//   }
// }

// arr.myForEach((value, key) => {
//   console.log(key, value);
// });


// Array.prototype.myMap = function (fn) {
//   const resultArr = []
//   const arr = this;
//   for (let key = 0; key < this.length; key++) {
//     const newValue = fn(arr[key], key);
//     resultArr.push(newValue);
//   }
//   return resultArr;
// }


// const result1 = arr.myMap((value) => value + 1);
// console.log("result", result1);

// // const sum = arr.reduce((acc, cur)=>{
// //   return acc + cur;
// // },0);
// // console.log(sum);

// Array.prototype.myReduce = function (fn, init) {
//   let result = init;
//   for (let key = 0; key < this.length; key++) {
//     result = fn(result, this[key])
//   }
//   return result;
// }

// const sum = arr.myReduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log(sum);

// // loop object

// const obj = { a: 1, b: 2 };

// Object.keys(obj).forEach((key) => {
//   console.log(key, obj[key])
// })

// Object.values(obj).forEach((value) => {
//   console.log(value)
// })
// console.log(Object.entries(obj));

// Object.entries(obj).forEach((entry) => {
//   console.log(entry[0], entry[1])
// })

// for (let key in obj) {
//   console.log(key, obj[key])
// }


// Object.myEntries = function (obj) {
//   const result = [];
//   for (let key in obj) {
//     result.push([key, obj[key]])
//   }
//   return result;
// }

// Object.myEntries(obj).forEach((entry) => {
//   console.log(entry[0], entry[1])
// });

// const b = "a";

// const obj1 = {
//   a: 1,
//   b: 2
// }

// console.log(obj1.b);//2
// console.log(obj1[b]);//1
//bracket notation 
//dot notation

//closure, 
//oop: object oriented programming
//abstraction, inheritance, ploymorphism,encapsulation

//inheritance: prototype chain
//encapsulation: closure

/* function foo (){
  const a =1;
  return;
}
foo(); */

// closure
// function foo() {
//   let a = 0;
//   const increment = () => {
//     a = a+1;
//     console.log(a);
//   }
//   return {
//     a: a,
//     increment: increment
//   }
// }

// function foo1() {
//   let a = 0;
//   const increment = () => {
//     a = a+1;
//     console.log(a);
//   }
//   return {
//     a: a,
//     increment: increment
//   }
// }

// const obj2 = foo();
// obj2.increment();
// obj2.increment();


//iife, immediately invoked function expression

// const obj2 = (function () {
//   let b = 10;
//   let a = 0;
//   const increment = () => {
//     a = a+1;
//     console.log(a);
//   }
//   return {
//     a: a,
//     b:b,
//     increment: increment
//   }
// })();

// obj2.increment();
// obj2.increment();
// console.dir(obj2);

//function currying, curried function
/* function sum(a,b,c){
  console.log(a+b+c)
}
sum(1);// 1 + undefined + undefined */

// function sum(a){
//   return function(b){
//     return function(c){
//       console.log(a+b+c);
//     }
//   }
// }
// //higher order function
// sum(1)(2)(3);
console.log(typeof []);//"object"

// console.log(typeof typeof []);//"string"

// console.log(typeof {});//"object"

//non primitive data, object
// store by reference

// const obj = {name:"adam"};
// const obj1 = obj;
// console.log(obj === obj1); //true;

// const obj2 = {name:"adam"};

// console.log(obj === obj2); //false

// //ES6: class, const, let, arrow function, spread, rest, detructuring, promise, fetch syntax sugar

// //copy of non-primitive data, copy the property of old object to a new object with new reference
// const obj3 = Object.assign({},obj);
// console.log("obj3",obj3);

// console.log(obj3 === obj);//false


// console.log(obj1==obj2);//true

// console.log(1 == "1");//true
// console.log([] == 0);//

//spread operator
// const obj = {name:"adam", age:18};

// const obj1 = {...obj};

// console.log(obj1 === obj);//false
// console.log(obj1 == obj);//false

// const arr = [1,2,3];
// const arr1 = [...arr];
// console.log(arr === arr1);//false

// const obj2 = {name:"adam", nested:{a:1}};

// const obj3 = {...obj2};

// console.log(obj2 === obj3);//false

// console.log(obj2.nested === obj3.nested);//true, shallow copy

// const arr2 = [1,2,3,{name:"adam"}];

// const arr3 = [...arr2];

// console.log(arr2 === arr3);//false

// console.log(arr2[3] === arr3[3]); //true

// const obj = {name:"adam",age:18};

// const obj1 = {name:"jane",company:"antra"}

// const obj2 = {...obj}//{name:"adam",age:18}

// const obj3 = { age:19, ...obj,...obj1, name:"john"};
// console.log(obj3);//{name:"john",age:18,company:"antra"};

// const arr = [1,2,3];
// const arr1 = [4,5,6];
// const arr2 = [...arr,...arr1];//[1,2,3,4,5,6]
// const arr3 = [...arr1, ...arr]; //[4,5,6,1,2,3]


// //rest operator

// function foo (a,b){
//   console.log(a,b);
// }

// foo(1,2,3,4,5);

// function foo1(...rest){
//   console.log(rest)
// }

// foo1(1,2,3,4,5);

// function foo2(){
//   console.log(arguments)
// }
// foo2(1,2,3,4);

//destructuring

// const obj = {
//   name: "adam",
//   age: 18,
//   nested1: {
//     nested2: [
//       { value: 1,value1:2 }
//     ]
//   }
// };
// const value = obj.nested1.nested2[0].value;
// const value1 = obj.nested1.nested2[0].value1;

// const obj = { name: "adam", age: 18 };

// const { name, age } = obj;
// console.log(name, age);

// const arr = [1, 2, 3, 4];
// console.log(arr[2]);
// const [, no2, , no4] = arr;
// console.log(no2, no4);



// const obj = {
//   name: "adam",
//   age: 18,
//   nested1: {
//     nested2: [
//       { value: 1, value1: 2 },
//       [1, 2, 3]//read 3
//     ],
//     nested3: {
//       value3: 3//read value3
//     }
//   }
// };
// // const value =obj.nested1.nested2[0].value;
// // const value1 = obj.nested1.nested2[0].value1;

// const { nested1: { nested2: [{ value, value1 }] } } = obj;

// console.log(value, value1)

// const {
//    nested1:
//     { 
//       nested2: 
//       [, [, , no3]],
//       nested3:{value3}
//     } 
//   } = obj;

// console.log(no3,value3);

//destructure property into a new variable name, avoiding naming conflict
// const name = "john";

// const obj = {name:"adam", age:18};

// const {name:newName, age} = obj;

// console.log(newName,name);//adam john

//set default value

// const obj = {name:"adam", age:18,company:"microsoft"};

// const {company="antra"} = obj;

// console.log(company);


// asynchronous programming

//javascript single-thread language, it cannot do two things at the same time
//synchronous asynchronous

//event loop
//callstack, message queue, webapi(is not part of javascript engine)

//browser: javascript interpreter(javascript engine, chrome:V8 engine),web.api

// console.log(1);
// //web api
// setTimeout(
//   () => {
//     console.log(2);
//   },
// 2000);

// console.log(3);

// //1,3,2


// console.log(1);

// setTimeout(()=>{
//   console.log(2)
// },2000);

// console.log(3);

/* while(true){ //infinite loop

} //1,3 */

// console.log(1);

// setTimeout(()=>{
//   console.log(2)
// },0);

// console.log(3);

// //123
// //132

// console.log(1);

// setTimeout(() => {
//   console.log(2);
//   setTimeout(() => {
//     console.log(3)
//   }, 1000)
// }, 2000);

// console.log(4);
//1 4 --2s-- 2 --1s-- 3

// console.log(1);
// console.log(performance.now());

// setTimeout(()=>{
//   console.log(performance.now());
//   console.log(2)
// },0);

// console.log(3);

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// }

// var i = 0;
// for (; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// }

// var i = 0;
// setTimeout(() => {
//   console.log(i)
// }, i * 1000);
// i++;
// setTimeout(() => {
//   console.log(i)
// }, i * 1000);
// i++
// setTimeout(() => {
//   console.log(i)
// }, i * 1000);
// i++
// setTimeout(() => {
//   console.log(i)
// }, i * 1000);
// i++
// setTimeout(() => {
//   console.log(i)
// }, i * 1000);
// i++;


// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, i * 1000)
// };
// //0,1,2,3,4

// for (var i = 0; i < 5; i++) {
//   let ii = i;
//   setTimeout(() => {

//     console.log(ii)
//   }, ii * 1000)
// };


//callback function


// const doSomethingWithDelay = (callback,delay) => {
//   setTimeout(callback,delay)
// }


// doSomethingWithDelay(
//   ()=>{
//     console.log(1);
//     doSomethingWithDelay(
//       ()=>{
//         console.log(2);
//         doSomethingWithDelay(
//           ()=>{
//             console.log(3);
//             doSomethingWithDelay(
//               ()=>{
//                 console.log(4);
//                 doSomethingWithDelay(
//                   ()=>{
//                     console.log("done",5);
//                   },
//                   1000
//                 )
//               },
//               1000
//             )
//           },
//           1000
//         )
//       },
//       1000
//     )
//   },
//   1000
// );



//promise, es6, flatten the async code

//xmlhttprequest(xhr):es5, fetch:es6,

//callback hell


//do one request, use the response of 1st request as the 2n request,...
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       const json = xhttp.response;
       console.log(json);
    }
};

xhttp.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');

xhttp.send();



























































































