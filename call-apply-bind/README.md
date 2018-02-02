# borrowing methods; call(), apply(), bind()
To borrow a method from another object without inheriting the entire object, call(), apply(), or bind() can be used.  Pass your object and any parameters, and the borrowed method binds your object as its own 'this'.  Basically, your object pretends to be the other object for a bit to benefit from the method you're borrowing.

Arrays have useful methods which array-like objects don't have.  An empty array can be created for the sake of using its available methods.

* call() - notMyObj.doStuff.call(object, param1, p2, p3);

* apply() - notMyObj.doStuff.apply(object, [param1, p2, p3]);

* bind() - takes an object and method and binds the object as 'this' to the method
