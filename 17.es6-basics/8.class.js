class Customer {
    constructor(firstName, lastName){
        this.firstName = firstName // this.firstName is property
        this.lastName = lastName // this.lastName is property

    }

    getFullName(){
        return this.firstName + ' ' + this.lastName
    }

    sayHello(message){
        this.message = message
        return this.message
    }
}

let customer1 = new Customer('Scott', 'Desatnick') // customer1 is an instance
                                                   // Customer('Scott', 'Desatnick') is constructor
console.log(customer1)
console.log(customer1.getFullName())
console.log(customer1.sayHello("Welcome to method say Hello"))