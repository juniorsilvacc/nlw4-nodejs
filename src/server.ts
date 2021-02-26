import 'reflect-metadata'
import express from 'express';
import './database';

const app = express();



app.get("/", (req, res) => {
    res.send({message: "Hello"});
});

app.post("/", (req, res) => {
    res.json({message: "Dados salvos com sucesso"});
});

app.listen(8080, () => {
    console.log("Server is running!")
});