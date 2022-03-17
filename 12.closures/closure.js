function sayHello(message){
    var city ='Boston'
    return function(name){
        return message + ' to ' + city + ' ' +  name
    }
}

var wishMe = sayHello('Welcome')
console.log(wishMe)

var sendMessage = wishMe('Scott')
console.log(sendMessage)