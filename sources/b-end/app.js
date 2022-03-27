// start here
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// middleware

// Menghandle content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// Menghandle content-type: application/json
app.use(express.json());

// --- BEST PRACITICE
// Untuk membuat best practicenya,
// sebaiknya routing ini dipisah ke routers/index.js

// TODO: 1. endpoint GET /companies
app.get("/companies", null);

// TODO: 2. endpoint PSOT /companies
app.post("/companies", null);

// TODO: 3. DELETE /companies/:id
app.delete("/companies/:id", null);

// --- End of BEST PRACTICE

app.listen(port, (_) => console.log(`apps is working at ${port}`));
