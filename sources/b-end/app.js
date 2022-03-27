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
const { Company } = require("./models/index");

// --- BEST PRACTICE #2
// seharusnya untuk (req, res) => { ... }
// diletakkan dalam sebuah fungsi di dalam file controller
app.get("/companies", (req, res) => {
  Company.findAll()
    .then((dataCompanies) => {
      // Berhasil ambil data = 200 - OK
      // kembalikan dalam bentuk JSON
      res.status(200).json({
        statusCode: 200,
        data: dataCompanies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        statusCode: 500,
        error: {
          message: "Internal Server Error",
        },
      });
    });
});
// --- End of BEST PRACTICE #2

// --- BEST PRACTICE #3
// seharusnya untuk async (req, res) => { ... }
// diletakkan dalam sebuah fungsi di dalam file controller
// TODO: 2. endpoint POST /companies
app.post(
  "/companies",
  // Jangan lupa untuk memberikan keyword async
  async (req, res) => {
    try {
      const { name, address, zipCode } = req.body;

      // Karena di sini kita menunggu promise yang pending
      // gunakan kata await
      const newCompany = await Company.create({
        name,
        address,
        zipCode,
      });

      // Berhasil membuat data baru = 201 - Created
      res.status(201).json({
        statusCode: 201,
        message: "Company created successfully",
        data: newCompany,
      });
    } catch (err) {
      let code = 500;
      let msg = "Internal Server Error";

      // Cek validasi sequelize
      if (err.name === "SequelizeValidationError") {
        code = 400;
        // untuk error message dicoba untuk dicari sendiri yah !
        // hint: console log error name dan error messagenya !s
        msg = "";
      }

      res.status(code).json({
        statusCode: code,
        error: {
          message: msg,
        },
      });
    }
  }
);
// --- End of BEST PRACTICE #3

// --- BEST PRACTICE #4
// seharusnya untuk async (req, res) => { ... }
// diletakkan dalam sebuah fungsi di dalam file controller
// TODO: 3. DELETE /companies/:id
// app.delete("/companies/:id", null);
// --- End of BEST PRACTICE #4

// --- End of BEST PRACTICE

app.listen(port, (_) => console.log(`apps is working at ${port}`));
