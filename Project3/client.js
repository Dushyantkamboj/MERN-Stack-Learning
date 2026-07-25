import {MongoClient} from 'mongodb';

const url="mongodb://localhost:27017/";

const client=new MongoClient(url)

await client.connect();

const db=client.db("MySecondDB")

const second=db.collection("second");

// await second.insertOne({
//     name:"Dushyant",
//     age:"21",
//     occupation:"Developer"
// });

// await second.insertMany([
//   {
//     name: "Arjun",
//     age: 21,
//     occupation: "Developer"
//   },
//   {
//     name: "Rahul",
//     age: 24,
//     occupation: "Software Engineer"
//   },
//   {
//     name: "Amit",
//     age: 26,
//     occupation: "Backend Developer"
//   },
//   {
//     name: "Priya",
//     age: 23,
//     occupation: "Frontend Developer"
//   },
//   {
//     name: "Neha",
//     age: 25,
//     occupation: "UI/UX Designer"
//   },
//   {
//     name: "Karan",
//     age: 28,
//     occupation: "DevOps Engineer"
//   },
//   {
//     name: "Simran",
//     age: 22,
//     occupation: "QA Engineer"
//   },
//   {
//     name: "Arjun",
//     age: 27,
//     occupation: "Full Stack Developer"
//   },
//   {
//     name: "Rohit",
//     age: 29,
//     occupation: "Project Manager"
//   },
//   {
//     name: "Anjali",
//     age: 24,
//     occupation: "Data Analyst"
//   }
// ]);

// console.log(second);

// const a=await second.find({name:"Arjun"})

// console.log(a);

// const b=await second.updateOne({name:"Dushyant"},{$set:{name:"Arjun"}})

// console.log(b);

// const c= await second.updateMany({name:"Dushyant"},{$set:{name:"Arjun"}})

// console.log(c);

// const d=await second.deleteOne({name:"Arjun"})
// console.log(d);

// const e=await second.deleteMany({name:"Arjun"})
// console.log(e);


//In MongoDB, Bulk Operations let you perform many insert, update, and delete operations in a single database call. This is more efficient than sending one request per operation.

//The MongoDB Node.js driver provides the bulkWrite() method.

// await collection.bulkWrite([
//     operation1,
//     operation2,
//     operation3
// ]);





