function Shape(sides, colour, pointy) {
    this.sides = sides
    this.colour = colour
    this.pointy = pointy

}

Shape.prototype.aboutMe = function() {
        console.log(`I am a ${this.sides} sided ${this.colour} shape`)
        // return `I am a ${this.sides} sided ${this.colour} shape`
    };

Shape.prototype.warning = function() {
        if (!this.pointy) {
            console.log("I am safe.")
            // return "I am safe"
        } else {
            console.log("Warning! I am pointy!")
            // return "Warning! I am pointy!"
        }
    } 

module.exports = Shape