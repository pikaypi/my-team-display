const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    // The getSchool method
    getSchool() {

    }

    // The overridden getRole method
    getRole() {

    }
}

module.exports = Intern;