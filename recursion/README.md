# Recursion

Examples I've written using recursion.
* **recursion.js**: various
* **findTheDev.js**: takes 2 params (primary and secondary language and returns devs who match criteria)


Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.  It's very useful for JSON trees.  You iterate over an operation by having a function call itself repeatedly until it arrives at a result.

Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop. While it can be used in many situations, it is most effective for solving problems involving iterative branching, such as fractal math, sorting, or traversing the nodes of complex or non-linear data structures.

One reason that recursion is favored in functional programming languages is that it allows for the construction of code that doesn’t require setting and maintaining **state** with local variables. Recursive functions are also naturally easy to test because they are easy to write in a pure manner, with a specific and consistent return value for any given input, and no side effects on external variable states.
