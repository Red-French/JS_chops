// *************** Create new JSON obj using Recursion ***************

let categories = [
  {id: 'animals',
    parent: 'null'},
  {id: 'mammals',
    parent: 'animals'},
  {id: 'cats',
    parent: 'mammals'},
  {id: 'dogs',
    parent: 'mammals'},
  {id: 'chihuahua',
    parent: 'dogs'},
  {id: 'labrador',
    parent: 'dogs'},
  {id: 'persian',
    parent: 'cats'},
  {id: 'siamese',
    parent: 'cats'}
];

let makeTree = {
    'factorial': (categories, parent) => {  // pass in obj & parent of category wanted
    let node = {};
    categories
      .filter(c => c.parent === parent)  // loop obj and get parents matching parent passed in
      .forEach(c =>  // loop through matching parents
        node[c.id] = makeTree.factorial(categories, c.id))  // pass in obj & id of matching parents; found obj saved to node obj
      return node;
    }
}

console.log(JSON.stringify(makeTree.factorial(categories, 'cats'), null, 2));  // parameters: obj to convert, replacer, space
console.log(makeTree.valueOf());


// *************** Fib sum & resulting array ***************

let answer, twoback = 0, prevnum = 1;
let fibarray = [0, 1];

var fibo = (num) => {
    if(num <= 0) {  // the stop
      return console.log(answer, fibarray);
    } else {
      answer = twoback + prevnum;
      fibarray.push(answer);
      twoback = prevnum;
      prevnum = answer;
      fibo(num-1);  // RECURSION
    }
};
fibo(8);


// *************** Factorial of 6 (6*5*4*3*2*1) ***************

var param = 6;
var thisAnswer = param;

function recursion(num) {
  if(num >= 2) {  // condition for stop
    thisAnswer *= (num-1);
    recursion(num-1);  // RECURSION
  }
  else {
    console.log("Factorial of " + param + " is " + thisAnswer);
    return;  // the stop
  }
}
recursion(param);


// *************** Factorial of 6 (6*5*4*3*2*1) ***************

var factorial = function(number) {
  if (number <= 0) { // the stop
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));  // RECURSION
  }
};
console.log("Factorial of 6 = ", factorial(6));


// *************** Countdown from 10 ***************

var countdown = function(value) {
    if (value > 0) {  // condition for stop
        console.log(value);
        return countdown(value - 1);  // RECURSION
    } else {
        return value;  // the stop
    }
};
countdown(10);
