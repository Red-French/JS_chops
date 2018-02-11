// SELF-DEFINING FUNCTION (INSTANCE IN A CLOSURE)
let importantVar;

function x () {
  console.log('i am x, sr');

  // PREP WORK
  let importantVar = arguments[0];

  // rewrite function
  x = () => {
    console.log('i am x, jr with a ' + importantVar);
   }
}

x("hammer")
x()
x()


// SELF-DEFINING FUNCTION RETURNING A CACHED INSTANCE
function Mission () {
  const instance = this;  // cache w/ closure for privacy

  // PREPARATORY WORK (only done first time)
  this.start_time = arguments[0];
  this.importance = arguments[1];

  Mission = function () {
    return instance;
  }
}

let uni1 = new Mission(0, "high");
let uni2 = new Mission();

console.log(uni1 === uni2);  // true
console.log(uni1.start_time, uni1.importance);  // high
console.log(uni2.start_time, uni2.importance);  // high
