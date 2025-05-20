import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI!);
    console.log("DB Connected...");
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
    process.exit(1);
  }
};
