
// let fullName  = document.getElementById("signup-name");
// let emailAddress  = document.getElementById("signup-email");
// let pass  = document.getElementById("signup-password");
// let confirmPass  = document.getElementById("signup-confirm-password");
// let btn = document.querySelector(".button")

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Your MySQL username
    password: "", // Your MySQL password
    database: "authentication"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
});



//retrieve the data

db.query("SELECT * FROM signUpData", function (err, result, fields) {
    if (err) throw err;
    console.log((result))
  });




//send the data
  // Handle form submission
app.post("/submit", (req, res) => {
    const { name, email,pass,cPass } = req.body;
    // res.send(req.body)
    const sql = "INSERT INTO signUpData (name, email,pass) VALUES (?, ?, ?)";
    console.log([name, email,pass])
    if((req.body).pass == (req.body).cPass){

        db.query(sql, [name, email,pass], (err, result) => {
            if (err) throw err;
            res.send("Registered Succesfully!");
        });
    }
    else{
        res.send("Password does not  match !! Try again");


        
    }
});






// Start Server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});