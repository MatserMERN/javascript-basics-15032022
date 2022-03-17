// var employee = {
//     id :1,
//     greet: function(){
//         console.log(this.id)
//     }
// }

// employee.greet() // 1

// Problem with this 
// var employee = {
//     id :1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }, 1000)
//     }
// }

// employee.greet()

// fix using self variable

// var employee = {
//     id :1,
//     greet: function(){
//         var self = this
//         setTimeout(function(){
//             console.log(self.id)
//         }, 1000)
//     }
// }

// employee.greet()

// fix using bind
// var employee = {
//     id :1,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.id)
//         }.bind(this), 1000)
//     }
// }

// employee.greet()

// fat arrow function
var employee = {
    id :1,
    greet: function(){
        setTimeout(() =>console.log(this.id), 1000)
    }
}

employee.greet()