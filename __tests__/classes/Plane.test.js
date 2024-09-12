const Person = require('../../classes/Person')
const Plane = require('../../classes/Plane')
const { describe, expect, it, test } =  require('@jest/globals')

describe("Tests for Plane class.", () => {
    const instance = new Plane("Boieng", "Jamaica");
    test("company, origin, and destination are assigned to the correct value", () => {
        expects(instance.company).toBe("Boeing");
        expects(instance.origin.length).toBe(3);
        expects(instance.destination).toBe("Jamaica");
    })

    test("passengers array initializes as an empty array", () => {
        expects(instance.passengers).toEqual([]);
    })

    test("add a Person to the passengers array using addPassenger", () => {
        const person = new Person("henry", "london");

        instance.addPassenger(person);
        expect(instance.addPassenger).toEqual([person]);
    })
})