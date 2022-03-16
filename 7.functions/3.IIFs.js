var first =  (function(value){
  return value
})('First');

var second = (function(value){
    return value
}('Second'))

console.log(first)
console.log(second)

// function confirm(message){
//     return message
// }

// function alert(){
//     return "This is new alert"
// }

var confirmOne = (function(){
    return "Here is the confirmation"
})()

var alertOne = (function(){
    return "Here is the alert"
})()

console.log(confirmOne)
console.log(alertOne)