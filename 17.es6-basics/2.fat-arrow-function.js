/**
 *  ? => fat arrow
 */

// let add = function(x,y){
//     return x+y
// }

// let add = (x,y) =>{
//     return x+y
// }
/**
 * ? () => x+y
 * ? () => {retrun x+ y}
 * * Both are same
 */

let add = (x,y) => x+y
//let add = (x,y) =>{ return x+y}

console.log(add(20,30))

let numbers = [4,2,6]

// numbers.sort(function(a,b){
//     return b-a
// })

numbers.sort((a,b)=> b-a)
console.log(numbers)

/**
 * ? (name) => name.length
 * ?  name => name.length
 * * Both are same
 */

let names = ["Scott", "Adam", "Tuan" ,"Uma"]
let lengths = names.map(name =>name.length)

console.log(lengths)

// With No Parameters
let logDocument = () => console.log(document)

logDocument()

// Line breaks 

// let multiply = (x,y)  // This will give syntax error 
// => x*y

let multiply = (x,y) => 
x*y

console.log(multiply(3,4))

// Object literal 

// let setColor = function(color){
//     return {name:color }
// }

let setColor = (color) => ({  name:color })

let backGroundColor = setColor('Green')
console.log(backGroundColor)