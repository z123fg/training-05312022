// number, bookean, string, null, undefined, symbol, bigint ===> primitive type data
// console.log(typeof 1);
// console.log(typeof 'hello');
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);

//*  Pass by value vs. pass by reference *//
// var a = 5
// function foo(input) {
//   input = 6
//   console.log(input);
// }

// foo(a)
// console.log(a);

// let b = 1
// let c = b
// b = 2

//* Coersion *//
// let result = true + false
// console.log(result);
// '==' VS '==='
// console.log('1' == 1); // true
// console.log('1' === 1); // false

//* Truthy & Falsy *//
// Falsy values in JS
// false, 0, '', null, undefined, NaN, document.all ===> falsy values

//* Objects *//
// let obj = {}
// console.log(obj);
// let obj2 = Object.create({})
// console.log('obj2:', Obj2); //plain objects

// class classObj{
//   constructor(name) {
//     this.name = name
//   }
// }

// let myObj = new classObj("John")
// console.log(myObj);


// function foo() { }
// console.dir(foo);

// let arr = [1, 2]
// console.log(arr);

// let obj = { name: 'J' }
// function foo(input) {
//   input.name = 'L'
//   console.log(input);
// }
// foo(obj)
// console.log(obj);

//* Var, Let, Const *//
// Scope

// var a = 5
// function foo() {
//   console.log(a);
//   if (true) {
//     var a = 3 // function scope
//   }
//   console.log(a);
// }
// foo()

// function foo() {
//   console.log(a);
//   if (true) {
//     let a = 5 // block scope
//   }
//   console.log(a);
// }
// foo()

// const obj = { name : 'Xin'}

//* Hoisting *//
// var: only declaration can be hoisted, initialzation won't
// let, const: termporal dead zone 
// functions hoisting : normal functions : both declaration & initalization will be hoisted
// Exception: function stored in a variable; arrow function

// foo()
// var foo = () => {
//   console.log('foo');
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }
// }

// let p = new Person('J', 1)
// console.log(p);

// function FuncPerson(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let funcP = new FuncPerson('J', 1)
// console.log('Function', funcP); 

// __proto__: the actual obj that is used in the look up chain to resolve methods
//prototype: the object that is used to build __proto__ when you create an obj with the new keyword

//* instance method vs class method *//

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age
//   }
//   walk() {
//     console.log(this.name + ' is walking');
//   }
// }

// let p = new Person('J', 1)
// // p.walk = function () {
// //   console.log(this.name + ' is walking');
// // }
// // console.log(p);
// p.walk()

// let newP = new Person('li', 2)
// // newP.walk = p.walk
// newP.walk()

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
const person = new Person("adam",18);
person.walk();
class Employee extends Person{
    constructor(name,age,company){
      super(name, age);
      this.company = company;
    }
    walk(){
      console.log(`${this.name} is walking!!!`);//prototype method
    }
    work(){
      console.log(`${this.name} is working!!!`);//prototype method
    }
}
const employee = new Employee("john",19,"antra");
employee.walk();//!!!
employee.work();
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
// function sum(a, b, c) {
//   console.log(a+b+c);
// }

// sum(1)// 1 + undefined + undefined 

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a+b+c);
//     }
//   }
// }
// //higher order function 
// sum(1)(2)(3)

// console.log(typeof []);

// const obj = { name: "adam" } 
// const obj1 = obj
// console.log(obj === obj1);

// const obj2 = { name: "adam" } //true

// console.log(obj === obj2); //false
//ES6: Class,  const, let, arrow function, spread, rest, destructing, syntax sugar
//copy of non-primitive data, copy the property of old object to a new object with new reference
// const obj3 = object.assign({}, obj)
// console.log("obj3", obj3);

//Spread operator 
// const Obj = { name: "John", age: 18 }
// const obj1 = {...Obj}





