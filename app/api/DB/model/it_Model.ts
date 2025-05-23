import mongoose from "mongoose";

const It_TimeTableSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },

  day: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },

  floor: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  hall: {
    type: String,
    required: true,
  },
});

export const IT_timeTable =
  mongoose.models.IT_timeTable ||
  mongoose.model("IT_timeTable", It_TimeTableSchema);
