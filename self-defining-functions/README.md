# Self-Defining Functions
Functions can be defined dynamically.  This pattern is useful when there is initial work to be done only once (function redefines itself after the initial work is done).  This is also called "lazy function definition".

# Cached Instance / Singleton
You may want singleton behavior via a function constructor.  The idea is that when the 'new' operator is used to create several objects, each should get only a pointer to the exact same object.

Wrapping the instance in a closure keeps it private.
