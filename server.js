const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mssql = require("mssql");
const dbConfigMssql = require('./database.js');

const { request } = require("http");

app.get('/api/customers', async (req, res) => {
  try {
    let pool = await mssql.connect(dbConfigMssql);
    let result = await pool.request().query("SELECT * FROM tbNodeTest");
    // res.send(JSON.stringify(result));
    res.send(result.recordset);
} catch (err) {
    console.log(err);
}
});

app.listen(port, () => console.log(`Listening on port ${port}`));