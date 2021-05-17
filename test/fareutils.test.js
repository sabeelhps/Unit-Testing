const chai = require('chai');
const mocha = require('mocha');
const { calculateFare } = require('../fareutils');

const expect = chai.expect;


describe('fareutils', function () {
    
    it('expect fare to be 50 for 0km ,0min', () => {
        let fare = calculateFare(0, 0);
        expect(fare).to.equal(50);
    })
    it('expect fare to be 100 for 10km ,5min', () => {
        let fare = calculateFare(10, 5);
        expect(fare).to.equal(100);
    })

    it('expect fare to be 110 for 10km , 20min', () => {
        let fare = calculateFare(10, 20);
        expect(fare).to.equal(110);
    })
})