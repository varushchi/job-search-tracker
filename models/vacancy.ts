import mongoose, { Schema } from "mongoose";

const vacancySchema = new Schema({
  company: {
    type: String,
    required: true
  },
  vacancy: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: false
  },
}) 

const Vacancy = mongoose.models.Vacancy || mongoose.model('Vacancy', vacancySchema)

export default Vacancy