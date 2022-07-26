//type annotation
//type alias



/* 
  number
  string
  object
  boolean
  array tuple
  null void undefined
  any unknown
  never
*/

// let num: number = 1234;
// let str:string = "123";
// let boo:boolean = true;
// let arr: string[] = ["12","34"]; //number[], boolean[]
// //arr = ["123",123];
// let tup: [string, number]= ["123",123];
// //tup = [123,123]
// let obj: object = function(){}



// let a:null = null;
// let b:undefined = undefined; 
// let aa;

// let bb: any;

// let uk:unknown =123;
// uk="123"

// const fun:()=>never = () => {
//   throw Error()

// }




//type alias, union type
type newType = number | string;

let a: newType;
a = 1;
a = "1";


//function type

type funType = (str: string, num: number) => boolean

const fun: funType = (str, num) => {
  return false
}

const fun1: funType = function (str, num) {
  return true
}

const fun2: (str: string, num: number) => boolean = (str, num) => {
  return true
}

const fun3 = function (str: string, num: number): boolean {
  return true
}


//type inference
let aa = 1;//typescript infers the type of a variable from the initialization
/* 
  let a:number;
  a = 1
*/
//aa ="1"

let arr = ["1", 1, true];
/* 
  let arr:(string | number | boolean)[]; //best common
  arr = ["1",1,true];
*/

//literal type
// let bb:"hello world";
// bb="hello world";
let bb: { name: "adam" } | []
bb = []

//object
//let obj:object;// non-primitive'
//type objType = {name:string, age?:number, properties:string[]}

interface IPerson {
  name: string;
  age?: number;
  properties: string[];
  walk: () => void;
}

let obj: IPerson;

obj = {
  name: "adam",
  age: 18,
  properties: ["car", "house"],
  walk: function () { console.log(this.name, "is walking") }
}

interface IEmployee extends IPerson{
  salary?:number
}

let employee:IEmployee = {
  name:"adam",
  age:18,
  walk:function(){
    console.log(this.name, "is walking")
  },
  properties:[]
}

//abstract class, implements


//type assertion, type casting

type sizeType = "small" | "medium" | "large"

const fun4:(size:sizeType)=>void = (size) => {
  console.log(size);
}

let size = "small";

fun4(size as sizeType);
fun4(<sizeType>size);

//generic type, pass another type as argument for some type
type funType1<T> = (str:T) => boolean 

const fun5:funType1<string> = (arg) => true

fun5("123")

interface IEmployee1<T> {
  name:"adam",
  age:T,
}


const employee1:IEmployee1<string> = {
  name:"adam",
  age:"18"
}


const fun6:(arg:number) => void = (arg) =>{
  arg.toFixed();
}
















