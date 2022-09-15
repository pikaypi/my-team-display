const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // The getOfficeNumber method
    getOfficeNumber() {
        return this.officeNumber;
    }

    // The overridden getRole method
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;