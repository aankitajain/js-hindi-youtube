const coding = ["js","ruby","java","python"]

// coding.forEach(function (item){
// console.log(item)

// })
//call back function mai uska naam ni hto hai

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {

    languagename: "js",
    languagefile: "javasc"
    },
      {

    languagename: "jrubys",
    languagefile: "rb"
    },
      {

    languagename: "python",
    languagefile: "py"
    }
]

myCoding.forEach( (item1) => {
    console.log(item1.languagename);
    
} )
