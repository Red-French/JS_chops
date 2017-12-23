# Module pattern
JavaScript doesn’t have privacy, but creating new scope emulates this when wrapping function logic inside an IIFE and then returning only the parts needed, leaving the other code out of the global scope.  After creating new scope, namespace the code to access any returned methods.

```
var Module = (function ( )
  var privateMethod = function ( ) {
    // do something
  };
})( );
```

The above example declares a function, privateMethod, which is declared inside the new scope. An attempt to call it from anywhere outside of this module will cause an error to be thrown.
