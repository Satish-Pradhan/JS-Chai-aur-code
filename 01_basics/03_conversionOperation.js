let score = null


//console.log(typeof score);
//console.log(typeof(score));


let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));

//console.log(valueInNumber); 

/*if score="33abc"    ....gives NaN(Not a Number)
if score=null      ...gives 0
if score=undefined     ...gives NaN
if score=true/false      .....gives 1/0
if score= "Satish"   (string can't convert to number) ....gives Nan
*/

let isLoggedIn = "" 
/*
1=> true , 
"" => false , 
"satish"=> true,
 0=>false
*/
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn);

let someNumber = 33
 
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);




// ***********************Operations********************

let value = 3
let negValue = -value
//console.log(negValue);

let str1 = "Hello"
let str2 = " Satish"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(true); // gives true
// console.log(+true); //  gives 1 ......if true+ then gives error
// console.log(+""); // gives 0 

let num1, num2 ,num3 
 
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //gives 101