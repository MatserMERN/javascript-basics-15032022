var person = {
	"id": 1,
	"name": "Scott"
}

console.log(person, typeof person)

var JSONString = JSON.stringify(person)

console.log(JSONString, typeof JSONString)

var JSONParse = JSON.parse(JSONString)

console.log(JSONParse, typeof JSONParse)