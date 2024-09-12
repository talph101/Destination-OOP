const { describe, expect, it, test } =  require('@jest/globals')
const Airport = require('../../classes/Airport')
const Plane = require('../../classes/Plane')
describe('aAirport suite',()=>{
    const newAirport = new Airport('dallas lovefield')
    test("verify that you have included all of the required components", ()=>{
        expect(newAirport.name).toBe('dallas lovefield')
        expect(typeof newAirport.getPlanes()).toEqual('object')
    })

    test('Test that `airportCode` is the correct value',()=>{
        expect(Airport.airportCode).toBe('JFK')
    })

    test('Check that the `planes` array initializes as an empty array.', ()=>{
        expect(newAirport.getPlanes()).toEqual([])
    })

    test('Verify that you can add `Plane` objects to the planes array using `addPlane`', ()=>{
        const newPlane = new Plane('spirit', 'dallas')
        newAirport.addPlane(newPlane)
        expect(newAirport.getPlanes()).toEqual([newPlane])
    })
})