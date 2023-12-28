const accountId = 144553
let accountEmail= "satish@505.com"
var accountPassword = "431143"
accountCity = "Bhubaneswar"
let accountState;

//accountId = 2 // not allowed...

accountEmail = "pikun@123.gmail"
accountPassword = "2121212"
accountCity = "Dhenkanal" 
console.log(accountId);


/*

Prefer not to use var
because of issue in block scope and functional scope..
*/

console.log([accountId, accountEmail, accountPassword, accountCity,accountState]);