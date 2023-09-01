const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const port = 5001;

//Miidleware
app.use(cors());//Enable CORS for your API
app.use(express.json());//PARSE Incoming JSON Requests


// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dashboard"
});

//connect to MySQL Database

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
 console.log("Connected to the database");
  }
});

// Define a route to handle birthday data requests

app.get('/api/birthday', (req, res) => {
  const currentMonth = new Date().getMonth() +1;
 
  const query = `
  SELECT * FROM user_details
  WHERE MONTH(dob) = ${currentMonth} AND DATE_FORMAT(dob, '%m-%d') = DATE_FORMAT(NOW(), '%m-%d')
  ORDER BY dob ASC
  `;

  // Execute the SQL query and handle the response

  db.query(query, (error, results) => { 
    if (error) {
      console.error('Error fetching data1111:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
        console.log(results)
      res.json(results);
    }
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});