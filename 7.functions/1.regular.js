// Always returns the value
function getName(){
   // return 1
   // return "scott"
   // return true
   // return null
   // return undefined
   // return {}
   // return function(){}
   // return []
   // return
} 

console.log(getName())

function getFullName(firstName, lastName){
    return firstName + " " + lastName
}

// function getFullName(firstName){
//     return firstName 
// }

// function getFullName(){
//     return  
// }
console.log(getFullName("Scott", "Desatnick"))
console.log(getFullName("Adam", "Colson"))
console.log(getFullName("Tuan", "Bui"))

function getMessage(message, name){
    return message + '!!!'+ name
}

var message = getMessage('Welcome', 'Scott')
console.log(message)