//singteton when we declare like literal tab singelton ni bnta ,constructor se jab banta hai tab singelton
//Object.create


//object literals

const mySym = Symbol("key1")
 
const JsUser = { 
    name : "Ankita",
    "full name":"Ankita jain",
    age:18 ,
    [mySym]: "mykey1",
     location:"auckland" , 
     email: "aankitajain.20@gmail.com",
      isLogged:false, 
      lastLogindays: ["mon","sat"]
    }

//console.log(JsUser.email);
//console.log(JsUser["name"]);
//console.log(JsUser["full name"]);
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email= "AANKITAJAIN"
//Object.freeze(JsUser)
JsUser.email= "AANKITAJAINaaaaaaa"
// console.log(JsUser);

JsUser.greeting=
function(){
    console.log("Hello js user");
    
}



JsUser.greeting2=
function(){
    console.log(`Hello js user1 ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());




