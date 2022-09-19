const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// Import Inquirer and File System and the template helper code
const inquirer = require('inquirer');
const fs = require('fs');
const template = require('../src/template')

class Roster {
    // The constructor takes in and stores an array of Employee objects
    constructor() {
        this.employeeList = [];
    }

    // The getManager method will initiate the user input prompts
    getManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: `What is the team manager's name?`,
                    name: 'name'
                },
                {
                    type: 'input',
                    message: `What is the team manager's employee id number?`,
                    name: 'id'
                },
                {
                    type: 'input',
                    message: `What is the team manager's email address?`,
                    name: 'email'
                },
                {
                    type: 'input',
                    message: `What is the team manager's office number?`,
                    name: 'officeNumber'
                }
            ])
            .then(response => {
                const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
                this.employeeList.push(newManager);
                this.addEmployee();
            })
    }

    // The getEngineer method will walk the user through the engineer prompts
    getEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: `What is the new engineer's name?`,
                    name: 'name'
                },
                {
                    type: 'input',
                    message: `What is the new engineer's employee ID number?`,
                    name: 'id'
                },
                {
                    type: 'input',
                    message: `What is the new engineer's email address?`,
                    name: 'email'
                },
                {
                    type: 'input',
                    message: `What is the new engineer's GitHub username?`,
                    name: 'github'
                }
            ])
            .then(response => {
                const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
                this.employeeList.push(newEngineer);
                this.addEmployee();
            })
    }

    // The getIntern method will walk the user through the intern prompts
    getIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: `What is the new intern's name?`,
                    name: 'name'
                },
                {
                    type: 'input',
                    message: `What is the new intern's employee ID number?`,
                    name: 'id'
                },
                {
                    type: 'input',
                    message: `What is the new intern's email address?`,
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'What school does the new intern attend?',
                    name: 'school'
                }
            ])
            .then(response => {
                const newIntern = new Intern(response.name, response.id, response.email, response.school);
                this.employeeList.push(newIntern);
                this.addEmployee();
            })
    }

    // The addEmployee method will ask the user if they would like to add another employee and then
    // direct the program to the correct prompts or to create the html file
    addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Would you like to add another employee?',
                    name: 'continue',
                    choices: ['Add an engineer', 'Add an intern', 'Create my roster']
                }
            ])
            .then(response => {
                if (response.continue === 'Add an engineer') {
                    this.getEngineer();
                } else if (response.continue === 'Add an intern') {
                    this.getIntern();
                } else {
                    this.createPage();
                }
            })
    }


    // The createPage method will take the employeeList created by the user and create the html page
    createPage() {
        fs.writeFile('index.html', template.generateHTML(this.employeeList), (err) =>
        err ? console.log(err) : console.log(`Successfully created html`))
    }
}

module.exports = Roster;