require ("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const pool = require("./config/db");
const {hashSync, compareSync}  = require("bcrypt");
const {sign} = require("jsonwebtoken");

const password = "nassim";
const hashPasword = hashSync(password, 10);

app.get('/', (req, res)=>{
      res.json({
         name: "nassim",
         password: hashPasword,
         isCorrectPassword: compareSync(password, hashPasword),
         age: 31
      });
});

app.listen(process.env.APP_PORT, "127.0.0.1", ()=>{
    console.log("Server is running...", process.env.APP_PORT);
});