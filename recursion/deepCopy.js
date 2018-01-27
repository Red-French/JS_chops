let child = {};
let thing;
let policy = {
  name: "FIrstname",
  last: "Lastname",
  address: {
    number: "123",
    road: "ABC Street"
  },
  zip: "38401"
}

function extendDeep(policy, child) {
  for (prop in policy) {
    if(policy.hasOwnProperty(prop)) {
      if (typeof policy[prop] === "object") {
        child[prop] = (policy[prop].toString() === "[object Array]")
          ? []
          : {};
          extendDeep(policy[prop], child[prop]);
      } else {
        child[prop] = policy[prop];
      }
    }
  }
  return child;
}


let something = extendDeep(policy, child);
something.address.number = 0;
console.log("something = ", something);
console.log("policy.address.number = ", policy.address.number)
