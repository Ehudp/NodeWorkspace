const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');

});

it('should async add two numbers', (done) => {
    var res = utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    var res = utils.asyncSquare(3, (res) => {
        expect(res).toBe(9).toBeA('number');
        done();
    });
});



it('should square a number', () => {
    var res = utils.square(3, 3);
    expect(res).toBe(9).toBeA('number');

});

/* it('should expect some values', () => {
    expect({
        name: 'test',
        age: 25,
        location: "israel"
    }).toInclude({ age: 25 });
});
 */

it('should verify first name and last name', () => {

    var user = {
        // firstName: 'Hello',
        // lastName: 'World',
        age: 25,
        location: "israel"
    };

    var res = utils.setName(user, "Hello World");

    expect(res).toInclude({
        firstName: 'Hello',
        lastName: 'World',
    })
});
