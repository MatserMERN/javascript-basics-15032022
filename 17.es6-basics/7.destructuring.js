// Array Destructuring

let array = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = array

console.log(name1) // array[0]
console.log(name2) // array[1]
console.log(name3) // array[2]

// Split

let [firstName, lastName] = "Scott Desatnick".split(" ")

console.log(firstName)
console.log(lastName)

let [fName, , title] = ["Scott", "Desatnick", "Great Boss"]

console.log(fName)
//console.log(lName)
console.log(title)


// Object Destructring 

let user = {
    id: 1, 
    name: 'Scott',
    age: 45
}

let {id, name, age} = user

console.log(id)
console.log(name)
console.log(age)


let options = {
    title1: 'Menu',
    width: 100,
    height: 200
}

let {title1, width, height} = options

console.log(title1)
console.log(width)
console.log(height)