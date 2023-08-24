
describe('Square', () => {
    it('Square should return the SVG with the correct color for the shape and text while displaying the inputted text inside the shape.', () => {

        const Square = require('./Square');
        const shapeSquare = new Square("Blue", "Text", "White")
        expect(shapeSquare.render()).toEqual(`<svg width="100" height="100">
       <rect x="10" y="10" width="80" height="80" fill="Blue"/>
       <text x="50%" y="50%" font-size="100%" text-anchor="middle" fill="White">Text</text>
     </svg>`)
    })

})