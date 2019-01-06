let s = Symbol();
console.log(typeof s);  // symbol
let s2 = Symbol("First Symbol");
console.log(s2);  // Symbol(First Symbol);

// The Symbol method always returns a unique ID, regardless of the description
let s3 = Symbol("test");
let s4 = Symbol("test");
console.log(s3 === s4);   // false - becuse Symbol always creates a new ID regardless of the description

// There is a built-in Symbol registry; to add a Symbol to the registry, use the Symbol.for() method
// for() method first checks if a symbol with the key "RegSymbol" already exists in the registry. If it dose, it will return that symbol. Otherwise, it creates a new Symbol in the registry
let s5 = Symbol.for("RegSymbol");
let s6 = Symbol.for("RegSymbol");
console.log(s5 === s6);  // true; however, don't know the IDs

// FIND KEY
console.log(Symbol.keyFor(s5));  // RegSymbol

// A Symbol value/ID may be used as an identifier for object properties; this is the data type's only purpose.
let fname = Symbol("FirstName");
let person = {
  [fname]: "Chandler"  // this is a unique property in this object, so never have to worry about code conflicting with existing methods or being accidentally overwritten 
};

console.log(Object.getOwnPropertySymbols(person));  // list Symbols used for an object
console.log("symbol fhame = ", person[fname]);
console.log(person);
