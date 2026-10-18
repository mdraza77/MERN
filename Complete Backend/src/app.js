const express = require("express");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());

module.exports = app;


// https://youtu.be/0IciwnJ6PJI?si=uJJ4Qay07N_bBPMn&t=9097