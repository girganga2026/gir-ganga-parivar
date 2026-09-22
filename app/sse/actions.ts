"use server";

import nodemailer from "nodemailer";
import { lookup } from "node:dns/promises";

export type SseInterestFormData = {
  fullName: string;
  organization: string;
  designation: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  category: string;
  consent: boolean;
};

type SubmissionResult =
  | { success: true }
  | { success: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobilePattern = /^\+?[\d\s().-]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitSseInterest(
  formData: SseInterestFormData,
): Promise<SubmissionResult> {
  const fullName = formData.fullName?.trim();
  const email = formData.email?.trim();
  const rawMobile = formData.mobile?.trim() || "";
  const mobileDigits = rawMobile.replace(/\D/g, "");
  const mobile = `${rawMobile.startsWith("+") ? "+" : ""}${mobileDigits}`;

  if (!fullName) {
    return { success: false, message: "Please enter your full name." };
  }

  if (
    !mobilePattern.test(rawMobile) ||
    mobileDigits.length < 7 ||
    mobileDigits.length > 15
  ) {
    return {
      success: false,
      message: "Please enter a valid phone number with 7 to 15 digits, including the country code when applicable.",
    };
  }

  if (!emailPattern.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!formData.consent) {
    return { success: false, message: "Please accept the consent checkbox to submit." };
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  if (!host || !user || !pass || !Number.isInteger(port)) {
    console.error("SSE mail submission is missing valid SMTP configuration.");
    return {
      success: false,
      message: "Email service is not configured. Please contact the site administrator.",
    };
  }

  const fields = {
    "Full name": fullName,
    Email: email,
    Mobile: mobile,
    Organization: formData.organization?.trim() || "N/A",
    Designation: formData.designation?.trim() || "N/A",
    City: formData.city?.trim() || "N/A",
    State: formData.state?.trim() || "Gujarat",
    "Investor category": formData.category?.trim() || "Individual",
  };

  const text = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  const html = `
    <h2>New SSE Interest Submission</h2>
    <table style="border-collapse:collapse">
      ${Object.entries(fields)
        .map(
          ([label, value]) => `
            <tr>
              <th style="border:1px solid #ddd;padding:8px;text-align:left">${escapeHtml(label)}</th>
              <td style="border:1px solid #ddd;padding:8px">${escapeHtml(value)}</td>
            </tr>`,
        )
        .join("")}
    </table>
  `;

  try {
    // Resolve IPv4 explicitly because some hosts advertise IPv6 even when the
    // runtime has no usable IPv6 route. Keep the hostname for TLS/SNI checks.
    const { address: smtpAddress } = await lookup(host, { family: 4 });
    const transporter = nodemailer.createTransport({
      host: smtpAddress,
      port,
      secure,
      auth: { user, pass },
      tls: { servername: host },
    });

    await transporter.sendMail({
      from: `Girganga SSE Registration <${user}>`,
      to: user,
      replyTo: email,
      subject: `New SSE Interest Submission: ${fullName}`,
      text,
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("Nodemailer SSE submission failed:", error);
    return {
      success: false,
      message: "We could not submit your interest right now. Please try again later.",
    };
  }
}
