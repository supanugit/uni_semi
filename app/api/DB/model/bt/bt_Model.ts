import mongoose from "mongoose";

const Bt_TimeTableSchema = new mongoose.Schema({
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
  },
  building: {
    type: String,
  },
  hall: {
    type: String,
  },
});

export const BT_timeTable =
  mongoose.models.BT_timeTable ||
  mongoose.model("BT_timeTable", Bt_TimeTableSchema);
