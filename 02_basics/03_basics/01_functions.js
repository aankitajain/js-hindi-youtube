


function sayMyName(){

    console.log('H');
console.log('I');
console.log('J');
console.log('K');
console.log('L');
console.log('M');

}

//sayMyName()

// function addTwoNumbers(number1,number2){    //parameters
//  console.log(number1 + number2);
// }addTwoNumbers(3,null)             //arguments

function addTwoNumbers(number1,number2){    //parameters
    // let result = number1 +number2
    // return result                   //return ke baad kuch bhi code ho wo unreachable hoga
    return number1 + number2
}
    const re = addTwoNumbers(3,5)
  //console.log("Result" , re);

  function loginUserMessage(username='aj'){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in `
  }

    //console.log(loginUserMessage("Ankita"))
    //console.log(loginUserMessage("ankitajain"))

    function calculateCartPrice(var1,var2 ,...num1)
{ return num1

    }
   //console.log(calculateCartPrice(2,4,7,8,9));

  const user ={
    username: "ankita",
    price: 199
  }

  function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
  
  }
  handleObject(user)
  handleObject({
    username:"sam",
    price: 399
  })

  const myNewArray = [200,400,100,600]

  function returnSecondValue(getArray1){
    return getArray1[2]

  }
  //console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([100,200,300,400]));


