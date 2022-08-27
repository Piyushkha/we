const express = require("express");
const bodyparser = require("body-parser");
const mongoose =require("mongoose");
const auth = require("./router/auth")

const dbUser ="piyushkhatridb"
const dbPassword="piyush123"
const hostName="cluster0.adzul6t.mongodb.net"
const dbName="blogdb"
const localDB = `mongodb+srv://${dbUser}:${dbPassword}@${hostName}/${dbName}?retryWrites=true&w=majority`;
// mongoose.connect(process.env.MONGODB_URI || localDB,
mongoose.connect(localDB,


    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
    console.log(`DB connection successfull`);
}).catch((error) => {
    console.log(error);
});
mongoose.Promise = global.Promise;




const app = express();
app.use(bodyparser.json());

app.use("/user",auth);





app.listen(8080,()=>{
    console.log("server is running 8080");
})