function fizzBuzzReducer(acc, element) {
    if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
    if (element % 5 === 0) return `${acc}Fizz\n`;
    if (element % 3 === 0) return `${acc}Buzz\n`;

    return `${acc}${element}\n`;
}

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15
];

console.log(nums.reduce(fizzBuzzReducer, ''));

console.log();
console.log('------------------');
console.log('Convert an array to an object');
console.log('------------------');
console.log();

// Convert an array to an object
const peopleArr  = [
    {
        username:    'glestrade',
        displayname: 'Inspector Lestrade',
        email:       'glestrade@met.police.uk',
        authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
        lastSeen:    '2019-05-13T11:07:22+00:00',
    },
    {
        username:    'mholmes',
        displayname: 'Mycroft Holmes',
        email:       'mholmes@gov.uk',
        authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
        lastSeen:    '2019-05-10T11:21:36+00:00',
    },
    {
        username:    'iadler',
        displayname: 'Irene Adler',
        email:       null,
        authHash:    '319d55944f13760af0a07bf24bd1de28',
        lastSeen:    '2019-05-17T11:12:12+00:00',
    },
];

function keyByUsernameReducer(acc, person) {
    return {...acc, [person.username]: person};
}
const peopleObj = peopleArr.reduce(keyByUsernameReducer, {});
console.log(peopleObj);

console.log();
console.log('------------------');
console.log('Unfold a small array to a larger array');
console.log('------------------');
console.log();

const fileLines = [
    'Inspector Algar,Inspector Bardle,Mr. Barker,Inspector Barton',
    'Inspector Baynes,Inspector Bradstreet,Inspector Sam Brown',
    'Monsieur Dubugue,Birdy Edwards,Inspector Forbes,Inspector Forrester',
    'Inspector Gregory,Inspector Tobias Gregson,Inspector Hill',
    'Inspector Stanley Hopkins,Inspector Athelney Jones'
];

function splitLineReducer(acc, line) {
    return acc.concat(line.split(/,/g));
}
const investigators = fileLines.reduce(splitLineReducer, []);
console.log(investigators);

console.log();
console.log('------------------');
console.log('Make two calculations in one traversal');
console.log('------------------');
console.log();

const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];

function minMaxReducer(acc, reading) {
    return {
        minReading: Math.min(acc.minReading, reading),
        maxReading: Math.max(acc.maxReading, reading),
    };
}
const initMinMax = {
    minReading: Number.MAX_VALUE,
    maxReading: Number.MIN_VALUE,
};

const minMax = readings.reduce(minMaxReducer, initMinMax);

console.log(minMax);

console.log();
console.log('------------------');
console.log('Combine mapping and filtering into one pass');
console.log('------------------');
console.log();

function notEmptyEmail(x) {
   return (x.email !== null) && (x.email !== undefined);
}

function greater(a, b) {
    return (a > b) ? a : b;
}
function notEmptyMostRecent(currentRecent, person) {
    return (notEmptyEmail(person))
        ? greater(currentRecent, person.lastSeen)
        : currentRecent;
}

const mostRecent = peopleArr.reduce(notEmptyMostRecent, '');

console.log(mostRecent);


console.log();
console.log('------------------');
console.log('Run asynchronous functions in sequence');
console.log('------------------');
console.log();

function fetchMessages(username) {
    return fetch(`https://example.com/api/messages/${username}`)
        .then(response => response.json());
}

function getUsername(person) {
    return person.username;
}

async function chainedFetchMessages(p, username) {
    // In this function, p is a promise. We wait for it to finish,
    // then run fetchMessages().
    const obj  = await p;
    const data = await fetchMessages(username);
    return { ...obj, [username]: data};
}

const msgObj = peopleArr
    .map(getUsername)
    .reduce(chainedFetchMessages, Promise.resolve({}))
    .then(console.log);
    
