const victorianSlang = [
    {
        term: 'doing the bear',
        found: true,
        popularity: 108,
    },
    {
        term: 'katterzem',
        found: false,
        popularity: null,
    },
    {
        term: 'bone shaker',
        found: true,
        popularity: 609,
    },
    {
        term: 'smothering a parrot',
        found: false,
        popularity: null,
    },
    {
        term: 'damfino',
        found: true,
        popularity: 232,
    },
    {
        term: 'rain napper',
        found: false,
        popularity: null,
    },
    {
        term: 'donkey’s breakfast',
        found: true,
        popularity: 787,
    },
    {
        term: 'rational costume',
        found: true,
        popularity: 513,
    },
    {
        term: 'mind the grease',
        found: true,
        popularity: 154,
    },

];


// NOT using reduce (imperative loop)

let popularitySum = 0;
let itemsFound = 0;
const len = victorianSlang.length;
let item = null;
for (let i = 0; i < len; i++) {
    item = victorianSlang[i];
    if (item.found) {
        popularitySum = item.popularity + popularitySum;
        itemsFound = itemsFound + 1;
    }
}
let averagePopularity = popularitySum / itemsFound;
console.log("1 - Average popularity:", averagePopularity);


// 1. filter, map, and sum
  // Find the items that are in the Google Books collection. For that, we can use .filter().
  // Extract the popularity scores. We can use .map() for this.
  // Calculate the sum of the scores. Our old friend .reduce() is a good candidate here.
  // calculate the average.

  function isFound(item) {
    return item.found;
  };

  function getPopularity(item) {
      return item.popularity;
  }

  function addScores(runningTotal, popularity) {
      return runningTotal + popularity;
  }

  // Filter out terms not in books
  const foundSlangTerms = victorianSlang.filter(isFound);

  // Extract popularity scores
  const popularityScores = foundSlangTerms.map(getPopularity);

  // Add scores; second parameter tells reduce to start the total at zero
  const scoresTotal = popularityScores.reduce(addScores, 0);

  // calc average
  averagePopularity = scoresTotal / popularityScores.length;
  console.log("2 - Average popularity:", averagePopularity);


// 2. multiple accumulator values

// use an object to keep track of multiple values in a single return value
function addScores({totalPopularity, itemCount}, popularity) {
    return {
        totalPopularity: totalPopularity + popularity,
        itemCount:       itemCount + 1,
    };
}

const initialInfo    = {totalPopularity: 0, itemCount: 0};
const popularityInfo = victorianSlang.filter(isFound)
    .map(getPopularity)
    .reduce(addScores, initialInfo);

// average and display
const {totalPopularity, itemCount} = popularityInfo;
averagePopularity = totalPopularity / itemCount;
console.log("3 - Average popularity:", averagePopularity);


// 3. point-free function composition

const filter  = p => a => a.filter(p);
const map     = f => a => a.map(f);
const prop    = k => x => x[k];
const reduce  = r => i => a => a.reduce(r, i);
const compose = (...fns) => (arg) => fns.reduceRight((arg, fn) => fn(arg), arg);

// The blackbird combinator (https://jrsinclair.com/articles/2019/compose-js-functions-multiple-parameters)
const B1 = f => g => h => x => f(g(x))(h(x));

// create a sum function that adds all items of array together
const sum = reduce((a, i) => a + i)(0);

const length = a => a.length;

// function to divide one number by another
const div = a => b => a / b;

// use compose() to piece function together using the small helper functions
// with compose(), you read from the bottom up
const calcPopularity = compose(
    B1(div)(sum)(length),
    map(prop('popularity')),
    filter(prop('found')),
);

averagePopularity = calcPopularity(victorianSlang);
console.log("4 - Average popularity:", averagePopularity);


// 4. single pass with cumulative average calculation

function averageScores({avg, n}, slangTermInfo) {
    if (!slangTermInfo.found) {
        return {avg, n};
    }
    return {
        avg: (slangTermInfo.popularity + n * avg) / (n + 1),
        n:   n + 1,
    };
}

// average and display
const initialVals       = {avg: 0, n: 0};
averagePopularity = victorianSlang.reduce(averageScores, initialVals).avg;
console.log("5 - Average popularity:", averagePopularity);
