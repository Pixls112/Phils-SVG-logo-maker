const Shapes = require('./shapes.js')

// This class is used to make a square using data from the shapes.js file and will render the svg while using the data inputted by the user.
class Square extends Shapes {
    constructor(shapeColor,textColor,insideText){
        super(shapeColor,textColor,insideText)
    }
    render() {
       return `<svg width="100" height="100">
       <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>
       <text x="50%" y="50%" font-size="100%" text-anchor="middle" fill="${this.textColor}">${this.insideText}</text>
     </svg>`
    }
}

module.exports = Square;


