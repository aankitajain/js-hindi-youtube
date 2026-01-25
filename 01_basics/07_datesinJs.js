//Dates

let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());
console.log(typeof mydate);


// let myCreatedDate = new Date("2023-01")
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

newDate.toLocaleString('')






