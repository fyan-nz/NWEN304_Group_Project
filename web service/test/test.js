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

// test the login endpoint
describe('login', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/login?email=abc123@email.com&password=abc123')
                .end((err, res) => {
                    res.should.have.status(200);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "200"', (done) => {
            assert(result === 200)
            done();
        })
    })
})

// test the login endpoint
describe('login (wrong password)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/login?email=abc123@email.com&password=abc')
                .end((err, res) => {
                    res.should.have.status(401);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "401"', (done) => {
            assert(result === 401)
            done();
        })
    })
})

// test the login endpoint
describe('login (email missing)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/login?password=abc123')
                .end((err, res) => {
                    res.should.have.status(400);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "400"', (done) => {
            assert(result === 400)
            done();
        })
    })
})

// test the login endpoint
describe('login (password missing)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/login?email=abc123@email.com')
                .end((err, res) => {
                    res.should.have.status(400);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "400"', (done) => {
            assert(result === 400)
            done();
        })
    })
})

// test the register endpoint
describe('register', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // random email
        const email = `Myemail${Math.floor(Math.random() * 1000) + 1}@email.com`;

        // password
        const password = 'Mypassword123';

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post(`/api/register?email=${email}&password=${password}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "200"', (done) => {
            assert(result === 200);
            done();
        })
    })
})

// test the register endpoint
describe('register (existing account)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/register?email=abc123@email.com&password=abc123')
                .end((err, res) => {
                    res.should.have.status(401);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "401"', (done) => {
            assert(result === 401);
            done();
        })
    })
})

// test the registration endpoint
describe('register (email missing)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/register?password=abc123')
                .end((err, res) => {
                    res.should.have.status(400);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "400"', (done) => {
            assert(result === 400)
            done();
        })
    })
})

// test the registration endpoint
describe('register (password missing)', () => {
    describe('POST /', () => {
        // stores the result of the request
        let result = {};

        // get the result from the server
        before((done) => {
            chai.request(app)
                .post('/api/register?email=abc123@email.com')
                .end((err, res) => {
                    res.should.have.status(400);
                    result = res.status;
                    done();
                })
        })

        // assert that a valid value was returned
        it('response code should be "400"', (done) => {
            assert(result === 400)
            done();
        })
    })
})