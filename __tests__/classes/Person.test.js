const Person = require("../../classes/Person")
const Bag = require("../../classes/Bag")
const { describe, expect, it, test } =  require('@jest/globals')

describe("", () =>{
    test("Test that you can create an instance of the Person class", ()=>{
        const person = new Person("henry", "london");
        expect(person instanceof Person).toBe(true);
    })

    test("Test that the name and destination have been assigned correctly.", ()=>{
        const person = new Person("henry", "london");
        expect(person.name).toBe("henry")
        expect(person.destination).toBe("london")
    })

    test("Test that bags initializes as an empty array.", ()=>{
        const person = new Person("henry", "london");
        expect(person.bag).toEqual([]);
    })

    test("Test that addBag() adds a bag to the bags array", ()=>{
        const person = new Person("henry", "london");
        const newBag = new Bag(25, 4);

        person.addBag(newBag);
        expect(person.getBags()).toEqual([newBag]);
    })

})