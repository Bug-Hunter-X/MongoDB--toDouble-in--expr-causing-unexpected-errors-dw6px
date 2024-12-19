# MongoDB $toDouble in $expr error

This repository demonstrates an uncommon error that can occur when using the `$toDouble` operator within the `$expr` operator in MongoDB queries.  The error arises when the field being converted to a double is not a number or contains non-numeric values.

The `bug.js` file shows the faulty query. The `bugSolution.js` file provides a solution to handle potential errors gracefully.

## How to Reproduce

1. Clone this repository.
2. Create a MongoDB collection with a document where the 'price' field is not a number (e.g., string).
3. Run the query in `bug.js` to reproduce the error.
4. Run the query in `bugSolution.js` to see the corrected behavior.

## Solution

The solution involves using the `$type` operator to check the type of the 'price' field before attempting conversion.