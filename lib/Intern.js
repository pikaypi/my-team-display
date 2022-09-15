const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // The getSchool method
    getSchool() {
        return this.school;
    }

    // The overridden getRole method
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;