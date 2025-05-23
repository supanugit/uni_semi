import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/DB/connectDB";
import { IT_timeTable } from "@/app/api/DB/model/it_Model";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data) {
      return NextResponse.json(
        { message: "No data provided" },
        { status: 400 }
      );
    }
    // if (
    //   !time ||
    //   !day ||
    //   !subject ||
    //   !floor ||
    //   !className ||
    //   !building ||
    //   !hall ||

    // ) {
    //   return NextResponse.json(
    //     { message: "Missing required fields" },
    //     { status: 400 }
    //   );
    // }

    await connectDB();

    const created = await IT_timeTable.insertMany(data);

    return NextResponse.json(
      {
        message: "IT Timetable entry created successfully",
        data: created,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("POST /timetable error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
