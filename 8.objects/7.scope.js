var person = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age: 45
}

person.email = 'scott.deastnick@ef.com' // ADD 
person.firstName = 'Great Scott' // UPDATE
delete person.age // DELETE
console.log(person) // READ

/**
 * ? Object.preventExtensions()
 * ? can't add new property
 * ? can update existing property
 * ? can delete the existing property
 */

 var studentPreventExtensions = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.preventExtensions(studentPreventExtensions)

studentPreventExtensions.email = 'scott.deastnick@ef.com' // ADD 
studentPreventExtensions.firstName = 'Great Scott' // UPDATE
delete studentPreventExtensions.age // DELETE
console.log(studentPreventExtensions) // READ

/**
 * ? Object.seal()
 * ? can't add new property
 * ? can update existing property
 * ? can't delete the existing property
 */

 var studentSeal = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age: 45
}

Object.seal(studentSeal)

studentSeal.email = 'scott.deastnick@ef.com' // ADD 
studentSeal.firstName = 'Great Scott' // UPDATE
delete studentSeal.age // DELETE
console.log(studentSeal) // READ

/**
 * ? Object.freeze()
 * ? can't add new property
 * ? can't update existing property
 * ? can't delete the existing property
 */

 var studentFreeze = {
    firstName: 'Scott',
    lastName: 'Desatnick',
    city: 'Boston',
    age: 45,
    address: {
        state: 'Massecchusets'
    }
}

Object.freeze(studentFreeze)
Object.freeze(studentFreeze.address)

studentFreeze.email = 'scott.deastnick@ef.com' // ADD 
studentFreeze.firstName = 'Great Scott' // UPDATE
delete studentFreeze.age // DELETE
studentFreeze.address.state ='Telangana'
console.log(studentFreeze) // READ