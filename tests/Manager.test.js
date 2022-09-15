const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Structure', () => {
        it('Should create an object with keys of name, id, email, and office number', () => {
            // Arrange
            const name = 'John Doe';
            const id = 1234;
            const email = 'email@email.com';
            const officeNumber = 1;

            // Act
            const testManager = new Manager(name, id, email, officeNumber);

            // Assert
            expect(testManager.name).toEqual(name);
            expect(testManager.id).toEqual(id);
            expect(testManager.email).toEqual(email);
            expect(testManager.officeNumber).toEqual(officeNumber);
        });
    });

    describe('Function', () => {
        it('Should have a getOfficeNumber method that returns the office number of the manager', () => {
            // Arrange
            const testManager = new Manager('John Doe', 1234, 'email@email.com', 1);

            // Assert
            expect(testManager.getOfficeNumber()).toEqual(1);
        });

        it('Should have a getRole method that returns "Manager"', () => {
            // Arrange
            const testManager = new Manager('John Doe', 1234, 'email@email.com', 1);

            // Assert
            expect(testManager.getRole()).toEqual('Manager');
        });
    });
});