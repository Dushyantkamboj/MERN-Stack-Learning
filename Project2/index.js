import {MongoClient} from 'mongodb';

const url="mongodb://localhost:27017/"

const client=new MongoClient(url)

await client.connect();

const db=client.db("DUSUdb")

const userData=db.collection("userData")

const result=await userData.insertMany([
  {
    name: "Dushyant",
    age: 23,
    roll_no: 1222051
  },
  {
    name: "Rahul",
    age: 22,
    roll_no: 1222052
  },
  {
    name: "Dushyant",
    age: 23,
    roll_no: 1222053
  },
  {
    name: "Aman",
    age: 24,
    roll_no: 1222054
  },
  {
    name: "Rahul",
    age: 22,
    roll_no: 1222055
  },
  {
    name: "Priya",
    age: 21,
    roll_no: 1222056
  },
  {
    name: "Aman",
    age: 24,
    roll_no: 1222057
  },
  {
    name: "Sneha",
    age: 23,
    roll_no: 1222058
  },
  {
    name: "Dushyant",
    age: 23,
    roll_no: 1222059
  },
  {
    name: "Priya",
    age: 21,
    roll_no: 1222060
  }
]);

console.log(result);
