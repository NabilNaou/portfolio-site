const express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/students", (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/add-student", (req, res) => {
  const newStudent = new Student({
    student_name: "NabilNaou",
    student_email: "111@nu.nl",
    section: "NL",
    subjects: ["Math", "Gardening"],
    gender: "Male",
    dob: new Date("2000-01-01"),
  });

  newStudent
    .save()
    .then(() => res.json("Student added: " + newStudent.student_name))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
