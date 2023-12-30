// Primitive Datatype
/*7 types :
 String, Number , Boolean , null ,undefined ,Symbol, BigInt
 */
const score = 100 //Number
const scorevalue =100.3 //Number 

const outsideTemp = null
const isLoggedIn = false  // Boolean
 // null
let userEmail; //undefined
let userEmail1= undefined // undefined

const id = Symbol('123') //Symbol
const anotherId = Symbol('123') // Symbol

// console.log(id === anotherId); // false

 const bigNumber = 34567392002863674n // BigInt

 
 // Reference Datatype (Non primitive)
 /*
 Array, Object , Function
 */

 const heros = ["Shaktiman" , "Krish" ,"Ra-one", "FlyingJat"]; // Array
  
 let myobj = {        
    name: "Satish",     // Object
    age: 21,
 }

 const myFunction = function(){
    console.log("Hello World");     //Function
 }

//All non primitive data type return type is Object.
 
 console.log(typeof outsideTemp); // Object



 //******************** Memory ********************************

 // Stack (Primitive) , Heap (Non-Primitive)

 let myYoutubename = "hiteshchoudhurydotcom"

 let anotherName = myYoutubename
 anotherName = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anotherName);

 let userOne ={
   email: "user@google.com",
   upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "satish@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 