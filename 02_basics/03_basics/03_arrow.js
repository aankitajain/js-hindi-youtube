// const user = 
// {
//     username : "ankita",
//     price : 555,

//     welcomeMessage: function()
//     {

//        // console.log(`${this.username} , welcome to website`);
//         console.log(this);
        
        
//     }

    
// }
//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()
// console.log(this);

//function chai(){
    let username = "hitesh"
    console.log(this.username);   //this mai object mai hi use kar pa ri hu not in function thats why it returned undefined   *UNDEFINED*
//    console.log(this);   //*lot of things values returned*
// }
 chai()


/////////////////////
// const chai1 = () => {
//     let username = "hitesh"
//     //console.log(this.username);                 //returned *UNDEFINED*
//    // console.log(this);                            //returned nothing {}
// }
// chai1()

//////////copied from hitesh youtube
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()