/**
 *  ? var - function scoped
 *  ? let, const - block scoped
 */ 

// function sample(){
//     var foo = "blue"
//     console.log(foo) // blue
// }
// sample()
//console.log(foo) // ReferenceError: foo is not defined

// function display(){
//     if(true){
//         var foo = "Hello"
//         let bar = 'How are you ?'
//         const baz = 'I am fine'

//         console.log(foo) //Hello
//         console.log(bar) // How are you
//         console.log(baz) // I am fine
//     }

//     console.log(foo)   // Hello
//   //  console.log(bar) //ReferenceError: bar is not defined
//   //  console.log(baz) //ReferenceError: baz is not defined
// }

// display()

//var outside of a for-loop

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i)

//let outside of a for-loop

// for(let i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i) // ReferenceError: i is not defined


//const outside of a for-loop

// for(const i=0; i<3; i++){
//     console.log(i)
// }
// console.log(i) // ReferenceError: i is not defined


function verify(){
    let foo =1
        foo =100

    //let foo =101 //Identifier 'foo' has already been declared
    console.log(foo)

    const bar =200
        //  bar =400 //Uncaught TypeError: Assignment to constant variable.
    //const bar  =300 //Uncaught SyntaxError: Identifier 'bar' has already been declared
    console.log(bar)
}

verify()

const names = ["scott", "adam", "tuan"]

names.push("uma")

console.log(names)