// Implement the constructor function
// What arguments should this function have? Add them.
function Shape(sides, colour, pointy) {
    this.sides = sides;
    this.colour = colour;
    this.pointy = pointy
}

// Change the declarations below to use the Shape constructor instead
let shape1 = new Shape( 3, "blue", true)
let shape2 = new Shape( 4, "red", true)
let shape3 = new Shape( Infinity, "pink", false)

// let shape1 = {
//     sides: 3,
//     colour: "blue",
//     points: true   
// }
// let shape2 = {
//     sides: 4,
//     colour: "red",
//     points: true   
// }
// let shape3 = {
//     sides: Infinity,
//     colour: "pink",
//     pointy: false
// }

module.exports = Shape
