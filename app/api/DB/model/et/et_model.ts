import mongoose from "mongoose";

const Et_TimeTableSchema = new mongoose.Schema({
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
  },
  className: {
    type: String,
    required: true,
  },
  building: {
    type: String,
  },
  hall: {
    type: String,
    // required: true,
  },
});

export const ET_timeTable =
  mongoose.models.ET_timeTable ||
  mongoose.model("ET_timeTable", Et_TimeTableSchema);
