# Iterators
Iterators are what the for-of loop uses under the hood to iterate over an array, but the for-of loop is actually capable of iterating over anything, sets or maps or your own custom objects, as long as they provide an iterator for the for-of loop to use.

The for-of loop does not know how to iterate over arrays.  It knows nothing about arrays.  It has no idea what an array is.  The only reason why the for-of loop is able to iterate over an array is because the array provides an iterator that tells the for-of loop how to iterate it.

Below is how the for-of loop gets the iterator from the array:
``` const iterator = giants[Symbol.iterator]()  // it calls the Symbol.iterator method on giants ```

An iterator has a next() method on it:
``` iterator.next() ```
