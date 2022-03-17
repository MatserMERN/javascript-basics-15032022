var message = 'This is a message \n' +  
              'using single \nquote'

console.log(message)

console.log('Hello %s, how are you ? are you from %s', "Scott", "Boston")
console.log('Hello %i, how are you ? are you from %i', 10, 20)
console.log('Hello %o', {name: 'Scott'})

// Template literal 

let str = `This is a message 
using template 
literal in ES6`

console.log(str)

let firstName ='Scott',
    lastName ='Desatnick'

let greeting = `Welcome ${firstName} ${lastName}`
console.log(greeting)

let a =10, b =20

let total = `Total is: ${a + b}`
console.log(total)

let user = {firstName: 'Scot' , lastName: 'Desatnick'}

let fullName = `Hello ${user.firstName} ${user.lastName}`

console.log(fullName)