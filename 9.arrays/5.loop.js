var names = ["scott", "adam", "tuan"]

// for loop
console.log('********For Loop*******')
for(var i=0; i<names.length; i++){
   // console.log(i, names.length)
    console.log(i, names[i])
}

// forEach
console.log('********ForEach Loop*******')
names.forEach(function(name, index){
    console.log(index, name)
})

// map
console.log('********Map Loop*******')
names.map(function(name, index){
    console.log(index, name)
})

var data1 = names.forEach(function(name, index){
   return name
})

var data2 = names.map(function(name, index){
    return {name}
 })

 console.log(data1)
 console.log(data2)
