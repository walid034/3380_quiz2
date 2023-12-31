const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://aminkhanm:mongotry@cluster0.patgqap.mongodb.net/Exam";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const studentRouter = require('./routes/students');

app.use(studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
