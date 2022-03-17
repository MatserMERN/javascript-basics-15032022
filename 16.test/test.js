//console.log(multiply(2)(3)(4)) // 24

function multiply(x){
    return  function(y){
        return  function(z){
            return x*y*z
        }
    }
}

var a =10
var b =a
a =20

console.log(a) //20
console.log(b) // 10


var a =[1,2]
var b = a
a.push(3)

console.log(a) 
console.log(b) 


var a = [1,2]
var b =a
a =[1,2,3]

console.log(a) 
console.log(b) 

var name = 1+ 2+ 'scott' + 3+ 4

console.log(name)

// 12scott34
// 3scott34

var output = (function(x){
    delete x
    return x
})(0)

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:1})

console.log(output)

var output = (function(x){
    delete x.a
    return x
})({a:1})

console.log(output)

// How to empty an array

var array = ['a', 'b', 'c', 'd', 'e', 'f']

// Method1
// array=[]

// console.log(array)

// Method2
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()

//Method3
// var length = array.length
// for(var i=0; i<length; i++){
//     array.pop()
// }

//Method4
//array.length =0

//Method5
// while(array.length){
//     array.pop()
// }

//Method6
//array.splice(0, array.length)

//Method7
// while(array.length){
//     array.shift()
// }

// console.log(array)

console.log(isEven(3)) // false
console.log(isEven(6)) // true
console.log(isEven(7)) // false

function isEven(a){
    return !(a%2)
}

// ternary operator 

var a =10;

var output = a>10 ? 'a is bigger number' : 'a is smaller number'
console.log(output)

console.log(extensionExtractor('resume.doc')) // doc
console.log(extensionExtractor('bengaluru.txt')) // txt
console.log(extensionExtractor('notepad')) // false

// function extensionExtractor(filename){
//     var files = filename.split('.')
//     console.log(files)
//     if(files.length >1){
//         return files[1]
//     } else {
//         return false
//     }
// }


function extensionExtractor(filename){
    return filename.split('.').length >1 ? filename.split('.')[1] 
                                         : false
}

console.log('**** == vs === *****')
// == and ===

console.log(1==1)
console.log(1=='1') // will only check the value
console.log(1==='1') // will check the value and the type too

console.log('**** != vs !== *****')
console.log(1!=1)
console.log(1!='1')
console.log(1!== '1')

function one(){
    return {
        a:1
    }
}

function two(){
    return; 
    {
        a:1
    }
}

console.log(one())
console.log(two())