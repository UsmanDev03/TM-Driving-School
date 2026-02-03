// lib/mailer.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.teqnoor.info",
  port: 465,
  secure: true,
  auth: {
    user: "megaplus@teqnoor.info",
    pass: "123Admin@123",
  },
});

export async function sendEmails(data) {
  const { full_name, email, mobile_number, area, message } = data;
  const senderEmail = `"TM Driving School" <megaplus@teqnoor.info>`;

  // Common Styles
  const mainStyle = "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;";
  const headerStyle = "background-color: #000000; color: #ffffff; padding: 30px; text-align: center;";
  const bodyStyle = "padding: 40px 30px; background-color: #ffffff;";
  const footerStyle = "background-color: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eeeeee;";
  const tableStyle = "width: 100%; border-collapse: collapse; margin-top: 20px;";
  const tdLabel = "padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; width: 30%; font-size: 14px;";
  const tdValue = "padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #000; font-weight: bold; font-size: 14px;";

  // 1. ADMIN EMAIL (Premium Black/White Design)
  const adminMail = {
    from: senderEmail,
    to: "tmdrive@yopmail.com",
    subject: `🚗 New Booking Request: ${full_name}`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">New Lead Alert</h1>
        </div>
        <div style="${bodyStyle}">
          <p style="margin-top: 0; color: #666;">A new student has submitted a booking request:</p>
          <table style="${tableStyle}">
            <tr><td style="${tdLabel}">Student Name</td><td style="${tdValue}">${full_name}</td></tr>
            <tr><td style="${tdLabel}">Phone Number</td><td style="${tdValue}">${mobile_number}</td></tr>
            <tr><td style="${tdLabel}">Email Address</td><td style="${tdValue}">${email}</td></tr>
            <tr><td style="${tdLabel}">Preferred Area</td><td style="${tdValue}">${area}</td></tr>
          </table>
          <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 10px; font-size: 13px; text-transform: uppercase;">Message:</strong>
            <span style="font-size: 15px; font-style: italic; color: #333;">"${message || "No message provided."}"</span>
          </div>
        </div>
        <div style="${footerStyle}">
          TM Driving School Internal Notification System
        </div>
      </div>
    `,
  };

  // 2. USER EMAIL (Elegant & Welcoming)
  const userMail = {
    from: senderEmail,
    to: email,
    subject: `Booking Confirmed - TM Driving School`,
    html: `
      <div style="${mainStyle}">
        <div style="${headerStyle}">
          <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">TM Driving School</h1>
        </div>
        <div style="${bodyStyle}">
          <h2 style="margin-top: 0; font-size: 24px;">Hi ${full_name},</h2>
          <p style="font-size: 16px; color: #444;">Your booking request has been successfully received. We're excited to help you get behind the wheel!</p>
          <div style="margin: 30px 0; border-left: 4px solid #000; padding-left: 20px;">
            <p style="margin: 5px 0;"><strong>Location:</strong> ${area}</p>
            <p style="margin: 5px 0;"><strong>Our instructor will call you at:</strong> ${mobile_number}</p>
          </div>
          <p style="font-size: 14px; color: #666;">No further action is required from your side. We will contact you shortly to finalize your first lesson schedule.</p>
        </div>
        <div style="${footerStyle}">
          &copy; ${new Date().getFullYear()} TM Driving School. All rights reserved.<br>
          Safe Driving Starts Here.
        </div>
      </div>
    `,
  };

  return Promise.all([
    transporter.sendMail(adminMail),
    transporter.sendMail(userMail)
  ]);
}