const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


describe('Server', () => {

    describe('Get', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({ error: 'Page not found' })
                })
                .end(done);
        });
    });

    describe('Get/Users', () => {
        it('should be user 1 in users response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({ name: 'user 1', age: 10 });
                })
                .end(done);

        });
    });
});


