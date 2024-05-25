const Student = require("../models/studentModel");

exports.getStudents = (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.addStudent = (req, res) => {
  const newStudent = new Student({
    student_name: "Napsie",
    student_email: "napsie@example.nl",
    section: "NL",
    subjects: ["Math", "Gardening"],
    gender: "Male",
    dob: new Date("2000-01-01"),
  });

  newStudent
    .save()
    .then(() => res.json("Student added successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};
