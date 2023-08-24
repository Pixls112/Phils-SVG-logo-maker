

describe('Triangle', () => {
    it('Triangle should return the SVG with the correct color for the shape and text while displaying the inputted text inside the shape.', () => {

        const Triangle = require('./Triangle');
        const shapeTriangle = new Triangle("Blue", "Text", "White")
        expect(shapeTriangle.render()).toEqual(`<svg width="300" height="200">
       <polygon points="150, 18 244, 182 56, 182" fill="Blue" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="White">Text</text>
        </svg> `)
    })

})