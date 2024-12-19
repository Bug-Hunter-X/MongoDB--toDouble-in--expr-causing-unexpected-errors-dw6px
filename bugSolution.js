```javascript
const query = {
  $expr: {
    $and: [
      {
        $eq: [{ $type: '$price' }, 1 ] // Check if 'price' is a double (type 1)
      },
      { $gt: [{ $toDouble: '$price' }, 100] } // Convert and compare only if it's a double
    ]
  }
};

db.collection.find(query);

//Alternatively, handle non-numeric cases with aggregation pipeline:
db.collection.aggregate([
  {
    $addFields: {
      parsedPrice: {
        $toDouble: '$price'
      }
    }
  },
  {
    $match: {
      parsedPrice: { $gt: 100 },
      parsedPrice: { $exists: true }
    }
  }
])
```