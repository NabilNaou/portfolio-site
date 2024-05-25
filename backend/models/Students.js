const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    student_name: {
      type: String,
      required: true,
    },
    student_email: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Students", StudentSchema);
