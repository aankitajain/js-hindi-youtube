

const user = 
{
    username: "hitesh",
    price : 999,

    welcomemsg: function()
    {
   console.log(`${this.username} , welcome to website`);
    
    }
   
}
//welcomemsg(user)      //why cant i call function here question to explore:answer- coz it is not a standalone function rather inside a object
user.welcomemsg()
user.username ="samu"
console.log(`${this.username} , welcome to website`);

user.welcomemsg()

