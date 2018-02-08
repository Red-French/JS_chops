function talk() {
  console.log(this);
  console.log(this.sound);
}

let animal = {
  talk
}

let dog = {
  sound: "woof",
  bark: function() {
    console.log(this.sound)
  }
}

let cat = {
  sound: "meow!"
}

let wolf = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
}

Object.setPrototypeOf(cat, animal);  // set cat prototype = animal
cat.talk();  // meow!

Object.setPrototypeOf(wolf, dog);
wolf.howl();  // WOOF

// PROTOTYPES ARE LIVE; ANY CHANGE IS REFLECTED DOWN THE LINE
animal.talk = function() {
  console.log("Woo... I mean, meow.");
}



// bind() example
cat.talk();  // Woo... I mean, meow.
dog.bark();  // woof
let dogMeows = dog.bark.bind(cat);  // cat becomes 'this' of dog.bark
dogMeows();  // meow!
