const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    // The overridden getRole method
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;