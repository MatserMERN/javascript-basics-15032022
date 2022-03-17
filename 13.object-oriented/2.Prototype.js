// function Student(){
//     this.name ='John'
//     this.gender = 'male'
// }

// Student.prototype.age =35

// var student1 = new Student()
// console.log(student1)

// var student2 = new Student()
// console.log(student2)

function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName
    // }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

var student1 = new Student('Scott', 'Desatnick')
console.log(student1)
var student2 = new Student('Adam', 'Colson')
console.log(student2)
var student3 = new Student('Tuan', 'Bui')
console.log(student3)