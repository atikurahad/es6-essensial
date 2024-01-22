// spreed operator

// let poor = ["abul","kabul","babul"];
// let rich = [...poor,"hasan","barek","bablu"];

// console.log(rich)

// --------------------------

// Rest Perameter

// function Calculator(...numbers){

// console.log(numbers)
// }
// Calculator(1,3,2,5,1)

//-------------------------

//Dynamic Function

// const name = function (userName){
//     return userName;
// }
// console.log(name("I am Dev"));

//VARIABLE HOISTING
//--------------
// name = "abdul";
// console.log(name)
// var name;

// Simple for lopp
// let i =0;
// for (let i = 0; i <= 500; i++) {
//     console.log(`${i} `)

// }

// FOR OF LOOP_____________

// let city = ['Dhaka','Rajshahi','Barishal','Tangail','Bogra'];

// for (const myCity of city) {
//     console.log(myCity)
// }

//OBJECT-----------

// let person ={name:"bill",eye:"yes",nose:"yes",hair:"black"};

//Nested Object

// let person = {
//   shirt: {
//     color: "black",
//     brand: "eleven",
//   },
//   dress: {
//     color: "White",
//     type: "cotton",
//   },
//   hair: {
//     color: "white",
//     size: "short",
//   },
// };
// console.log(person.dress.color);

// for in loop

// let person = {
//     shirt: {
//       color: "black",
//       brand: "eleven",
//     },
//     dress: {
//       color: "White",
//       type: "cotton",
//     },
//     hair: {
//       color: "white",
//       size: "short",
//     },
//   };

//   for (const gates of person) {
//     console.log(gates)
//   }

// Arrow function / Fat Arrow Function

// const myFunc = (greeting)=>{
// console.log(greeting)

// }
// myFunc("Hey, Good Morning")

// const myArrow = (...x)=>{

// console.log(x)}

// myArrow(2,4,6,3,6,32,0)

//ES6 Array
// const arr = [34, 55, 89, "hello", "good", 90];
// console.log(arr);
// const Arr = new Array(2, 8, 9, 6, 0, 85, 45);
// for (const item of Arr) {
//     console.log(item);

// }

// multidimensional array

// let one = [1, 6, 8, 5, 98, 80];
// let two = [543, 97, 344, 9, 34];
// let three = new Array(67, 65, 12, 99);
// const together = [one,two,three];
// console.log(together)

//Array De-Structuring

// const language = ["Bangla","Hindi","Urdu","Spanish","Arabic","French"]
// const [a,b,c,,d,v]= language
// console.log(a,b,c,d,v)

//ES6 Map ---> Map is group of data

// let myMap = new Map();
// myMap.set("key1", "Bangladesh");
// myMap.set("key2", "Bhutan");
// myMap.set("key3", "Nepal");
// myMap.set("key4", "Thailand");
// myMap.set("key5", "Burma");
// myMap.set("key6", "Pakistan");
// myMap.set("key7", "China");
// myMap.set("key8", "Korea");
// myMap.set("key9", "Maldiv");

//delete one by one----
// myMap.delete("key1")
// myMap.delete("key9")
//delete all --------
// myMap.clear()

//get value 
// const get = myMap.get("key9")
// console.log(get)
//has value ---
// myMap.has("key8")
// console.log(myMap.values());


// ES6 set -- 1,Set is collection of data 2, Set almost like array 3, Set does not contain any duplicates

// let demoSet = new Set([1,3,5,8])
// console.log(demoSet)

// let mySet = new Set();

// mySet.add("green")
// mySet.add("Blue")
// mySet.add("Black")
// mySet.add("11")
// mySet.add(33)

//  delete all data --
// mySet.clear()

//delete on by one --------
// mySet.delete("11")

// set size---
// console.log(mySet.size)

// search element  by using has
// if(mySet.has('Black')){
//     console.log("got it")
// } else return "no "


// console.log(mySet.values())