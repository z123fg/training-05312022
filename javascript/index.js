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

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    //   walk() {
    //     console.log(this.name + ' is walking ');
    //   }
  }
  
  Person.prototype.walk = function () {
    console.log(this.name + ' is walking ');
  };
  
  let p = new Person('xin', 1);
  //instance method
  // p.walk = function () {
  //   console.log(this.name + ' is walking ');
  // };
  // console.log(p);
  p.walk();
  
  let newP = new Person('li', 2);
  // newP.walk = p.walk;
  newP.walk();
  
  console.log(p.__proto__ === Person.prototype);