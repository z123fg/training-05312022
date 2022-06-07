```
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
};

let person = new Person("lam", 25);
```
- `__proto__` is the actual obj that is used in the look up chain to resovle methods
- `prototype` is the object that is used to build `__proto__` when creating an obj with the new keyword
- using `__proto__.constructor` allow creating new object without using  `new` keywords
```
function Person(name, age){
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.__proto__.constructor = Person;
  return obj;
};

let person = Person("lam", 25);
```
- Adding new  attribute to a defined class
```
person.walk = function(){
    console.log(this.name + ' is walking');```
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
};

let person = new Person("lam", 25);
```
- `__proto__` is the actual obj that is used in the look up chain to resovle methods
- `prototype` is the object that is used to build `__proto__` when creating an obj with the new keyword
- using `__proto__.constructor` allow creating new object without using  `new` keywords
```
function Person(name, age){
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.__proto__.constructor = Person;
  return obj;
};

let person = Person("lam", 25);
```
- Adding new  attribute to a defined class
```
person.walk = function(){
    console.log(this.name + ' is walking');
}
```
- Using this method allows to add new attribute for a specific object

- By using `prototype.function`, any new object created using this class will have `walk` method
```
Person.prototype.walk = function(){
    console.log(this.name + ' is walking');
};

let p = new Person("lam", 25);
```

- Using this method allows to add new attribute for a specific object

- By using `prototype.function`, any new object created using this class will have `walk` method
```
Person.prototype.walk = function(){
    console.log(this.name + ' is walking');
};

let p = new Person("lam", 25);
```

### Function Currying
- **Curried Function**
```
function sum(a,b,c){
    console.log(a+b+c)
}
sum(1); // NaN , because 1 + undefinied + undefinied
```

- **Higher Order Function**
```
function sum(a){
    return function(b){
        return function(c){
            console.log(a + b + c);
        }
    }
}
sum(1)(2)(3) // 6
```

- Non primitive data is considered Object in JS and stored ***by reference*** 
```
console.log(typeof []);         // object
console.log(typeof {});         // object
console.log(typeof typeof []);  // string
const obj = {name: "lam"};
const obj1 = obj;
const obj2 = {name: "lam"};
console.log(obj === obj1); // true
console.log(obj === obj2); // false, because obj2's reference is not the same w obj's refernce
```
- To copy an object:
  - Shallow copy: **First `{}` level copied**
  - Deep copy: Copy everything (`JSON` method)
```
const obj3 = Object.assign({}, obj);
const obj4 = {...obj};
const obj5 = JSON.parse(JSON.stringify(obj));
```
- To copy an array
```
const arr = [1,2,3];
const arr2= [...arr];
const arr3= arr.slice(0);
```
- `rest` operator
```
function foo(a,b){
    console.log(a,b);
}
foo(1,2,3,4,5,6); // (1,2)

function foo1(...rest){
    console.log(rest);
}
foo1(1,2,3,4,5,6); // 1,2,3,4,5,6
```
- Reserved names: `arguments`
```
function foo(arguments){
    // same w rest
}
```
- Destructing
  - First level
```
const obj = {name: "adam", age: "18", company: "antra}
const {name, age} = obj;
const example = [0,1,2,3,4,5,6];
console.log(name, age);
const {,at1,,,,atlast} = example;
console.log(at1, atlast); // 1,6
```
  - Nested Level
```
const {nested1:{nest2:[{value, value1},[,,value2]]}, {nested3:{value3}} } = obj;
console.log(value, value1, value2, value3);
```

- Assign new new to avoid conflict
```
const {name: newName; age:newAge} = obj;
console.log(newName, newAge, name); //
```
  - Default value 
```
const {company = "x"} = obj; // if the property not existed => company is set to "x"
```
### **Asynchronous Programming**
Javascript is single-thread language, it cannot do two things at the same time

```
console.log(1);
setTimeout(
    () => {
        console.log(2);
    },
    2000
)
console.log(3);
```
output:
```
1
3
...
2
```

**Event Loop**

<a href="https://www.webdevolution.com/blog/Javascript-Event-Loop-Explained">- Callstack, message queue, webapi</a>

```
for (var i = 0; i<5; i++){
    setTimeout(()=> {
        console.log(i);
    }, i*1000);
}
5 -> 5 -> 5 -> 5 -> 5
```

```
for (let i = 0; i<5; i++){
    setTimeout(()=> {
        console.log(i);
    }, i*1000);
}
0 -> 1 -> 2 -> 3 -> 4
```

```
var i = 0;
setTimeout(()=> {
    console.log(i);
}, i*1000);
i++;
setTimeout(()=> {
    console.log(i);
}, i*1000);
i++;
setTimeout(()=> {
    console.log(i);
}, i*1000);
i++;
setTimeout(()=> {
    console.log(i);
}, i*1000);
i++;
setTimeout(()=> {
    console.log(i);
}, i*1000);
i++;

// 4 returned immediately 
// i++ get called and executed first then console.log(i) with the new i value added to call stack
// setTimeout threw into webapi for running timer w i value
```

### `XMLhttpRequest()`

- Provided by ***global window object***
