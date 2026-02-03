import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  let connection;
  try {
    const body = await request.json();
    const { full_name, mobile_number, area, preferred_time, message } = body;

    if (!full_name || !mobile_number) {
      return NextResponse.json({ message: "Name and Phone are required!" }, { status: 400 });
    }

    connection = await db();
    const sql = `INSERT INTO leads (full_name, mobile_number, area, preferred_time, message) VALUES (?, ?, ?, ?, ?)`;
    await connection.execute(sql, [full_name, mobile_number, area, preferred_time, message || ""]);

    return NextResponse.json({ 
      success: true, 
      message: "Booking received! Turon Miah will contact you shortly." 
    }, { status: 200 });

  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Server is busy. Please try calling directly." 
    }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}