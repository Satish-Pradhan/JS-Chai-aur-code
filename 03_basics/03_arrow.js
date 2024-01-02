const user = {
    username: "satish",
    price: 999,

    welcomeMessage: function(){
       // console.log(`${this.username} , welcome to website`);
       // console.log(this); // it gives current context
    }

}

// user.welcomeMessage()
// user.username = "Rahul"
// user.welcomeMessage()

//console.log(this); // {}

/*
function chai(){
    let username = "Sunil"
    console.log(this.username); // undefined .... this. is used in only object not in function
}
chai()
/* 
const chai = function(){
    let username = "Sunil"           // same as previous 
    console.log(this.username);
}
chai()
*/

const chai =  () => {                //arrow function
    let username = "Sunil"          
    console.log(this.username); // undefined
    console.log(this);  // {}
}
// chai()
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); // 7
*/

//const addTwo = (num1 , num2) => num1 + num2   // implicit return 
//const addTwo = (num1, num2) => (num1 + num2)  // no use of return keyword because of parenthesis

const addTwo = (num1, num2) => ({username: "Satish"}) // returning object
console.log(addTwo(3, 4));




