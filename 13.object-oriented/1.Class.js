// Class
function Student(){

}

// Instance

function Person(){

}
var person1 = new Person() // person1 is called an instance
var person2 = new Person() // person2 is called an instance

// Constructor

function Order(){
    console.log('order is initiated')
}

var order1 = new Order() // Order() is called constructor 

// Properties

function Customer(gender){
    this.gender = gender
}

var customer1 = new Customer('female')
console.log(customer1)

var customer2 = new Customer('male')
console.log(customer2)