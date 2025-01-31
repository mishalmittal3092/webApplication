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



//send the data
  // Handle form submission
app.post("/submit", (req, res) => {
    const {email, pass} = req.body;
    // res.send(req.body)
    const sql = "INSERT INTO signUpData (name, email,pass) VALUES (?, ?, ?)";



    db.query(`SELECT COUNT(*) FROM signUpData WHERE email = "${email}"and pass = "${pass}"`, function (err, result, fields) {
        if (err) throw err;
        if(result[0]['COUNT(*)'] == 1) {
            // sessionStorage.setItem("ok","yes")
            res.send("login Successfully")

        }
        else res.send("Incorrect email id or password") 
      });

    


});







app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});