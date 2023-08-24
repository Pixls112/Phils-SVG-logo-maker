
// This class is shared among all the shapes and simply allows the data to be inputted into the other .js files
class shapes {
    constructor(shapeColor,insideText,textColor) {
        this.shapeColor = shapeColor;
        this.insideText = insideText;
        this.textColor = textColor;
    }
};

module.exports = shapes;