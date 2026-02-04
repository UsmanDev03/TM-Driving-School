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

  // Admin Notification
  const adminMail = {
    from: senderEmail,
    to: "tmdrive@yopmail.com",
    subject: `🚗 New Lead: ${full_name}`,
    html: `<div style="font-family: Arial, sans-serif; border: 1px solid #000; padding: 20px;">
             <h2 style="background: #000; color: #fff; padding: 10px;">New Booking Received</h2>
             <p><strong>Name:</strong> ${full_name}</p>
             <p><strong>Phone:</strong> ${mobile_number}</p>
             <p><strong>Area:</strong> ${area}</p>
             <p><strong>Message:</strong> ${message}</p>
           </div>`,
  };

  // User Confirmation
  const userMail = {
    from: senderEmail,
    to: email,
    subject: `Booking Confirmed - TM Driving School`,
    html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
             <h2>Hello ${full_name},</h2>
             <p>Thank you for contacting TM Driving School. We have received your request for <strong>${area}</strong>.</p>
             <p>Our instructor will contact you shortly on <strong>${mobile_number}</strong>.</p>
           </div>`,
  };

  return Promise.all([
    transporter.sendMail(adminMail),
    transporter.sendMail(userMail)
  ]);
}