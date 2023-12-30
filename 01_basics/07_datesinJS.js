let myDate = new Date()
// console.log(myDate.toString()); //Sat Dec 30 2023 13:33:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sat Dec 30 2023
// console.log(myDate.toISOString()); //2023-12-30T13:33:22.674Z
// console.log(myDate.toJSON());// 2023-12-30T13:33:22.674Z
// console.log(myDate.toLocaleString()); //12/30/2023, 1:33:22 PM
// console.log(myDate.toTimeString()); //13:33:22 GMT+0000 (Coordinated Universal Time)

//console.log(typeof myDate); //Object

let myCreatedDate1 = new Date(2023,0,23)
//console.log(myCreatedDate1.toDateString());// Mon Jan 23 2023

let myCreatedDate2 = new Date(2023 ,0, 23 ,5,3)
//console.log(myCreatedDate2.toLocaleString());//  1/23/2023, 5:03:00 AM

//let myCreatedDate3 = new Date("2023-01-14")
//console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM
let myCreatedDate3 = new Date("01-14-2023")
//console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

//console.log(myTimeStamp); //1703944437892     it gives in time in milliseconds
//console.log(myCreatedDate1.getTime()); // 1674432000000 it gives time in milliseconds

//console.log(Math.floor(Date.now()/1000)); // it converts milliseconds to seconds

let newDate = new Date()
// console.log(newDate);  //2023-12-30T14:13:46.609Z
// console.log(newDate.getMonth()); //11
// console.log(newDate.getDay()); //6


newDate.toLocaleString('default',{
   weekday:"long" ,
    
})

