// concat
var fruits = ["Orange", "Apple", "Banana", "Guava"]

var vegetables = ["Potatao", "Tomato", "Brinjal", "Drumstick"]

var getAllOne = fruits.concat(vegetables)
console.log(getAllOne)

var getAllTwo = vegetables.concat(fruits)
console.log(getAllTwo)

// join

var movies = ["Avatar", "Good Will Hunting", "vanilla Sky", "MARS"]
var moviesString = movies.join(",")
console.log(moviesString , typeof moviesString)

// split

var fullName = "Scott Desatnick"
var data = fullName.split(" ")
console.log(data)