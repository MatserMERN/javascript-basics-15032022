var data = [
                1,
                "Scott",
                true,
                null,
                undefined,
                {name: 'Scott'},
                function(name){
                    return name
                },
                ["Red", "Green", "Blue"]
            ]

var name = data[6](data[5].name)
console.log(name)

// Invoke the function 
// pass the obect name as parameter 
// access array value blue 
// print "scott likes blue"

var output = data[6](data[5].name) + ' Likes ' + data[7][2]
console.log(output)