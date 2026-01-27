//Immediately Invoked Function Expressions (IIFE)  
//global scope ke variables k poolution se bachne k liye we use IIFE

(function chai(){     //this is named IIFE iska naam hai
    console.log(`DB CONNECTED`);
    
})(),


( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('hitesh')
