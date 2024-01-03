// if
/*
const isUserLoggedIn = true


if(isUserLoggedIn){
    console.log("executed");
} else {
    console.log("User logged in is false");
} 

// <, >, <=, >=, ==, !=, === , !==
*/

/*
const score = 200

if (score > 100){
    let power = "fly"
    console.log(`user power: ${power}`);
}

console.log(`user power : ${power}`); // error
*/
/*
const balance = 1000

//if ( balance > 500) console.log("test"), console.log("test2");

if (balance < 500){
    console.log("Less than 500");
} else if (balance < 700) {
    console.log("less than 700");
}else if ( balance < 900){
    console.log("less than 900");
}else {
    console.log("less than 1200");
}
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
