const fs = require('fs');
const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../lib/zookeepers');
const { zookeepers } = require('../data/zookeepers');

jest.mock('fs');

test("creates zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Sydney", age: 26, favoriteAnimal: "sloth"}, zookeepers
    );

    expect(zookeeper.name).toBe("Sydney");
    expect(zookeeper.age).toBe(26);
    expect(zookeeper.favoriteAnimal).toBe("sloth");
});

test("filters by query", () => {
    const startingZookeepers = [
        {
            age: '33',
            name: 'Chelsea',
            favoriteAnimal: "cheetah"
        
        },
        {
            age: '25',
            name: 'Salma',
            favoriteAnimal: "salamander"
        }
    ];

    const updatedZookeepers = filterByQuery( { favoriteAnimal: 'salamander' }, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(1);
});

test("filters by id", () => {
    const startingZookeepers = [
        {
            id: '33',
            name: 'Chelsea',
            favoriteAnimal: "cheetah"
        
        },
        {
            id: '25',
            name: 'Salma',
            favoriteAnimal: "salamander"
        }
    ];

    const result = findById( "33", startingZookeepers);
    expect(result.name).toBe('Chelsea');
});

test("validates personality traits", () => {
    const zookeeper = { name: "Sydney", age: 26, favoriteAnimal: "sloth"};
    const invalidZookeeper = { name: "Sydney", age: 26 };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});