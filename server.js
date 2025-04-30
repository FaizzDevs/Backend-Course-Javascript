// URL : http://localhost:3000
//IP : 127.0.0.1:3000
const express = require('express');
const app = express();
const PORT = 3000;

let data = {
    name: "Muhammad Faizz"
}

// console.log('Starting server...');

// TYPE 1 BAGIAN WEBSITE
app.get("/", (req, res) => {
    // console.log("Yeay aku berhasil", req.method);
    // res.sendStatus(201);

    res.send("<h1>Homepage</h1>");
});

app.get("/dashboard", (req, res) => {
    // console.log("Aku sekarang sudah di dashboard");
    res.send("<h1>Dashboard</h1>");
})

// TYPE 2 BAGIAN API

app.get('/api/data', (req, res) => {
    console.log("Ini adalah data");
    res.send(data);
});


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));