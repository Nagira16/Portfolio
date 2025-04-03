"use server";

import nodemailer from "nodemailer";
import { sendMessageType } from "@/types";

export const sendMessage = async (
  prevState: sendMessageType,
  formData: FormData
): Promise<sendMessageType> => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
    text: `Message: ${message}\n\nFrom: ${name} <${email}>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Message Sent Successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};
