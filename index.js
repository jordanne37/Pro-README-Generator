// TODO: Create an array of questions for user input
// the title of my project
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName), data);

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
     [
        {
            type: "input",
            name: "title",
            message: "What is your projects name?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose license",
            choices: ["MIT", "GPG2.0", "N/A", "Apache 2.0 License"],
    
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Usage",
        },
        {
            type: "input",
            name: "contributing",
            message: "",
        },
        {
            type: "input",
            name: "tests",
            message: "",
        },
        {
            type: "input",
            name: "questions",
            message: "Enter Github username",
        },
        {
            type: "input",
            name: "email",
            message: "Enter email address",
        },
        
    ]).then((answers)=>{
        writeToFile(`README.md`, markdown(answers))
    })
    

 }

// Function call to initialize app
init();