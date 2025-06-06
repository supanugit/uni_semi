import { NextRequest, NextResponse } from "next/server";
import { Fn_itdata } from "./get_all/it/data";
import { Fn_etdata } from "./get_all/et/data";
import { Fn_btdata } from "./get_all/bt/data";

export async function POST(req: NextRequest) {
  const department = req.nextUrl.searchParams.get("dep");
  let classDetails: any;

  try {
    if (department == "it") {
      classDetails = await Fn_itdata();
    }
    if (department == "bt") {
      classDetails = await Fn_btdata();
    }
    if (department == "et") {
      classDetails = await Fn_etdata();
    }
    return NextResponse.json(
      { message: "Data fetched", classDetails: classDetails },
      { status: 200 }
    );
  } catch (error) {
    console.log(error instanceof Error ? error.message : error);
  }
}
