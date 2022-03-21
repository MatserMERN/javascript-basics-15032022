class Shape {
    constructor(){

    }

    draw(){
        return "I am generic Shape"
    }
}

class Circle extends Shape {
    constructor(){
        super()
    }

    draw(){
        return super.draw() // Calling parent's method
    }
}

let circle1 = new Circle()

console.log(circle1.draw())