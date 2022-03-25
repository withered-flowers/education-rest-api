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
    - [Langkah 1 - Inisialisasi DB](#langkah-1---inisialisasi-db)
    - [Langkah 2 - Create (Promise)](#langkah-2---create-promise)
    - [Langkah 3 - Read (async / await)](#langkah-3---read-async-/-await)
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

Nah sekarang setelah mengetahui semua teorinya, mari kita masuk ke bagian terpenting dari semuanya, N-G-O-D-I-N-G !

### Let's Code
#### Case & Tools
#### Langkah 1 - Inisialisasi DB
#### Langkah 2 - Create (Promise)
#### Langkah 3 - Read (async / await)
#### Langkah 4 - Delete (async / await)

### Referensi
- https://jaxenter.com/serverless-application-model-173159.html

- https://www.restapitutorial.com/lessons/restquicktips.html
- https://www.restapitutorial.com/lessons/httpmethods.html
- https://www.restapitutorial.com/httpstatuscodes.html