const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Structure', () => {
        it('Should create an object with keys of name, id, and email', () => {
            // Arrange
            const name = 'John Doe';
            const id = 1234;
            const email = 'mail@mail.com';
            const testEmployee = new Employee(name, id, email);

            // Assert
            expect(testEmployee.name).toEqual(name);
            expect(testEmployee.id).toEqual(id);
            expect(testEmployee.email).toEqual(email);
        });
    });

    describe('Function', () => {
        it('Should have a getName method that returns the name of the employee', () => {
            // Arrange
            const testEmployee = new Employee('John Doe', 1234, 'mail@mail.com');

            // Assert
            expect(testEmployee.getName()).toEqual('John Doe');
        });

        it('Should have a getId method that returns the id of the employee', () => {
            // Arrange
            const testEmployee = new Employee('John Doe', 1234, 'mail@mail.com');

            // Assert
            expect(testEmployee.getId()).toEqual(1234);
        });

        it('Should have a getEmail method that returns the email address of the employee ', () => {
            // Arrange
            const testEmployee = new Employee('John Doe', 1234, 'mail@mail.com');

            // Assert
            expect(testEmployee.getEmail()).toEqual('mail@mail.com');
        });

        it('Should have a getRole method that returns the role of the employee', () => {
            // Arrange
            const testEmployee = new Employee('John Doe', 1234, 'mail@mail.com');

            // Assert
            expect(testEmployee.getRole()).toEqual('Employee');
        });
    })
});