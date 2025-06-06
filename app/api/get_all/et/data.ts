import { connectDB } from "../../DB/connectDB";
import { ET_timeTable } from "../../DB/model/et/et_model";

export const Fn_etdata = async () => {
  await connectDB();
  try {
    const et_data = await ET_timeTable.find();
    if (et_data.length === 0) {
      return null;
    }
    return et_data;
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
  }
};
