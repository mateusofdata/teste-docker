// index.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

let connection;

app.get('/', (req, res) => {
  connection.query('show tables', (err, results) => {
    if (err) throw err;
    res.send(`Database connection successful! 1 + 1 = ${results[0].solution}`);
  });
});

app.get('/user', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);

  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
  });
});
