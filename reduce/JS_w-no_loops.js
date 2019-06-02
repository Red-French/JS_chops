// JS with no loops!

// 1. while loop
// 2. for loop
// 3. for-of loop (no counter or comparison!)

// - NO LOOPING -
// 4. map (no counter, comparison, output array initialization, or pushing to output array)
// 5. reduce


function oodlify(s) {
    return s.replace(/[aeiou]/g, 'oodle');
}

const band = [
    'John',
    'Paul',
    'George',
    'Ringo',
];

let i = 0;
const len = band.length;
let output = [];

// 1. while-loop
while (i < len) {
    let item = band[i];
    let newItem = oodlify(item);
    output.push(newItem);
    i = i + 1;
}
console.log('while-loop: ', output)

console.log('')
console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')
console.log('')

// 2. for-loop
let output2 = [];

for (let i = 0; i < len; i = i + 1) {
    let item = band[i];
    let newItem = oodlify(item);
    output2.push(newItem);
}

console.log('for-loop: ', output2)

console.log('')
console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')
console.log('')

// 3. for-of loop

let output3 = [];

for (let item of band) {
    let newItem = oodlify(item);
    output3.push(newItem);
}

console.log('for-of loop: ', output3)

console.log('')
console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')
console.log('')

// 4. map (no looping)

const fellowship = [
    'frodo',
    'sam',
    'gandalf',
    'aragorn',
    'boromir',
    'legolas',
    'gimli',
];

function izzlify(s) {
    return s.replace(/[aeiou]+/g, 'izzle');
}

function oodlifyArray(band) {
    let output = [];
    for (let item of band) {
        let newItem = oodlify(item);
        output.push(newItem);
    }
    return output;
}

function izzlifyArray(band) {
    let output = [];
    for (let item of band) {
        let newItem = izzlify(item);
        output.push(newItem);
    }
    return output;
}

let bandoodle     = band.map(oodlify);
let floodleship   = fellowship.map(oodlify);
let bandizzle     = band.map(izzlify);
let fellowshizzle = fellowship.map(izzlify);

console.log('map - bandoodle: ', bandoodle);
console.log('map - floodleship: ', floodleship);
console.log('map - bandizzle:', bandizzle);
console.log('map - fellowshizzle: ', fellowshizzle);

console.log('')
console.log('---------------------------')
console.log('---------------------------')
console.log('---------------------------')
console.log('')

// 5. reduce (no looping)

const heroes = [
    {name: 'Hulk', strength: 90000},
    {name: 'Spider-Man', strength: 25000},
    {name: 'Hawk Eye', strength: 136},
    {name: 'Thor', strength: 100000},
    {name: 'Black Widow', strength: 136},
    {name: 'Vision', strength: 5000},
    {name: 'Scarlet Witch', strength: 60},
    {name: 'Mystique', strength: 120},
    {name: 'Namora', strength: 75000},
];

function greaterStrength(champion, contender) {
    return (contender.strength > champion.strength) ? contender : champion;
}

function addStrength(tally, hero) {
    return tally + hero.strength;
}

// let strongest = {strength: 0};
// for (let hero of heroes) {
//     if (hero.strength > strongest.strength) {
//         strongest = hero;
//     }
// }

// let combinedStrength = 0;
// for (let hero of heroes) {
//     combinedStrength += hero.strength;
// }

const strongestHero = heroes.reduce(greaterStrength, {strength: 0});
const combinedStrength = heroes.reduce(addStrength, 0);

console.log('reduce - strongestHero: ', strongestHero);
console.log('reduce - combinedStrength, ', combinedStrength);

// iterate only once over the array
function processStrength({strongestHero2, combinedStrength2}, hero) {
    return {
        strongestHero2: greaterStrength(strongestHero2, hero),
        combinedStrength2: addStrength(combinedStrength2, hero),
    };
}
const {strongestHero2, combinedStrength2} = heroes.reduce(processStrength, {strongestHero2: {strength: 0}, combinedStrength2: 0});
console.log('strongestHero2: ', {strongestHero2, combinedStrength2} )
