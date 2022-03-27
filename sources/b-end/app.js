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

// 1. endpoint GET /companies
const { Company } = require("./models/index");

app.get("/companies", (req, res) => {
  Company.findAll().then((dataCompanies) => {
    // Berhasil ambil data = 200 - OK
    // kembalikan dalam bentuk JSON
    res.status(200).json({
      statusCode: 200,
      data: dataCompanies,
    });
  });
});

// TODO: 2. endpoint POST /companies
// app.post("/companies", null);

// TODO: 3. DELETE /companies/:id
// app.delete("/companies/:id", null);

// --- End of BEST PRACTICE

app.listen(port, (_) => console.log(`apps is working at ${port}`));
