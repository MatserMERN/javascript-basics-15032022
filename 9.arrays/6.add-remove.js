/**
 * ? push - adds the element to array at the end
 * ? unshift - adds the element at the begining of an array
 * ? pop - removes the element at the end of the array
 * ? shift - removes the element at the begining of the array
 */

var numbers = [1,2,3]

numbers.push(4)
numbers.push(5)
numbers.push(6)

numbers.unshift(0)
numbers.unshift(-1)
numbers.unshift(-2)

numbers.pop()
numbers.pop()
numbers.pop()

numbers.shift()
numbers.shift()
numbers.shift()
console.log(numbers)

// splice 

var fruitsOne = ["Banana", "Orange", "Apple", "Mango"];
fruitsOne.splice(2,0,"Kiwi")

console.log(fruitsOne)

var fruitsTwo = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsTwo.splice(2,2)

console.log(fruitsTwo)

// slice 
var fruitsThree = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
var data = fruitsThree.slice(2,4)
console.log(data)

// sort
var numbers = [4,2,6] // 6,4,2
numbers.sort(function(a,b){
    return b-a
})

console.log(numbers)