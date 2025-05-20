import mongoose from "mongoose";

const TimeTableSchema = new mongoose.Schema({
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
    type: Number,
    required: true,
  },
  class: {
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

export const timeTable =
  mongoose.models.timeTable || mongoose.model("timeTable", TimeTableSchema);
