const one = {
  name: "object",
  say: function (greet) {
    return greet + ", " + this.name;
  }
}

const two = {
  name: "another object"
}

const yetanother = {
  name: "yet another object",
  cbMethod: function(callback) {
    return callback("hey");
  }
}

function bind(obj, mthd) {
  return function() {
    return mthd.apply(obj, [].slice.call(arguments));
  }
}


// ****************************************************
// call()
// apply()
// bind()
// ****************************************************
function f() {
  const args = [].slice.call(arguments, 1, 3);  // borrowing an array method
  return args;
}
const sliced = f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log("sliced = ", sliced);

const callGreeting = one.say.call(two, "hi");  // "hi, another object"
const applyGreeting = one.say.apply(two, ["hello"]);  // "hello, another object"
console.log("call() = ", callGreeting);
console.log("apply() =", applyGreeting);

const bindGreeting1 = one.say.bind(two, "hey");  // passing a list
const bindGreeting2 = one.say.bind(two, ["hey"]);  // passing an array
console.log("bind(); parameter list = ", bindGreeting1());
console.log("bind(); parameter array = ", bindGreeting2());

// ****************************************************
// bind() continued:
// bind() - handles 'this' when:
//    - assigning a function to a global var
//    - passing a function as a callback
// ****************************************************
const nowork = yetanother.cbMethod(one.say);  // ccbMethod's callback is assigned to global var 'nowork', so 'this' points to global object
console.log("nowork = ", nowork);  // "hey, undefined"

const twosay = bind(two, one.say);  // bind takes an object & method; object is 'this' of method
const bindGreeting3 = twosay('ahhhhh ha');
console.log("bind() = ", bindGreeting3);
