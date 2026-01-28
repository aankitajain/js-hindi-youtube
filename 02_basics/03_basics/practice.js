

const user = 
{
    username: "hitesh",
    price : 999,

    welcomemsg: function()
    {
   console.log(`${this.username} , welcome to website`);
   console.log(this);
   
   
    
    }
   
}
//welcomemsg(user)      //why cant i call function here question to explore:answer- coz it is not a standalone function rather inside a object
user.welcomemsg()

user.username ="samu"
console.log(this);     //node env k andar this empty {} ko represent krra
console.log(`${this.username} , welcome to website again`);
user.username ="akash"

user.welcomemsg()


/////
//singelton when made by constructor singelton banega when by literal singelton ni banega

Object.create   // singeltion constructor k through
const mysym = Symbol("key1")
const jsuser = { "name" : "Hitesh",
    age:10,
    location: "Jaipur",
     [mysym]: "mykey1",
    "full name" : "ajainaa",
    email: "a@com",
    isLoggedin: false
}
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(typeof  [mysym]);


const mynewarray =[200,400,500]
function returnsecond(getarr){
    return getarr[2]

}
console.log(returnsecond.mynewarray([200,100]));





