const express = require ("express");
const mysql = require ("mysql");
const cors = require ("cors")

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Jaywish@123",
    database: "tradingdb"
})

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post("/Signup", (req,res) => {
    const sql = "insert into login (name, email,password,inammount) values (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.inammount
    ]
    db.query(sql,[values],(err,result) => {
        if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }

    })
})
app.post("/login", (req,res) => {
    

  // Simulate authentication (DO NOT use plaintext passwords in production)
  db.query('SELECT * FROM login WHERE email = ? AND password = ?', [req.body.email, req.body.password], (err, result) => {
    if (err) {
      console.log("error");
      console.error('Error during login query:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      if (result.length > 0) {
        
        return res.json({result});
      } else {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    }
  });
});
app.listen(8081,() => {
    console.log("Listening...");
})