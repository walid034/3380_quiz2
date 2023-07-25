const router = require("express").Router();
let Student = require("../models/student.model");

router.route("/").get((req, res) => {
    const name = "Walid Amin Khan";
    const sid = 300358711;

    // create a new Book object 
    const newStudent = new Student({
        name,
        sid
    });

    console.log("Student added");

    // save the new object (newBook)
    newStudent
        .save()
        .then(() => res.json("Student added"))
        .catch((err) => res.status(400).json("Error: " + err));
    });

module.exports = router;