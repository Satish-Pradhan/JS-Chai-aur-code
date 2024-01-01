//singleton
// Object.create  <------- Method to create an object 




//*******Object literals*******//

const mySym = Symbol("key1")

const jsUser = {                          // Method to create an object 
    name: "Satish",
    "full name" : "Satish Pradhan" ,
    [mySym] : "mykey1",             // creating symbol name as a key...
    age : 21,
    location : "Odisha" ,
    email:"satish123@gmail.com",
     isLoggedIn : false,
     lastLoginDays : ["Monday", "Sunday"]
}

//console.log(jsUser.email);  // Accessing Object (gives satish123@gmail.com)
//console.log(jsUser["email"]); // Accessing Object (gives satish123@gmail.com)

//console.log(jsUser["full name"]) // Satish Pradhan
//console.log(jsUser.full name); // gives error

//console.log(jsUser[mySym]);    // gives mykey1

jsUser.email = "pradhan123@gmail.com" // change in object value
//Object.freeze(jsUser) // After this we can't change the values of an object
jsUser.email = "satishkp445@gmail.com"

//console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

//console.log(jsUser.greeting);  // undefined
//console.log(jsUser.greeting());  // Hello Js user
//console.log(jsUser.greeting);  // [Function (anonymous)]

console.log(jsUser.greeting()); // Hello Js user
console.log(jsUser.greetingTwo()); // Hello Js user,Satish