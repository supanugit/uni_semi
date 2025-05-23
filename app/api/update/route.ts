// import { NextRequest, NextResponse } from "next/server";
// // import { timeTable } from "../DB/model/it_Model";
// import { connectDB } from "../DB/connectDB";

// export async function PUT(req: NextRequest) {
//   await connectDB();
//   try {
//     // const result = await timeTable.updateMany({}, { department: "IT" });

//     return NextResponse.json({
//       status: 200,
//       message: "Department field set to 'IT' for all documents.",
//       updatedCount: result.modifiedCount,
//     });
//   } catch (error) {
//     return NextResponse.json({
//       status: 500,
//       message: "Failed to update documents",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// }
