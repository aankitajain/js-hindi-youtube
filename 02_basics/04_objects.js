//const tinderUser = new Object()   this is singelton object
//const tinderUser = {}         this is non singeton object
const tinderUser = {}
  tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedin = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
    userfullname:{
        firstname:"ankita",
        lastname:"jain"
    }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname);

//combine objects

const obj1 ={ 1:"a",2:"b"}
const obj2 ={ 3:"a",4:"b"}
const obj4 ={ 5:"a",6:"b"}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign( {},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
{
    id:1,
    email:"h@gmail.com1"
    
},
{
    id:2,
    email:"h@gmail.com2"
    
},
{
    id:3,
    email:"h@gmail.com3"
    
}
]
users[2].email
console.log(users[2].email);

//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


