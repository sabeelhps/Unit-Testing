const mocha = require('mocha');
const chai = require('chai');
const request = require('request');

const app = require('../server');


const expect = chai.expect;

let server;

describe('server', () => {

    before((done) => {
        server=app.listen(3000,done);
    })

    it('rate should be correct', (done) => {
        request.get('http://localhost:3000/rates', (err, res, body) => {
            console.log(body);
            const rates = JSON.parse(body);
            expect(rates.fixed).to.equal(50);
            done()
        })  
    })

    after(() => {
        server.close();
    })

})