var person = new Object()

person["firstName"] = "Scott"
person["lastName"] ="Desatnick"

var cityName = "city"
person[cityName] ="Boston"

person["address"] = new Object()
person["address"]["state"] ="Masscchustes"
person["address"]["street"] ="1st Main"

person.company = new Object()
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
