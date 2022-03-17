var person1 = {firstName: 'Scott', lastName: 'Desatnick'}
var person2 = {firstName: 'Adam', lastName: 'Colson'}
var person3 = {firstName: 'Tuan', lastName: 'Bui'}

function display(message, city){
    return message + ' to ' + city + ', Mr.' + this.firstName + ' ' + this.lastName
}

var bindDisplay = display.bind(person1)
console.log(bindDisplay('Welcome', 'Boston'))

var bindDisplayOne = display.bind(person1, 'Welcome', 'Boston')
console.log(bindDisplayOne())

var callDisplay = display.call(person2, "Welcome", "Sydney")
console.log(callDisplay)

var applyDisplay = display.apply(person3, ["Welcome", "Vietnam"])
console.log(applyDisplay)

// Fixing using bind - one
console.log('****Fixing using bind - one***')
var obj = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

       var updateName = function(){
           this.name ='Scott Desatnick'
           console.log(this) // This points to global
       } 
       updateName.bind(this)()
    }
}

obj.getName()

// Fixing using bind - two
console.log('****Fixing using bind - two***')
var obj = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

       var updateName = function(){
           this.name ='Scott Desatnick'
           console.log(this) // This points to global
       }.bind(this)
       
       updateName()
    }
}

obj.getName()


// Fixing using call -one
console.log('****Fixing using call - one***')
var obj = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

       var updateName = function(){
           this.name ='Scott Desatnick'
           console.log(this) // This points to global
       } 
       updateName.call(this)
    }
}

obj.getName()

// Fixing using call -two
console.log('****Fixing using call - two***')
var obj = {
    name: 'Scott',
    getName: function(){
        console.log(this)
        this.name ='Desatnick'
        console.log(this)

       var updateName = function(){
           this.name ='Scott Desatnick'
           console.log(this) // This points to global
       }.call(this)
       //updateName.call(this)
    }
}

obj.getName()