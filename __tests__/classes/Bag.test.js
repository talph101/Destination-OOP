const Bag = require('../../classes/Bag')
const Person = require('../../classes/Person')
const { describe, expect, it, test } =  require('@jest/globals')


describe("bag Suite", ()=>{
    const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
    test('can create instance of the bag',()=>{
        expect(newBag instanceof Bag).toBe(true)
    })

    test('weight and id assign correctly',()=>{
        expect(newBag.weight).toBe(10)
        expect(newBag.id).toBe(3)
    })

    test('owner initialized to null',()=>{
        expect(newBag.getOwner()).toBe(null)
    })

    test('verify you can get initial owner using getOwner',()=>{
        expect(newBag.getOwner()).toBe(null)
    })

    test('update owner with person is working properlly',()=>{
        const person = new Person('john',20)
        newBag.assignOwner(person);
        expect(newBag.getOwner() instanceof Person).toBe(true)
    })
})
