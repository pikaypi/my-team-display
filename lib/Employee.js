class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;        
    }

    // The getName method
    getName() {
        return this.name;
    }

    // The getId method
    getId() {
        return this.id;
    }

    // The get email method
    getEmail() {
        return this.email;
    }

    // The get role method
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;