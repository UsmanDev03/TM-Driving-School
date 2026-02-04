import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; 
import { sendEmails } from "@/lib/mailer"; 

export async function POST(req) {
  try {
    const body = await req.json();
    
    // 1. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("driving_school");
    
    // 2. Insert Data
    const result = await db.collection("leads").insertOne({
      full_name: body.full_name,
      email: body.email,
      mobile_number: body.mobile_number,
      area: body.area,
      preferred_time: body.preferred_time,
      message: body.message,
      submittedAt: new Date(),
    });

    console.log("Data saved successfully with ID:", result.insertedId);

    // 3. Send Emails (Admin & User)
    try {
      await sendEmails(body);
    } catch (mailErr) {
      console.error("Email Error but data was saved:", mailErr.message);
      // Data save ho gaya hai, isliye hum success hi bhejenge
    }

    return NextResponse.json({
      message: "Congratulations! Your request has been submitted successfully."
    }, { status: 200 });

  } catch (error) {
    console.error("CRITICAL SERVER ERROR:", error);
    return NextResponse.json({ 
      message: "Server Error: " + (error.message || "Failed to process request")
    }, { status: 500 });
  }
}