const mymethodreduce = [1,2,3]


//  const myTotal = mymethodreduce.reduce( function ( accumalator, currentval) {
//     console.log(`acc: ${accumalator} and currentvalue : ${currentval}`);
    
// return   accumalator +currentval

//  } ,3)

// const myTotal = mymethodreduce.reduce( (acc,currval) =>  acc+currval ,3)


//  console.log(myTotal);

const shoppingCart = [
    {
       itemName: "js course",
       price: 299 
    },
     {
       itemName: "py course",
       price: 399 
    },
     {
       itemName: "data course",
       price: 499 
    },
]

const pricetoPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0 )

console.log(pricetoPay);

 