# Reduce
The reducer function is the first parameter passed to reduce(). The accumulator represents a ‘carry’ value. It contains whatever was returned last time the reducer function was called.  The second parameter is an initial value to kick off the accumulator (typically, 0).

    function myReducer(accumulator, arrayElement) {
        // Code to do something goes here
    }

example:

    function addScores(runningTotal, popularity) {
        return runningTotal + popularity;
    }

    const scoresTotal = popularityScores.reduce(addScores, 0);

simple example:

    function add(a, b) {
        return a + b;
    }


The power of .reduce() is the accumulator and arrayElement aren't required to be the same type. For the 'add' fxn above, a and b are numbers (the same type), but again, this isn't required. The accumulator type can be different from the array elements.

For example, the accumulator could be a string and the array contain numbers:


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


## Other useful uses of reduce():
1. Convert an array to an object
2. Unfold to a larger array
3. Make two calculations in one traversal
4. Combine mapping and filtering into one pass
5. Run asynchronous functions in sequence

### 1. Convert an array to an object
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
      // ⦘ {
      //     "glestrade": {
      //         "username":    "glestrade",
      //         "displayname": "Inspector Lestrade",
      //         "email":       "glestrade@met.police.uk",
      //         "authHash":    "bdbf9920f42242defd9a7f76451f4f1d",
      //          "lastSeen":    "2019-05-13T11:07:22+00:00"
      //     },
      //     "mholmes": {
      //         "username":    "mholmes",
      //         "displayname": "Mycroft Holmes",
      //         "email":       "mholmes@gov.uk",
      //         "authHash":    "b4d04ad5c4c6483cfea030ff4e7c70bc",
      //          "lastSeen":    "2019-05-10T11:21:36+00:00"
      //     },
      //     "iadler":{
      //         "username":    "iadler",
      //         "displayname": "Irene Adler",
      //         "email":       null,
      //         "authHash":    "319d55944f13760af0a07bf24bd1de28",
      //          "lastSeen":    "2019-05-17T11:12:12+00:00"
      //     }
      // }

### 2. Unfold a small array to a larger array
Plain text lines read into an array.  Split each line by commas and have one larger list of names.

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
      // ⦘ [
      //   "Inspector Algar",
      //   "Inspector Bardle",
      //   "Mr. Barker",
      //   "Inspector Barton",
      //   "Inspector Baynes",
      //   "Inspector Bradstreet",
      //   "Inspector Sam Brown",
      //   "Monsieur Dubugue",
      //   "Birdy Edwards",
      //   "Inspector Forbes",
      //   "Inspector Forrester",
      //   "Inspector Gregory",
      //   "Inspector Tobias Gregson",
      //   "Inspector Hill",
      //   "Inspector Stanley Hopkins",
      //   "Inspector Athelney Jones"
      // ]

### 3. Make two calculations in one traversal
reduce() allows returning any type, so you can return an object, for example:

Instead of this:

    const readings = [0.3, 1.2, 3.4, 0.2, 3.2, 5.5, 0.4];
    const maxReading = readings.reduce((x, y) => Math.max(x, y), Number.MIN_VALUE);
    const minReading = readings.reduce((x, y) => Math.min(x, y), Number.MAX_VALUE);

    console.log({minReading, maxReading});
    // ⦘ {minReading: 0.2, maxReading: 5.5}

** Try this: **

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
    // ⦘ {minReading: 0.2, maxReading: 5.5}

### 4. Combine mapping and filtering into one pass
Using the peopleArr from example 1, find the most recent login, excluding people without an email address. One way to do this is with three operations:

1. Filter out entries without email
2. Extract lastSeen property
3. Find maximum value

Putting that together:

    function notEmptyEmail(x) {
       return (x.email !== null) && (x.email !== undefined);
    }

    function getLastSeen(x) {
        return x.lastSeen;
    }

    function greater(a, b) {
        return (a > b) ? a : b;
    }

    const peopleWithEmail = peopleArr.filter(notEmptyEmail);
    const lastSeenDates   = peopleWithEmail.map(getLastSeen);
    const mostRecent      = lastSeenDates.reduce(greater, '');

    console.log(mostRecent);
      // ⦘ 2019-05-13T11:07:22+00:00

** By modifying the reducer callback, everything can be done in one pass: **

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
      // ⦘ 2019-05-13T11:07:22+00:00

### 5. Run asynchronous functions in sequence
With reduce(), promises can be run in sequence rather than parallel.  For this to work, pass a Promise as the initial value using Promise.resolve(). It will resolve immediately (that’s what Promise.resolve() does). Then, the first API call will run immediately.

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

        // ⦘ {glestrade: [ … ], mholmes: [ … ], iadler: [ … ]}
