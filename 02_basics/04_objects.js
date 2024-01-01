//********singletone or object through constructor **********//

const tinderUser = new Object()  // singleton object ...
//const tinderUser ={}  // non singleton object...
//console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Satish"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Satish', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Satish",
            lastname : "Pradhan"
        }
    }
}
  
// console.log(regularUser.fullname); //{ userfullname: { firstname: 'Satish', lastname: 'Pradhan' } }
//console.log(regularUser.fullname.userfullname); //{ firstname: 'Satish', lastname: 'Pradhan' }


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2} //SPREAD ---> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  // ALWAYS usefull
console.log(obj4);

const users = [
    {
        id: 1,
        email : "s@gmail.com"
    },
    {
        id: 1,
        email : "s@gmail.com"
    },{
        id: 1,
        email : "s@gmail.com"
    }
]

users[1].email
console.log(tinderUser);//{ id: '123abc', name: 'Satish', isLoggedIn: false }

//nsole.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Satish' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
