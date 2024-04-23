const express = require("express");

const PORT = 8000;

// TO init app
const app = express();

// view engine

app.set("view engine", "ejs");

//listen server
app.listen(PORT, () =>{
    console.log(`server is runing on port ${PORT}`)
});