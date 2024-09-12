const Airport = require('./Airport')

class Plane {
    #passengers

    constructor(company, destination){
        this.company = company;
        this.destination = destination;
        this.#passengers = [];
        this.origin =  Airport.airportCode;
    }

    getPassengers() {
        return this.#passengers;
    }

    addPassenger(passenger) {
        this.#passengers.push(passenger);
    }


}


module.exports = Plane;