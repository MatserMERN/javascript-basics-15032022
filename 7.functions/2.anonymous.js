// function getName(firstName, lastName){
//     return firstName + ' ' + lastName
// }
var getName = function(firstName, lastName){
    return firstName + ' ' + lastName
}

console.log(getName('Scott', 'Desatnick'))

var getMessage = function message(){ // we can name the function but we can't call
    return "Welcome to functions"    // the function with same name
}

console.log(getMessage())