

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

