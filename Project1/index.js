import {MongoClient} from 'mongodb'

const url='mongodb://localhost:27017/'

const client=new MongoClient(url)

await client.connect();

const db=client.db("DushyantDataBase");

const ranking=db.collection('ranking');

console.log(ranking);


// const object=await ranking.insertMany([
//   {
//     name: "Dushyant",
//     age: 23,
//     roll_no: 1222051
//   },
//   {
//     name: "Rahul",
//     age: 22,
//     roll_no: 1222052
//   },
//   {
//     name: "Aman",
//     age: 24,
//     roll_no: 1222053
//   },
//   {
//     name: "Rohit",
//     age: 21,
//     roll_no: 1222054
//   },
//   {
//     name: "Karan",
//     age: 23,
//     roll_no: 1222055
//   },
//   {
//     name: "Ankit",
//     age: 22,
//     roll_no: 1222056
//   },
//   {
//     name: "Priya",
//     age: 21,
//     roll_no: 1222057
//   },
//   {
//     name: "Neha",
//     age: 24,
//     roll_no: 1222058
//   },
//   {
//     name: "Simran",
//     age: 23,
//     roll_no: 1222059
//   },
//   {
//     name: "Arjun",
//     age: 22,
//     roll_no: 1222060
//   }
// ]);



// console.log(object);

const result= await ranking.findOne({age:"dushyant"})

console.log(result);