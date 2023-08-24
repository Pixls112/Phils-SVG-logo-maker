describe('Circle', () => {
    it('Circle should return the SVG with the correct color for the shape and text while displaying the inputted text inside the shape.', () => {

        const Circle = require('./Circle');
        const shapeCircle = new Circle("Blue", "Text", "White")
        expect(shapeCircle.render()).toEqual(`<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="Blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="White">Text</text>
        </svg> `)
    })

})