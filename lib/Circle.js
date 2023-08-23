
const Shapes = require('./shapes.js');

class Circle extends Shapes {
    constructor(shapeColor,textColor,insideText){
        super(shapeColor,textColor,insideText)
    }
    render() {
       return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.insideText}</text>
        </svg> `
    }
}

module.exports = Circle;
