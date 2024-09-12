const Person = require('../../classes/Person')
const Plane = require('../../classes/Plane')
const { describe, expect, it, test } =  require('@jest/globals')

describe("Tests for Plane class.", () => {
    const instance = new Plane("Boeing", "Jamaica");
    test("company, origin, and destination are assigned to the correct value", () => {
        expect(instance.company).toBe("Boeing");
        expect(instance.origin.length).toBe(3);
        expect(instance.destination).toBe("Jamaica");
    })

    test("passengers array initializes as an empty array", () => {
        expect(instance.getPassengers()).toEqual([]);
    })

    test("add a Person to the passengers array using addPassenger", () => {
        const person = new Person("henry", "london");

        instance.addPassenger(person);
        expect(instance.getPassengers()).toEqual([person]);
    })
})