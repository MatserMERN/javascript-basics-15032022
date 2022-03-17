console.log('one')
setTimeout(function(){
   console.log('two') 
}, 3000)
console.log('three')

function getData(){
    return new Promise(function(resolve, reject){
        if(1==1){
            resolve('Here is your data')
        } else {
            reject('Sorry no data available')
        }
    })
}

getData()
.then(function(data){
    console.log(data)
    return data
})
.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})

function getTwo(){
    return new Promise(function(resolve, reject){
         setTimeout(function(){
              resolve('two') 
         }, 3000)
    })
}

console.log('one')
getTwo().then(function(data){
    console.log(data)
    console.log('three')
})