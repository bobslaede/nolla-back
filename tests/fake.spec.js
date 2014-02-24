var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app');

app.listen(process.env.PORT, process.env.IP);

describe('fake module', function () {
    
    it('should be fake', function (done) {
        request(app)
            .get('/echo/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});