const fs = require('fs');
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../lib/animals.js');
const { animals } = require('../data/animals');

jest.mock('fs');

test("creates an animal object", () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "adlkgh13klj" },
        animals);
    
        expect(animal.name).toBe('Darlene');
        expect(animal.id).toBe('adlkgh13klj');
});

test("filters by query", () => {
    const startingAnimals = [
        {
            id: '3',
            name: 'Chelsea',
            species: 'Cheetah',
            diet: 'carnivore',
            personalityTraits: ["quirky", 'rash']
        },
        {
            id: '5',
            name: 'Salma',
            species: 'Salmander',
            diet: 'omnivore',
            personalityTraits: ["hungry"]
        },
    ];

    const updatedAnimals = filterByQuery( { species: 'Cheetah' }, startingAnimals);
    expect(updatedAnimals.length).toEqual(1);

});

test("finds by id", () => {
    const startingAnimals = [
        {
            id: '3',
            name: 'Chelsea',
            species: 'Cheetah',
            diet: 'carnivore',
            personalityTraits: ["quirky", 'rash']
        },
        {
            id: '5',
            name: 'Salma',
            species: 'Salmander',
            diet: 'omnivore',
            personalityTraits: ["hungry"]
        }
    ];

    const result = findById("3", startingAnimals);

    expect(result.name).toBe("Chelsea");
});

test("validates personality traits", () => {
    const animal = {
        id: '3',
        name: 'Chelsea',
        species: 'Cheetah',
        diet: 'carnivore',
        personalityTraits: ["quirky", 'rash']
    };
    
    const invalidAnimal =
    {
        id: '3',
        name: 'Chelsea',
        species: 'Cheetah',
        diet: 'carnivore',
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});