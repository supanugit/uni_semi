import { connectDB } from "../../DB/connectDB";
import { IT_timeTable } from "../../DB/model/it_Model";

export const Fn_itdata = async () => {
  await connectDB();

  try {
    const it_data = await IT_timeTable.find();
    if (it_data.length === 0) {
      return null;
    }
    return it_data;
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
  }
};
