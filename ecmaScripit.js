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
