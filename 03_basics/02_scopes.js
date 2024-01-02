let a =300  // ......... global scope
var c =300
if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("inner: ",a); // inner: 10  ..... block scope
}

//console.log(a); // not defined a 
//console.log(b); // not defined b
//console.log(c); // 30
//console.log(a); //300

/*
function one(){
    const username = "Satish"

    function two(){
        const website = "google"
        console.log(username);
    }
    console.log(website); // error
    
    two()
}
one()

*/
/*
if(true){
    const username = "satish"
    if(username === "satish"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);// error
}
console.log(username ); //error
*/

//++++++++++++++++++ intresting ++++++++++++++++++++++

console.log(addone(5)); // 6
function addone(num){
    return num + 1
}



//console.log(addTwo(5))       // Error
const addTwo = function(num){
    return num + 2
}


