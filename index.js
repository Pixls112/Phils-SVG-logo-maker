const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/Circle')
const Square = require('./lib/Square')
const Triangle = require('./lib/Triangle')

//This function will render the shape based on the user's input.
function generateSVG(data) {
    if (data.shapeChoice === 'Circle') {
       const shapeCircle = new Circle (data.shapeColor, data.insideText, data.textColor).render();
       return shapeCircle
    } else if (data.shapeChoice === 'Square') {
        const shapeSquare = new Square (data.shapeColor, data.insideText, data.textColor).render();
        return shapeSquare
    } else if (data.shapeChoice === 'Triangle') {
        const shapeTriangle = new Triangle (data.shapeColor, data.insideText, data.textColor).render();
        return shapeTriangle
    }
}

//This prompts the user with questions and uses the data to fill into the function, and will then generate the shape into the examples folder.
inquirer
.prompt([
    {
        type: 'input',
        name: 'insideText',
        message: 'Please enter 1-3 characters for your logo.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color will your text be?',
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'What logo shape would you like?',
        choices : ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color will your shape be?',
    },
]).then(data => {
    fs.writeFile('./examples/sample-SVG-logo.svg', generateSVG(data), function (error) {
        error ? console.log(error) : console.log('SVG logo was successfully created!')
    })
});



