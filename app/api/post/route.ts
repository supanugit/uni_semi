import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/DB/connectDB";
import { timeTable } from "@/app/api/DB/model/timeTable";

export async function POST(req: NextRequest) {
  try {
    const { time, day, subject, floor, className, building, hall } =
      await req.json();

    if (
      !time ||
      !day ||
      !subject ||
      !floor ||
      !className ||
      !building ||
      !hall
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const created = await timeTable.create({
      time,
      day,
      subject,
      floor,
      class: className,
      building,
      hall,
    });

    return NextResponse.json(
      {
        message: "Timetable entry created successfully",
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
