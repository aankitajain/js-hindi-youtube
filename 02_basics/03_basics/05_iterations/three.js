//for of

['','']
[{},{},{}]

const arr = [1,2,3,4,5]

for (const i of arr) {
   // console.log(i);
    
}

const greetingg1 = "Hello world"
for (const greet of greetingg1) {
   // console.log(`Each char is ${greet}`);
    
    
}

//Maps
//no duplicable values in maps and order is maintained
const map1 = new Map()
map1.set('IN',"India")
map1.set('RS',"Russia")
map1.set('FR',"France")
//console.log(map1);

// map1.keys
// map1.values

// for (const [key,value] of map1) {
//     console.log(key , ':', value);
   
    
// }

// //forof on a Object     //object is not iterable here but maps are iterable with loop
// const myObject = {
//     'game1': 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key,value] of myObject) {
//     console.log(key , ':' , value);
    
// }