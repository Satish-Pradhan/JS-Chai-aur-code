/*
function sayMyname(){
   console.log("Satish");
   console.log("Kumar");
   console.log("Pradhan"); 
}
sayMyname()
*/
/*
function addTwoNumbers(number1, number2){
   console.log(number1 + number2);
}
const result = addTwoNumbers(3,5)
console.log("Result: ",result ); // 8    Result:  undefined
*/
function addTwoNumbers(number1, number2){
   //let result = number1 + number2
   //return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
//console.log("Result: ",result ); // Result: 8
/*
function loginUserMessage(username){
   if(username=== undefined){
      console.log("Please enter a username");
      return 
   }
   return `${username} just logged in`
}
  console.log(loginUserMessage()); //Please enter a username 
                                   // undefined 
//console.log(loginUserMessage("Satish")); // Satish just logged in
*/
/*
function loginUserMessage(username){
   if(!username){
      console.log("Please enter a username");
      return 
   }
   return `${username} just logged in`
}
  console.log(loginUserMessage()); 
*/
/*
function loginUserMessage(username = "Rahul"){     //default value Rahul
   if(!username){
      console.log("Please enter a username");
      return 
   }
   return `${username} just logged in`
}
  console.log(loginUserMessage());// Rahul just logged in
  //console.log(loginUserMessage("Sunil")); // Sunil just logged in
  */



/*
  function calculateCartPrice(...num1){
     return num1
  }
  
console.log(calculateCartPrice(200,400,500,2000)); //[ 200, 400, 500, 2000 ]
*/
/*
function calculateCartPrice(val1, val2, ...num1){
   return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000));//[500, 2000]
*/

const user = {
   username: "Satish",
   price: 199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) //Username is Satish and price is 199
handleObject({
   username: "Sunil",     //Username is Sunil and price is 400
   price: 400
})



const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
   return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200,400, 100, 500]));// 400
