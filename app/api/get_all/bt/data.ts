import { connectDB } from "../../DB/connectDB";
import { BT_timeTable } from "../../DB/model/bt/bt_Model";

export const Fn_btdata = async () => {
  await connectDB();

  try {
    const bt_data = await BT_timeTable.find();
    if (bt_data.length === 0) {
      return null;
    }
    return bt_data;
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
  }
};
