// Module Pattern
// var Module = (function(){

// })()

// Private Methods

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }
// })()

// Understanding return

// var Module = (function(){
//     var total = 50
//     var privateMethod = function(){

//     }

//     var publicMethod = function(){

//     }

//     return {
//         total:  total,
//         getMethod : function(){
//             console.log('get Method is called')
//         },
//         publicMethod : publicMethod
//     }
// })()

// console.log(Module)

// Module.getMethod()

// Anonymous Object Literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }

//     return {
//         publicMethodOne: function(){

//         },
//         publicMethodTwo: function(){

//         },
//         publicMethodThree: function(){

//         }
//     }

// })()

//console.log(Module)

// Locally Scoped Object literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }
//     var myObj = {}

//     myObj.publicOne = function(){
        
//     }
//     myObj.publicTwo = function(){

//     }
//     myObj.publicThree = function(){

//     }

//     return myObj

// })()

// console.log(Module)

// Stacked Locally Scoped Object literal 

// var Module = (function(){
//     var privateMethod = function(){

//     }
//     var myObj = {
//         publicOne : function(){
        
//         },
//         publicTwo : function(){
    
//         },
//         publicThree : function(){
    
//         }
//     }

//     return myObj

// })()

// console.log(Module)

// Revealing Module Pattern 

var Module = (function(){
    var privateMethod = function(){

    }
    
    var someMethod = function(){

    }

    var anotherMethod = function(){

    }

    return {
        some : someMethod,
        another: anotherMethod
    }

})()

console.log(Module)

// Accessing private method

var Module = (function(){
    var privateMethod = function(message){
        console.log(message)
    }
    
    var someMethod = function(text){
        privateMethod(text)
    }


    return {
        someMethod 
    }

})()

Module.someMethod('Able to call the private Method')