const name= "aj"
const repoCount = 50
//console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

//string declare different way
const gameName = new String('ankita-jain-01-23')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
//console.log(gameName.substring('a'));

const newString = gameName.substring(0,4)
console.log( newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = '    hitesh  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://google.com/ankita%20jain'
console.log(url);

console.log(url.replace('%20','_'));
console.log(url.includes("ankita"))

console.log(gameName.split("-"));


