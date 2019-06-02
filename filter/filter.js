// 1. Find all the female heroes and...
// 2. Find all the heroes with a strength greater than 500

const heroes = [
    {name: 'Hulk', strength: 90000, sex: 'm'},
    {name: 'Spider-Man', strength: 25000, sex: 'm'},
    {name: 'Hawk Eye', strength: 136, sex: 'm'},
    {name: 'Thor', strength: 100000, sex: 'm'},
    {name: 'Black Widow', strength: 136, sex: 'f'},
    {name: 'Vision', strength: 5000, sex: 'm'},
    {name: 'Scarlet Witch', strength: 60, sex: 'f'},
    {name: 'Mystique', strength: 120, sex: 'f'},
    {name: 'Namora', strength: 75000, sex: 'f'},
];

// plain for-loop
let femaleHeroes = [];
for (let hero of heroes) {
    if (hero.sex === 'f') {
        femaleHeroes.push(hero);
    }
}

let superhumans = [];
for (let hero of heroes) {
    if (hero.strength >= 500) {
        superhumans.push(hero);
    }
}


// filter
function isFemaleHero(hero) {
    return (hero.sex === 'f');
}

function isSuperhuman(hero) {
    return (hero.strength >= 500);
}

const femaleHeroesFilter = heroes.filter(isFemaleHero);
const superhumans2Filter  = heroes.filter(isSuperhuman);

console.log(femaleHeroesFilter)
console.log(superhumans2Filter)


// find and return the first item that matches
function isBlackWidow(hero) {
    return (hero.name === 'Black Widow');
}

const blackWidow = heroes.find(isBlackWidow);
console.log(blackWidow)
