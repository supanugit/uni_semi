import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "./../DB/connectDB";
import {BT_timeTable  } from "../DB/model/bt/bt_Model";

export async function GET(req: NextRequest) {
  const dayParam = req.nextUrl.searchParams.get("day");

  if (dayParam === null) {
    return NextResponse.json({ message: "No day found" }, { status: 400 });
  }

  const dayNumber = Number(dayParam);

  if (isNaN(dayNumber) || dayNumber < 0 || dayNumber > 6) {
    return NextResponse.json(
      { message: "Invalid day number" },
      { status: 400 }
    );
  }

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[dayNumber];

  try {
    await connectDB(); // ✅ Await DB connection

    const cls = await BT_timeTable.find({ day: dayName }); // ✅ Await query

    if (!cls || cls.length === 0) {
      return NextResponse.json({ message: "No Class found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Class found",
        classDetails: cls,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    return NextResponse.json(
      { message: "Error in getting class" },
      { status: 500 }
    );
  }
}
