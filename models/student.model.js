const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: Number, required: true }
});

const Student = mongoose.model("Quize", todoSchema);
module.exports = Student;