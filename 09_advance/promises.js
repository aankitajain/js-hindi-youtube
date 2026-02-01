const promiseOne = new Promise(function(resolve,reject){
//Do an async task
//DB calls,cryptography,network
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
    
},1000)
})

//now consume the Promise
promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
        
    }
    ,1000)
}).then(function()
{
    console.log('Async two resolved');
    
}
)


