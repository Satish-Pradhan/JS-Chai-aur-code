//**************** for of ********// 

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(val);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
*/ 


//***************** Maps *********** 
//map gives unique value and orderly gives output

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN',"India")

//console.log(map);
/*
for (const key of map) {       //[ 'IN', 'India' ]
    console.log(key);          // [ 'USA', 'United States of America' ]
                               //[ 'Fr', 'France' ]
}
*/
/*
for (const [key , value] of map) {     //IN :- India
    console.log(key , ':-', value);    //USA :- United States of America
                                       //Fr :- France
}
*/

const myObject = {
    game1 : 'NFS',
    gmae2 : 'Spiderman'
}

/* for (const [key , value] of myObject) { 
    console.log(key, ':-', value);  // myObject is not iterable (typeerror)
} */

