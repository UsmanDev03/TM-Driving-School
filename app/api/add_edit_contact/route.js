import { NextResponse } from "next/server";
import { query } from "@/lib/db"; 
import { sendEmails } from "@/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();

    await query({
      query: `INSERT INTO leads (full_name, email, mobile_number, area, preferred_time, message) VALUES (?, ?, ?, ?, ?, ?)`,
      values: [body.full_name, body.email, body.mobile_number, body.area, body.preferred_time, body.message]
    });

    try {
      await sendEmails(body);
      console.log("Both emails (Admin & User) sent successfully");
    } catch (mailErr) {
      console.error("Mail Error:", mailErr.message);
    }

    return NextResponse.json({
      message: "Congratulations! Your driving lesson request has been submitted successfully."
    }, { status: 200 });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ message: "Error processing request" }, { status: 500 });
  }
}