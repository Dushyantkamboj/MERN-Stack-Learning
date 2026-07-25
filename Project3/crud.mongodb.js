use("MyDatabase1")

db.createCollection("users")

// db.users.insertOne({
//     employee:"rahul",
//     employee_id:"1222051",
//     employee_DOB:"20/july/2024"
// })

// db.users.insertMany([
//     {
//         employee: "Rahul",
//         employee_id: "1222051",
//         employee_DOB: "20/07/2001"
//     },
//     {
//         employee: "Amit",
//         employee_id: "1222052",
//         employee_DOB: "15/03/2000"
//     },
//     {
//         employee: "Rohit",
//         employee_id: "1222053",
//         employee_DOB: "08/11/1999"
//     },
//     {
//         employee: "Priya",
//         employee_id: "1222054",
//         employee_DOB: "25/01/2002"
//     },
//     {
//         employee: "Neha",
//         employee_id: "1222055",
//         employee_DOB: "12/09/2001"
//     },
//     {
//         employee: "Karan",
//         employee_id: "1222056",
//         employee_DOB: "30/06/1998"
//     },
//     {
//         employee: "Anjali",
//         employee_id: "1222057",
//         employee_DOB: "18/12/2000"
//     },
//     {
//         employee: "Vikas",
//         employee_id: "1222058",
//         employee_DOB: "07/04/1999"
//     },
//     {
//         employee: "Simran",
//         employee_id: "1222059",
//         employee_DOB: "14/08/2001"
//     },
//     {
//         employee: "Arjun",
//         employee_id: "1222060",
//         employee_DOB: "02/02/2000"
//     }
// ]);

// db.users.findOne({employee:"Arjun"})

// db.users.updateOne({employee:"Arjun"},{$set:{employee:"Anjali"}})

// db.users.updateMany({employee:"rahul"},{$set:{employee:"Anjali"}})

// db.users.deleteOne({employee:"Anjali"})

db.users.deleteMany({employee:"Anjali"})