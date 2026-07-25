In MongoDB, Bulk Operations let you perform many insert, update, and delete operations in a single database call. This is more efficient than sending one request per operation.

The MongoDB Node.js driver provides the ```bulkWrite()``` method.


Syntax
```
 await collection.bulkWrite([
     operation1,
     operation2,
     operation3
]);
```

1. Bulk Insert
```
await users.bulkWrite([
    {
        insertOne: {
            document: {
                name: "Rahul",
                age: 22
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Amit",
                age: 24
            }
        }
    }
]);
```

2. Bulk Update
```
await users.bulkWrite([
    {
        updateOne: {
            filter: { name: "Rahul" },
            update: {
                $set: {
                    age: 25
                }
            }
        }
    },
    {
        updateOne: {
            filter: { name: "Amit" },
            update: {
                $set: {
                    age: 26
                }
            }
        }
    }
]);
```

3. Bulk Delete
```
await users.bulkWrite([
    {
        deleteOne: {
            filter: {
                name: "Rahul"
            }
        }
    },
    {
        deleteOne: {
            filter: {
                name: "Amit"
            }
        }
    }
]);
```


What is Projection in MongoDB?
```
Projection is used to select which fields you want to return from a document.
```

```
const data = await users.find(
    {},
    {
        projection: {
            name: 1,
            age: 1
        }
    }
).toArray();
```

MongoDB skip() Method
```
The skip() method is used to skip a specified number of documents before returning the results.
```
Syntax
```
db.collection.find().skip(number)
```
MongoDB limit() Method
```
The limit() method is used to restrict the number of documents returned by a query.
```

```
db.collection.find().limit(number)
```

MongoDB Search (Filter)
```
A filter is used to retrieve only the documents that match specific conditions.
```

What is upsert in MongoDB?
```
Upsert is a combination of Update + Insert.
If a matching document exists, MongoDB updates it.
If no matching document exists, MongoDB inserts a new document.
```

The upsert option is available with methods like updateOne(), updateMany(), and replaceOne()
```
db.collection.updateOne(
    filter,
    update,
    {
        upsert: true
    }
)
```