
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



//all non primitive datatype return type is object aur function k return type ko object function bolte hai

const Function1 = function(){
    console.log("Hello World");

    
}
console.log(typeof Function1);




/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */


       /*+++++++++++++++++++++++++++++++++++++++++++++
       two types of memory : Stack (Primitive) and Heap (Non Primitive)
       jab bhi stack memory use hti hai iska mtlb hota hai jo bhi variable declare hua hai uska u get a copy
       when a memory is define under heap or when a object is define under heap u get the reference of original value so whatever change u do
       it does to ogirinal value  */

       let myYoutubename = "ankitajain"
       let anothername = myYoutubename
       anothername = "newchannelstart"
       console.log(myYoutubename);
       console.log(anothername);

       let userOne ={
        email: "user@google.com",
        upi: "user@rbl"
       }

       let userTwo = userOne

       userTwo.email = "abc.com"
       userTwo.upi = "abc@rbl"
       console.log(userOne);
       console.log(userTwo);
       
       
       
       

