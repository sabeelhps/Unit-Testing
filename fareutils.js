const fareInfo = {
    fixed: 50,
    minKm: 5,
    perKm: 10,
    freeMin: 15,
    perMin:2
}

const calculateFare = (km,min) => {
    
    let fare = fareInfo.fixed;

    fare += (km > fareInfo.minKm) ? (km - fareInfo.minKm) * fareInfo.perKm : 0;
    fare += (min > fareInfo.freeMin) ? (min - fareInfo.freeMin) * fareInfo.perMin : 0;

    return fare;
}

module.exports = {fareInfo, calculateFare};