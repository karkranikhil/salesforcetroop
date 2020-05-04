null == null
false == ""
false == 0

// global scope
var name ="salesforce"
if(5>3){
    var name ="troop"
}
console.log(name)



//hositing
console.log(age)
var age ="23"

// let 

let project ="JS in salesforce"
if(5>3){
    let project ="JS in lwc"
}
console.log(project)

//const 
if(5>3){
    const greeting ="JS in lwc"
}
console.log(greeting)

// Before arrow function
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }, 1000);
  }
};

// bind
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};

//arrow
// ES6
var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

// Avoid push, pop and splice
var x ={name:"nikhil"}
var z = []
z.push(x)
z
x.name="salesforcetroop"
z

// splice method 
var x = [1,2,3,4,5]
var z = x.splice(1,2) // // start at index 1 and remove 2 elements
z
x

// slice method 
var x = [1,2,3,4,5]
var z = x.slice(1,3) // start at index 1 and remove all before index 3
z
x


// SPread operator
1. expanding array
let greet = ['Hello', 'World'];
console.log(greet); // Without spread operator
console.log(...greet); // Using spread operator

2. expanding string
let greetings = "hello";
let chars = [...greetings];
console.log(chars);

3. Combining array
let arr1 = ["Salesforce", "troop"]
let arr2 = ["Nikhil"]
let arr3 = [...arr1, ...arr2]

4.  Combining Objects
let obj1 = {"name":"Salesforce","age":23}
let obj2 = {"name":"troop","age":21}
let obj3 = {...obj1, ...obj2}

// Destructuring

let dest = ["Salesforce", "troop"]

let [firstName1, surname1] = dest;
console.log(firstName1)
console.log(surname1)

/// des of obj
let options = {
  title: "Salesforce troop",
  age: 23,
  type: "CRM"
};
let {title, age, type} = options;
console.log(title)

// string interpolation
var name = "Salesforce Troop";
console.log('Hello, ${name}!');

// expression
var a = 10;
var b = 10;
console.log(`The sum of ${a} and ${b} is ${a+b} `);


// export import

//export member individually
// export individually
export function add(a,b) {
  console.log(a+b);
}
export function minus(a,b) {
  console.log(a-b);
}

// export together
function add(a,b) {
  console.log(a+b);
}
function minus(a,b) {
  console.log(a-b);
}
export {add, minus}

// export with alias
function add1(a,b) {
  console.log(a+b);
}
function minus1(a,b) {
  console.log(a-b);
}
export {add1 as add, minus1 as minus}

// export with default
export default function multiply(a,b) {
  console.log(a*b);
}


 //IN UI
import {add, minus} from './utils.js'
import * as UTIL from './utils.js'
import multiply from './utils.js'

 //    add(5,5)
//  minus(10,2)
// multiply(5,5)


===================
Aysnc operation 

console.log("1")
setTimeout(()=>{
console.log("2")
}, 5000)
console.log("3")

promise to resque

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
promise.then((result)=>{
    console.log(result)
    console.log("2")
})


=========================
//async

async function abc() {
  return 1;
}

abc().then(alert); // 1

=========================

//document.querySelector(".navbar-dropdown__item").style.fontSize="30px"
//document.querySelectorAll(".navbar-dropdown__item").style.fontSize="30px"

this.template.querySelector('div').style.fontSize="30px"

=============================
async function getUser(name) 
{
  let response = await fetch(`https://api.github.com/users/karkranikhil`);
  let data = await response.json()
  console.log(data);
}
getUser()


================Array helper =============
let details =[{"name":"Salesforce", "age":10}, {"name":"troop", "age":20}, {"name":"troop", "age":18}]
let arr =[]
details.forEach(item=>{
    if(item.age>=18){
        arr = [...arr, {...item}]
    }
})

//map
details.map(item=>item.age>18? {...item, "name":"hwllo"}:{...item})


//find
let findExample = ["Salesforce","troop","Nikhil"]
someExample.find(item=>item === "troop")

//some 
let someExample = ["Salesforce","troop","Nikhil"]
someExample.some(name => name.length > 4)


//every 

let everyExample = ["Salesforce","troop","Nikhil"]
everyExample.every(name => name.length > 4)



//reduce
let numbers = [1,2,3,4,5]
let sum = 0

const total = numbers.reduce((accumulator, item) => {
  return accumulator + item;
}, sum)