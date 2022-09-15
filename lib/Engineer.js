const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // The getGithub method
    getGithub() {
        return this.github;
    }

    // The overridden getRole method
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;