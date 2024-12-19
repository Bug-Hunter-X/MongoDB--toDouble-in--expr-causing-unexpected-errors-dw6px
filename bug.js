```javascript
const query = { $expr: { $gt: [ { $toDouble: '$price' }, 100 ] } };

// This will cause an error if the 'price' field is not a number
// or if it contains a non-numeric value such as a string.
db.collection.find(query);
```