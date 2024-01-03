const userEmail = "satish@123.ai"
const scores = []
if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


//////// falsy values :
 // false , 0 , -0, BigInt 0n, "" , null , undefined, NaN


 //////////// truthy values :
 // "0", [], 'false' , "false" , " ", {}, funtion(){}
/*
if (scores.length === 0) {
    console.log("Array is empty");
}
*/
/*
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
*/


//***** Nullish Coalescing Operator (??) null & undefined *************//

let val1;
// val1 = 5 ?? 10 // 5
//val1 = null ?? 10  // 10
//val1 = undefined ?? 15 // 15
//val1 = null ?? 2 ?? 5 // 2
//val1 = undefined ?? null ?? 10 ?? 23 ?? 5 // 10

console.log(val1); 

// *********** Ternary Operator (condtion ? true : false)*********//

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

