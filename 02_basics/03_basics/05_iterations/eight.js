const mymethodreduce = [1,2,3]


 const myTotal = mymethodreduce.reduce( function ( accumalator, currentval) {
    console.log(`acc: ${accumalator} and currentvalue : ${currentval}`);
    
return   accumalator +currentval

 } ,3)
 console.log(myTotal);
 