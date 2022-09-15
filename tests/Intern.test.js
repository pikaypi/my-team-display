const { it } = require('node:test');
const { describe } = require('yargs');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Structure', () => {
        it('Should create an object with keys of name, id, email, and school', () => {
            // Arrange
            const name = 'John Doe';
            const id = 1234;
            const email = 'email@email.com';
            const school = 'UNH';
            const testIntern = new Intern(name, id, email, school);

            // Assert
            expect(testIntern.name).toEqual(name);
            expect(testIntern.id).toEqual(id);
            expect(testIntern.email).toEqual(email);
            expect(testIntern.school).toEqual(school);
        });
    });

    describe('Function', () => {
        it('Should have a getSchool method that returns the school of the intern', () => {
            // Arrange
            const testIntern = new Intern('John Doe', 1234, 'email@email.com', 'UNH');

            // Assert
            expect(testIntern.getSchool()).toEqual('UNH');
        });

        it('Should have a getRole method that returns "Intern"', () => {
            // Arrange
            const testIntern = new Intern('John Doe', 1234, 'email@email.com', 'UNH');

            // Assert
            expect(testIntern.getRole()).toEqual('Intern');
        });
    });
})