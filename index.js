const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG')

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



