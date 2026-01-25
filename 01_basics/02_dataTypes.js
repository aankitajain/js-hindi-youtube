
//let state;  this is undefined
//let state = null

//primitive datatypes
// number => 2 to power 53
//bigint 
//string => single or double quote any
//boolean=>  true or false
//null => standalone value
//undefined  => value is not assigned
//symbol => unique

//non primitive datatypes
//interview question  null is an object
//object

// console.log(typeof "aj")
// console.log(typeof age)
// console.log(typeof name)
// console.log(typeof null);          //null ka type is object
// console.log(typeof undefined);    //undefined ka type is undefined

// console.log("2">1);
// console.log(1>2);

console.log(null ==0);
// console.log(null <=0);
// console.log(null >0);
// the results of null > 0 ,null == 0,null<0  is false
//however the result of null>=0 is true ,null<=0 is true 
//reason is that the equality check== and comparisions ><>=<= works differently.Comparisions convert null to a number,treating it as a 0.
//thats why null>=0 is true and null>0 is false
//these are comparision operators <= , >= 
//this is equality operator  > ,<,==

/* undefined    all these in undefined will be false*/
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined<0);

//===  also checks the datatype is same or not along with value however == does not check datatype
// console.log("2"==2);
// console.log("2"===2);
// console.log("2">1);
// console.log("02">1);
console.log("2"===1);
console.log("2"==1);

//these kinda conversion can result in confusion 









