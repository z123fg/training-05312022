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

- `XMLHttpRequest()`

```
const httpRequest = function(url, method, cb, body){
    const client = new XMLHttpRequest();
    let stringifiedBody;
    client.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            const json = client.response;
            cb(json);
        }
    };
    if body && stringnifiedBody = JSON.stringify(body)
    // first argument is method
    client.open(method, url);
    client.setRequestHeader('Content-Type", "application/json;charset=UTF-8");
    client.send(stringinifiedBody);
}

httpRequest('url', 'GET', (json) => {
    console.log("response: ", json);
})
```

### `fetch()`

- ES6 method
- GET method

```
fetch('url')
.then(res => return res.json())
.then((data) => {
    console.log(data);
    return data;
})
.then((filteredData) => {
    ...
})
.catch(err => console.log(err))
```

- Other method

```
fetch ('url', {
    method: '...',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        ...
    },
    body: JSON.stringify(...)
});
```

- Using `async` `await` way:

```
const fetchFn = async (url, data) => {
    const fetchResult = await fetch(url, {
        body: JSON.stringify(data)
    })
    return fetchResult.json();
}
```

### Promise

```
new Promise((resolve, reject) => {
    resolve('result');
    reject('err');
})
.then((result) => {console.log(result)})
.catch((err) => {console.log("error caught: ", err)})
<!-- .finally(()=>{...}) -->
```

- anything in `reject` `resolve` is async
- `resolve` will `return` the value passed in it.
- `reject` will `return` the value passed in it as `error`.
- `finally` to end a Promise

How many arguments does Promise take?

- Promise takes 1 callback function as argument.
How many argument does the callback of Promise take, what are the purpose of those?

- The callback of Promise takes 2 arguments: `resolve` and `reject`. `resolve` will return value passed in it, `reject` will return value passed in it as error.
How many argument does then function take? what are those?

- `.then()` function takes up to 2 arguments: the first argument is callback when promise **resolved** and the 2nd argument is callback promise **rejected**.
How many argument does the callback function of then function take? what are those?

- callback function of `.then()` function takes 1 argument in both **rejected** or **resolved** promise.
What is the return value of the callback function of then function for?
- To return data as a form of promise either rejected or resolved.
Where can you put await? where can you put async?

- `async` in front of function declaration and `await` in front of a promise
Can you put await in front of non-async function? Can you put await inside non-async function?

- Putting `await` in front of non-async function will force the promise to be resolved before the code is executed further
- Putting `await` inside non-async function will throw error of using it inside non-async function
What does async function return?

- Async function always returns a promise.

### 06/22/2022

#### `jQuery`

- **CDN**: Content Delivery Network, a system that let server delivers content to the client
- **Stackpath** is the CDN `jQuery` using
- **DOM Traversal and Manipulation**: `$("button.continue").html("next...")` find button with classname "continue" and replace inner html with "next..."
- **Event Handling**
- **Ajax**

### 06/23/2022

#### React

- React-boilerate:
  - `create react app`
  - Next.js
  - Gatsby
  - ...
- Difference between Library and Framework:
  - Library:
- JSX: is syntax sugar in React that helps rendering React.createElement function.  
- Syntax Sugar: spread operator, rest operator, destructuring, class
- Virtual Dom:
- Virtual Node:
- `react`: create virtual dom
- `react-dom`: render virtual dom into page and update actual dom
- `node` project: node powered workflow - `npm init`

1. What is Boilerplate?
   - boilerplate code are the sections of the code that have to be included in many places without or with, little alterations. A considerable amount of code needs to be written by the programmer for minor functionality; this part of the code is called boilerplate.
2. What is transpiler and babel? Why we need it?
   - Transpiler translates code from one version of language to different version of the same language while keeping the behaviour.
   - Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines
   - We need it to translate some hard to read code into easy to work with code.
3. What is bundler and webpack? Why we need it?
   - Bundler is a tool that bundles all the files in a project into 1 file that will be served to the client.
   - Webpack is bundler, and it helps reduce the size of the website when serving also decrease the loading time.
4. What is syntax sugar? Give some example
   - Syntax sugar is a term for syntax changes in computer programming which make it easier for humans to code. Spread operator is one popular example of syntax sugar.
5. What is JSX?
   - JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
   - JSX converts HTML tags into react elements.
   - JSX is a **syntax sugar** from react that react translate it into html.
6. What is virtual dom, virtual node, diffing algorothm?
    - Virtual dom is a shallow representation of UI elements as plain JavaScript objects. (real DOM has a lot more properties compare to virtual DOM)
    - Virtual node are node/element in a virtual dom created by react.
    - When a props is updated, react create new virtual DOM.
    - Diffing algorithms used to find the difference between current virtual DOM and previous virtual DOM to decide to update component accordingly.
7. What happen when you run npm run command, npx command?
   - `npm run` command will run files which are already installed in the node_module. `npx` will download the package and cache it globally so it can be executed.

### 06/24/2022

#### Webpack Plugins

1. `style-loader`: bundle css files
2. `css-loader`: inject css into javascript file
3. `["style-loader", "css-loader"]`

### 06/27/2022

#### React class component

1. Life Cycle Method
   1. Mounting Phase: happen once in the life cycle
      1. `constructor()`
      2. `render()`
      3. `componentDidmount()`
   2. Updating Phase
      1. `shouldComponentUpdate()`
      2. `render()`
      3. `componentDidUpdate()`
   3. Destroying Phase 
      1. `componentWillUnmount()`


--- 

1. What are the life cycle methods for react class component?
   - Mounting, Updating, and Unmounting.
2. Where are life cycle method from?
   - They are from `React.Component`
3. What is the difference of class of a component and instance of a component
   - An instance is what you refer to as this in the component class you write
   - The class of a component is blueprint or template which are stored in the memory class and used for creating an instance.
4. what is function.bind() function, what does it take and what it returns
   - The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value (otherwise `this` set as undefinied)
5. What does ‘this’ refer to in a function
   - It refers to the object that called the function
6. setState update state sync or async
   - `setState` is async
7. What does componentWillUnmount usually do
   - `componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()` .
8. When do diffing algorithm and reconciliation happen during the lifecycle of a component
   - Happens after `render()` and before `componentDidMount` `componentDidUpdate` because before render there is no virtualDom to compare.