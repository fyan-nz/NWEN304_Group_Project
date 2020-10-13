/**
 * code tests.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, mongoose } = require('../server');

const assert = require('assert');
const { expect } = require('chai');

// configure chai
chai.use(chaiHttp);
chai.should();

// wait until a database connection is esstablished
describe('connect', () => {
    before((done) => {
        mongoose.connection.once('open', () => {
            done();
        })
    })
})

// test the t-shirts endpoint
describe('t-shirts', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/t-shirts')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the pants endpoint
describe('pants', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/pants')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the hoodies endpoint
describe('hoodies', () => {
    // stores the result of the request
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/hoodies')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the suits endpoint
describe('suits', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/suits')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the underwear endpoint
describe('underwear', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/underwear')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the socks endpoint
describe('socks', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/socks')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})

// test the accessories endpoint
describe('accessories', () => {
    describe('GET /', () => {
        // stores the result of the request
        let objects = [];

        // get the result from the server
        before((done) => {
            chai.request(app)
                .get('/api/products/accessories')
                .end((err, res) => {
                    res.should.have.status(200);
                    objects = res.body;
                    done();
                })
        })

        // assert that a valid value was returned
        it('should receive an array of objects', (done) => {
            assert(Array.isArray(objects));
            assert(objects.length > 0)
            done();
        })
    })
})