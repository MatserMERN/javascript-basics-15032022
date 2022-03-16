console.log('one')
setTimeout(function(){
   console.log('two') 
}, 3000)
console.log('three')


function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve('two') 
        }, 3000)
    })
}

console.log('one')
getData().then(function(data){
    console.log(data)
    console.log('three')
})