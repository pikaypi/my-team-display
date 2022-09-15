const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Structure', () => {
        it('Should create an object with keys of name, id, email, and github', () => {
            // Arrange
            const name = 'John Doe';
            const id = 1234;
            const email = 'email@email.com';
            const github = 'username';
            const testEngineer = new Engineer(name, id, email, github);

            // Assert
            expect(testEngineer.name).toEqual(name);
            expect(testEngineer.id).toEqual(id);
            expect(testEngineer.email).toEqual(email);
            expect(testEngineer.github).toEqual(github);
        });
    });

    describe('Function', () => {
        it('Should have a getGithub method that returns the github profile of the employee', () => {
            // Arrange
            const testEngineer = new Engineer('John Doe', 1234, 'email@email.com', 'username');

            // Assert
            expect(testEngineer.getGithub).toEqual('username');
        });

        it('Should have a getRole method that returns "Engineer"', () => {
            // Arrange
            const testEngineer = new Engineer('John Doe', 1234, 'email@email.com', 'username');

            // Assert
            expect(testEngineer.getRole).toEqual('Engineer');
        });
    });
});