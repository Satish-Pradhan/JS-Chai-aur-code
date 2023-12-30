const name = "Satish"
const repoCount = 50

//console.log(name + repoCount + " value"); // oudated bellow is preferable

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String Interpolation

const gameName = new String('Satish-Pradhan') //another way to define string 
//console.log(gameName);

//console.log(gameName[0]);
//console.log(gameName,__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5)
//console.log(newString); //Satis

/*
const anotherString = gameName.slice(0,4)
console.log(anotherString); // Sati
*/
 const anotherString = gameName.slice(-13,4)
// console.log(anotherString); // ati

const newStringOne =  "   Satish   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.Google.com/Google%20Satishkp"
console.log(url.replace('%20','@'));

console.log(url.includes('Satish')); //true
console.log(url.includes('kumar')); //false


console.log(gameName.split('-'));