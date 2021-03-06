# REST API

## Table of Content
1. [Prerequisite](#prerequisite)
1. [Intro](#intro)
1. [Apa itu REST API](#apa-itu-rest-api)
1. [Mengapa REST API](#mengapa-rest-api)
1. [Bagian Penting dari REST API](#bagian-penting-dari-rest-api)
    - [HTTP Verb / Methods](#http-verb-/-methods)
    - [HTTP Response Code](#http-response-code)
1. [Let's Code](#lets-code)
    - [Case & Tools](#case-&-tools)
    - [Langkah 1 - Inisialisasi Proyek & DB](#langkah-1---inisialisasi-proyek-&-db)
    - [Langkah 2 - Read (Promise)](#langkah-2---read-promise)
    - [Pre-Langkah 3 - async / await](#pre-langkah-3---async-/-await)
    - [Langkah 3 - Create (async / await)](#langkah-3---create-async-/-await)
    - [Langkah 4 - Delete (async / await)](#langkah-4---delete-async-/-await)
1. [Referensi](#referensi)

### Prerequisite
Sebelum membaca materi ini, pastikan:
- Sudah menginstall nodejs
- Sudah memahami penggunaan PostgreSQL
- Sudah memahami sedikit tentang ExpresssJS
- Sudah memahami sedikit tentang Sequelize

### Intro
Dari pembelajaran express dengan menggunakan ejs murni, kita mengetahui bahwa semua "alam" akan kita letakkan dalam suatu wadah / server yang sama, yang umumnya disebut dengan `monolitik server`.

Hal ini tentunya cukup tidak baik di jaman sekarang ini, karena ada masalah dalam scaling (memperbesar), baik memperbesar hardware maupun memperbesar aplikasi itu sendiri.

Pendekatan yang umumnya sekarang ini dilakukan adalah dengan melakukan pemecahan antara Bagian Depan (Frontend) dengan Bagian Belakang (Backend) dari suatu aplikasi yang akan dibuat.

Tetapi hal ini pun akan menimbulkan permasalahan baru:
- `Bagaimanakah cara si Frontend dan Backend berkomunikasi?`

Nah salah satu caranya adalah dengan membuat suatu API yang berbasis REST.

### Apa itu REST API
Sekarang pertanyaan selanjutnya adalah: `API itu apaan sih?` dan `REST API itu apaan pula?`

API = Application Programming Interface, adalah suatu set definisi dan protokol yang digunakan untuk mengintegrasikan aplikasi. analoginya jadi semacam `kontrak` antara penyedia informasi dengan pengguna yang mengkonsumsi informasi tersebut.

REST = REpresentational State Transfer, adalah arsitektur untuk menyediakan standar antara komputer dengan internet / antar sistem.

REST API = API yang dibuat berdasarkan arsitektur REST.

Contoh:
- Aplikasi Frontend ingin mengakses data **repositories** dari github, maka Frontend akan menembak ke endpoint `GET /repos` dari api yang disediakan github.

GET di sini merupakan HTTP Method, yang digunakan untuk mengambil data dari server.

`repos` di sini sumber daya (resource) yang ingin diakses.

Pertanyaan yang akan muncul bagi teman teman yang sudah berpengalaman adalah, kenapa `REST`? kenapa tidak menggunakan `SOAP` saja untuk membuat API?

Jawabannya adalah: dalam definisi arsitektur `REST`, kembalian bisa (tidak wajib) dalam bentuk `JSON` yang terkenal cukup ringan, ketimbang dengan SOAP yang WAJIB menggunakan `XML`.


Nah sekarang setelah mengenal sedikit mengenai REST API, kita akan mempelajari bagian penting dari REST API itu terlebih dahulu yah !
### Bagian Penting dari REST API

Bagian yang penting dari REST API ini terbagi menjadi dua bagian utama yang akan dibahas pada pembelajaran ini
- HTTP Verb / Methods
- HTTP Response Code

#### HTTP Verb / Methods
REST API pada akhirnya akan digunakan untuk mengakses sumber daya (sebagai analogi di atas, adalah di `repos`) diikuti dengan "perintah" yang bisa digunakan untuk mengakses ataupun mengubah data yang ada di sumber daya tersebut.

Nah "perintah" ini, akan mengikuti suatu standar yang ada di dalam HTTP Method itu sendiri, yaitu:
- GET
- POST
- PUT
- PATCH
- DELETE

Yang apabila disetarakan dengan CRUD, artinya adalah:
- GET = READ
- POST = CREATE
- PUT = UPDATE (mengganti data)
- PATCH = UPDATE (memodifikasi data)
- DELETE = DELETE

Nah tentunya selain mengembalikan data, REST API juga akan memberitahukan apakah proses / method yang dilakukan tersebut berhasil atau tidak, dalam bentuk HTTP Response Code.

#### HTTP Response Code

HTTP Response Code atau lebih umum dikenal dengan nama `HTTP Status Code`, adalah suatu status dalam bentuk angka yang menunjukkan status dari proses yang dilakukan oleh server.

Contoh yang umum kita temukan di internet adalah ketika kita mengakses suatu halaman web dan tidak ditemukan, maka akan muncul response code 404 (Not Found)

Untuk List status code yang umum kita gunakan adalah sebagai berikut umumnya:
- GET = 200 (OK) | 404 (Not Found), 500 (Internal Server Error)
- POST = 201 (Created) | 400 (Bad Request), 500 (Internal Server Error)
- PUT = 200 (OK) | 400 (Bad Request), 500 (Internal Server Error)
- PATCH = 200 (OK) | 400 (Bad Request), 500 (Internal Server Error)
- DELETE = 200 (OK), 204 (No Content) | 400 (Bad Request), 500 (Internal Server Error)

Nah sekarang setelah mengetahui semua teorinya, mari kita masuk ke bagian terpenting dari semuanya, `N-G-O-D-I-N-G !`

### Let's Code
Pada bagian ini kita akan mencoba untuk mengoding sebuah REST API bikinan sendiri tanpa melibatkan sedikitpun pihak ketiga

#### Case & Tools
Membuat suatu aplikasi backend berbasis REST API.

Dengan syarat endpoint yang harus dibuat sesuai dengan dokumentasi yang diberikan (nama dokumentasi: `apiDocumentation.md`)

Buatlah sebuah REST API dengan menggunakan Express.

Nah karena ini adalah pembelajaran, maka diberikan langkah yang harus dilakukan sebagai berikut:

#### Langkah 1 - Inisialisasi Proyek & DB
1. Membuat sebuah folder untuk project
1. Menggunakan perintah `npm init -y`
1. Menginstall package yang dibutuhkan `npm i express pg sequelize`
1. Menginstall package dev yang dibutuhkan `npm i -D nodemon sequelize-cli`
1. Menggunakan perintah `npx sequelize-cli init`
1. Melakukan konfigurasi terhadap file `config/config.json`
1. Membuat database (apabila belum dibuat) dengan menggunakan perintah `npx sequelize-cli db:create`
1. Membuat model dan migration untuk model `Company` dengan menggunakan perintah `npx sequelize-cli model:create --name Company --attributes name:string,address:string,zipCode:string`
1. Melakukan migrasi database dengan menggunakan perintah `npx sequelize-cli db:migrate`
1. Karena pada pertemuan ini kita ada menggunakan file seeding, maka selanjutnya kita akan membuat file seeding dengan melakukan perintah `npx sequelize-cli seed:create --name seed-companies`
1. Membuka file `seeders/xxxxxxxxxx-seed-companies.js` kemudian mengisikan kode berikut
    ```js
    "use strict";

    module.exports = {
      async up(queryInterface, Sequelize) {
        // Membaca file
        // equivalen dengan
        // require('fs').readFileSync('../dummy/company.json', 'utf8');
        const companies = require("../dummy/company.json");

        companies.forEach((company) => {
          // Karena datanya belum ada createdAt dan updatedAt untuk
          // keperluan sequelize, maka ditambahkan di sini
          company.createdAt = new Date();
          company.updatedAt = new Date();
        });

        await queryInterface.bulkInsert("Companies", companies, {});
      },

      async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Companies", null, {});
      },
    };
    ```
1. Menjalankan perintah seed dengan menggunakan `npx sequelize-cli db:seed:all`

Sampai pada tahap ini kita sudah selesai melakukan inisialisasi proyek dan database. Selanjutnya kita akan mulai membuat REST API dengan menggunakan Express

#### Langkah 2 - Read (Promise)
1. Membuat sebuah file dengan nama `app.js`, file ini akan berfungsi sebagai file utama dari aplikasi ini.
1. Menuliskan kerangka kode sebagai berikut:
    ```js
    // File: app.js

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
    // app.get("/companies", null);

    // TODO: 2. endpoint POST /companies
    // app.post("/companies", null);

    // TODO: 3. DELETE /companies/:id
    // app.delete("/companies/:id", null);

    // --- End of BEST PRACTICE

    app.listen(port, (_) => console.log(`apps is working at ${port}`));
    ```
1. Memodifikasi file `app.js` untuk `TODO Pertama`
    ```js
    // File: app.js
    ...
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
    ```
1. Menjalankan kode dengan menggunakan perintah `npx nodemon app.js`
1. Mengecek dengan menggunakan HTTP client seperti `Postman`, `REST Client`, `Thunder Client`, ataupun HTTP client yang disukai.
1. Apabila kode yang dituliskan benar, maka seharusnya hasilnya sama dengan yang ada di `apiDocumentation.md`

Sampai di tahap ini untuk endpoint GET /companies sudah selesai, sekarang kita akan melanjutkan ke endpoint `POST /companies`.

Namun apabila dilihat dari kode yang kita buat, masih kurang mengikuti cara penulisan javascript `zaman now`, karena masih menggunakan `xxx.then().catch()`, aka `Promise`.

Untuk endpoint yang selanjutnya, kita akan mencoba untuk menggunakan `async / await`

### Pre-Langkah 3 - async / await
`async / await` sebenarnya compatible dengan `promise`, dalam artian, semua kode yang dibuat dengan `promise` bisa diganti dengan `async / await` begitu juga sebaliknya !

Contoh:
```js
// Promise based
Model
  .findAll()
  // resolve
  .then(data => {...})
  // reject
  .catch(err => {...});

// async await based

// function yang menggunakan await harus diberikan kata async
async function () {
  const data = await Model.findAll(); // promise resolve
}
```

Nah perbedaannya adalah pada `async / await` tidak mengenal `promise reject`, sehingga untuk mendapatkan error dari `async / await`, harus dibungkus dalam `try ... catch ...` block

```js
async function () {
  try {
    const data = await Model.findAll(); // promise resolve
  } catch (err) {
    // promise reject
  }
}
```

Nah setelah mengetahui hal ini, mari kita coba membuat endpoint selanjutnya dengan `async / await` yah !

#### Langkah 3 - Create (async / await)
1. Membuka file `app.js`
1. Memodifikasi file `app.js` untuk `TODO Kedua`
    ```js
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
    ```
1. Menjalankan kode dengan menggunakan perintah `npx nodemon app.js`
1. Mengecek dengan menggunakan HTTP client seperti `Postman`, `REST Client`, `Thunder Client`, ataupun HTTP client yang disukai.
1. Apabila kode yang dituliskan benar, maka seharusnya hasilnya sama dengan yang ada di `apiDocumentation.md`

Sampai di tahap ini untuk endpoint `POST /companies` sudah selesai, sekarang kita akan melanjutkan ke endpoint `DELETE /companies/:id`.


#### Langkah 4 - Delete (async / await)
1. Membuka file `app.js`
1. Memodifikasi file `app.js` untuk `TODO Ketiga`
    ```js
    app.delete("/companies/:id", async (req, res) => {
      try {
        const companyId = req.params.id;

        //  public static async destroy(options: object): Promise<number>
        const numOfCompaniesDeleted = await Company.destroy({
          where: {
            id: companyId,
          },
        });

        // apabila tidak ada yang didelete
        if (numOfCompaniesDeleted <= 0) {
          // kita akan membuat error bahwa company tidak ditemukan
          // gunakan custom error via throw
          throw new Error("COMPANY_NOT_FOUND");
        }

        // Apabila kondisi if dilewati = ada yang terhapus
        // maka penghapusan berhasil
        res.status(200).json({
          statusCode: 200,
          message: `Company ${companyId} deleted successfully`,
        });
      } catch (err) {
        let code = 500;
        let msg = "Internal Server Error";

        // Kita tangkap errornya via catch (err)
        // lalu karena tadi di atas thrownya adalah error dengan message
        // "COMPANY_NOT_FOUND", maka kita akan membuat logic apabila
        // messagenya adalah "COMPANY_NOT_FOUND"
        if (err.message === "COMPANY_NOT_FOUND") {
          code = 404;
          msg = "Company not found";
        }

        res.status(code).json({
          statusCode: code,
          error: {
            message: msg,
          },
        });
      }
    });
    ```
1. Menjalankan kode dengan menggunakan perintah `npx nodemon app.js`
1. Mengecek dengan menggunakan HTTP client seperti `Postman`, `REST Client`, `Thunder Client`, ataupun HTTP client yang disukai.
1. Apabila kode yang dituliskan benar, maka seharusnya hasilnya sama dengan yang ada di `apiDocumentation.md`

Sampai pada tahap ini artinya kita sudah berhasil membuat REST API yang menggunakan express js dan sudah menggunakan `async / await`

Selamat Belajar dan sampai jumpa di materi selanjutnya !

### Referensi
- https://jaxenter.com/serverless-application-model-173159.html
- https://www.restapitutorial.com/lessons/restquicktips.html
- https://www.restapitutorial.com/lessons/httpmethods.html
- https://www.restapitutorial.com/httpstatuscodes.html