const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// Import Inquirer
const inquirer = require('inquirer');

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
                },
                {
                    type: 'list',
                    message: 'Would you like to add another employee?',
                    name: 'continue',
                    choices: ['Yes, add another employee', 'No, create my roster']
                }
            ])
            .then(response => {
                const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
                this.employeeList.push(newManager);
                if (response.continue === 'Yes, add another employee') {
                    console.log(this.employeeList)
                    this.addEmployee()
                } else {
                    this.createPage()
                }
            })
    }

    // The addEmployee method will lead the user through the prompts to add an engineer or intern
    addEmployee() {
        console.log('Add another employee');
    }

    // The createPage method will take the user's input and create the html page to display the roster
    createPage() {
        console.log('Create html file');
    }
}

module.exports = Roster;