/**
 * ? ... (spread operator) - unpacks elements from an array
 * ? ... (rest operator) - packs elements into an array
 */

const odd = [1,3,5]

const combined = [2,4,6, ...odd]

console.log(combined)

const one = [[1,3,5]]

const newOne = [2,4,6, ...one] // Get back to you 

console.log(newOne)

// rest operator 

function display(a,b,c, ...args){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(args)
}

display(1,2,3,4,5,6)

// constructing array literal 

let initalChars = ['A', 'B']

let chars = [...initalChars, 'C' ,'D']

console.log(chars)

// concat arrays

let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

// Copying an array

let scores = [80, 70, 90]

let copiedScores = [...scores]

console.log(copiedScores)

// Spread operator and string 

let charsNew = ['A', ...'BC', 'D']

console.log(charsNew)