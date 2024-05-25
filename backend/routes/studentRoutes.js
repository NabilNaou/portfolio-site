const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");
const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents);

router.get("/add-student", studentController.addStudent);

module.exports = router;
