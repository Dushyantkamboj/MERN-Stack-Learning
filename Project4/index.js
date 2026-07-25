import {MongoClient} from 'mongodb';
import bcrypt from 'bcrypt'

const url="mongodb://localhost:27017/"

const client=new MongoClient(url)

await client.connect();  //await waits until the connection is successful. Without await, the next lines may execute before the connection is ready.

const db=client.db("MyFourthDB")  //Now you're telling MongoDB which database you want to use.

db.collection("Database")

let password="12345678910";

const HashedPassword= await bcrypt.hash(password,10)
console.log(HashedPassword);


Database.insertOne({
    username:"Dushyant@5005",
    gmail:"dushyant@gmail.com",
    age:23,
    password:HashedPassword
})

//db is not the database itself.
//It is an object that lets you perform operations on that database.