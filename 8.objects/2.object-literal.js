var person = {} // Object Literal Syntax


person["firstName"] = "Scott"
person["lastName"] ="Desatnick"

var cityName = "city"
person[cityName] ="Boston"

person["address"] = {}
person["address"]["state"] ="Masscchustes"
person["address"]["street"] ="1st Main"

person.company = {}
person.company.name = "Education First"

person.website = "www.javascript.com"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])
console.log(person[cityName])
console.log(person['cityName'])
console.log(person["address"]["state"])
console.log(person.company.name)
console.log(person.website)

var student = {
    id: 1,
    name: 'Scott',
    isAdmin: true,
    grade:  undefined,
    details : null,
    address: {
        state: 'Massechusets'
    },
    getName: function(){
        return this.name 
    },
    subjects: ["Maths", "Physics", "Chemistry"]
}

student.age =45

console.log(student)
console.log(student.id)
console.log(student.name)
console.log(student.age)
console.log(student.isAdmin)
console.log(student.grade)
console.log(student.details)
console.log(student.address)
console.log(student.getName)
console.log(student.subjects)