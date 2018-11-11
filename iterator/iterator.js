const object = {
  firstName: "Red",
  lastName: "French"
}

var enough;
const object2 = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        enough = (Math.random() > .6)
        if (!enough) {
          return {
            value: object,
            done: false
          }
        }
        return {done: true}
      }
    }
  }
}

for (const prop of object2) {
  console.log(prop)
}
