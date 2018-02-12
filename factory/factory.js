function CarMaker() {
}

CarMaker.prototype.drive = function() {
  return "Vroom, I have " + this.doors + " doors";
}

// ***************************
// *** Factory
// ***************************

CarMaker.factory = function(type) {
  var constr = type,
      newcar;

  // error if constructor does not exist
  if (typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " does not exist"
    };
  }

  // inherit parent (once)
  if (typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }

  // create new instance
  newCar = new CarMaker[constr]();
  return newCar;
};

// ***************************
// *** SPECIALIZED CONSTRUCTORS
// ***************************
CarMaker.Compact = function() {
  this.doors = 4;
};

CarMaker.Convertible = function() {
  this.doors = 2;
};

CarMaker.SUV = function() {
  this.doors = 17;
}


let corolla = CarMaker.factory("Compact");
let solstice = CarMaker.factory("Convertible");
let cherokee = CarMaker.factory("SUV");

console.log(corolla.drive());
console.log(solstice.drive());
console.log(cherokee.drive());
