# borrowing methods; call(), apply(), bind()
To borrow a method from another object without inheriting the entire object, call(), apply(), or bind() can be used.  Pass your object and any parameters, and the borrowed method binds your object as its own 'this'.  Basically, your object pretends to be the other object for a bit to benefit from the method you're borrowing.

Arrays have useful methods which array-like objects don't have.  An empty array can be created for the sake of using its available methods.

* call() - notMyObj.doStuff.call(object, param1, p2, p3);  // accepts a parameter list

* apply() - notMyObj.doStuff.apply(object, [param1, p2, p3]);  // accepts a parameter array

* bind() - takes an object and method and binds the object as 'this' to the method

### You can use call()/apply() to invoke a function immediately. bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. So, bind() can be used when a function needs to be called later (for an event, for example).
