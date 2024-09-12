const Bag = require('../../classes/Bag')
const Person = require('../../classes/Person')
const { describe, expect, it, test } =  require('@jest/globals')


describe("bag Suite", ()=>{
    test('can create instance of the bag',()=>{
        const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
        expect(newBag instanceof Bag).toBe(true)
    })

    test('weight and id assign correctly',()=>{
        const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
        expect(newBag.weight).toBe(10)
        expect(newBag.id).toBe(3)
    })

    test('owner initialized to null',()=>{
        const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
        expect(newBag.getOwner()).toBe(null)
    })

    test('verify you can get initial owner using getOwner',()=>{
        const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
        expect(newBag.getOwner()).toBe(null)
    })

    test('update owner with person is working properlly',()=>{
        const weight = 10
        const id = 3;
        const newBag = new Bag(weight, id)
        const person = new Person('john',20)
        newBag.assignOwner(person);
        expect(newBag.getOwner() instanceof Person).toBe(true)
    })
})
