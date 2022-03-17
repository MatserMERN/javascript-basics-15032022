/**
 * * Nested Functions
 */

function one(){
    return function two(){
        return function three(){
            return "Welcome to nested functions"
        }
    }
}

var getOne = one()
var getTwo = getOne()
var getThree = getTwo()
console.log(getThree)

var message = one()()()
console.log(message)

// Way Two 

function first(){

    var name = "scott"
    var getName = function(){
        return name
    }

    var getNameOne = getName()
    return getNameOne
}

var getFirst = first()
console.log(getFirst)