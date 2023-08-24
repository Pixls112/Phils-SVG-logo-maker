
const Shapes = require('./shapes.js');
// This class is used to make a Triangle using data from the shapes.js file and will render the svg while using the data inputted by the user.
class Triangle extends Shapes {
    constructor(shapeColor,textColor,insideText){
        super(shapeColor,textColor,insideText)
    }
    render() {
       return `<svg width="300" height="200">
       <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.insideText}</text>
        </svg> `
    }
}

module.exports = Triangle;
