const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
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
];



function init(){
     return inquirer.prompt(questions).then((data) => {
        console.log(data)
     })
}

init();