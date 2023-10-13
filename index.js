// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what's the title for README?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license: ",
        choices: [
            'Apache 2.0 License',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'IBM Public License Version 1.0',
            'ISC',
            'MIT'
        ]
    },
    {
        type: 'input',
        name: 'description',
        message: "the description of this repository: ",
    },
    {
        type: 'input',
        name: 'installation',
        message: "the installation for this application: ",
    },
    {
        type: 'input',
        name: 'usage',
        message: "the usage information for this application: ",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "the contribution for this application: ",
    },
    {
        type: 'input',
        name: 'tests',
        message: "the tests information for this application: ",
    },
    {
        type: 'input',
        name: 'username',
        message: "Your github username: ",
    },
    {
        type: 'input',
        name: 'email',
        message: "Your email address: ",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err)
            console.error(err);
        else {
            console.log(`${fileName} file written successfully\n`);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
        return generateMarkdown(answers);
    })
    .then((data)=>{
        writeToFile('made_README.md', data);
    })
    .catch((error) => console.error(error));
}

// Function call to initialize app
init();
