// start here
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// middleware

// Menghandle content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Menghandle content-type: application/json
app.use(express.json());

// --- BEST PRACTICE
// Untuk membuat best practicenya,
// sebaiknya routing ini dipisah ke routers/index.js

// 1. endpoint GET /companies
const { Company } = require("./models/index");

// TODO: 1. endpoint GET /companies
// app.get("/companies", null);

// TODO: 2. endpoint POST /companies
// app.post("/companies", null);

// TODO: 3. DELETE /companies/:id
// app.delete("/companies/:id", null);

// --- End of BEST PRACTICE

app.listen(port, (_) => console.log(`apps is working at ${port}`));
