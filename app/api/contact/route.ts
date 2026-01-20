import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { db } from "@/lib/db"

function getMailer() {
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !port || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    auth: { user, pass },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate required fields
    if (!body.name || !body.phone || !body.email || !body.message || !body.consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const submission = await db.contactSubmission.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        truckType: body.truckType || null,
        serviceNeeded: body.serviceNeeded || null,
        message: body.message,
        consent: Boolean(body.consent),
      },
    })

    const transporter = getMailer()
    if (transporter) {
      const from =
        process.env.SMTP_FROM || "Goldman Truck Repair <service@goldmantruckrepair.com>"
      const to = process.env.SMTP_TO || from
      const subject = `New Service Inquiry - ${submission.name}`
      const submittedAt = submission.createdAt.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
      const details = [
        { label: "Name", value: submission.name },
        { label: "Phone", value: submission.phone },
        { label: "Email", value: submission.email || "Not provided" },
        { label: "Truck Type", value: submission.truckType || "Not specified" },
        { label: "Service Needed", value: submission.serviceNeeded || "Not specified" },
      ]

      await transporter.sendMail({
        from,
        to,
        replyTo: submission.email || undefined,
        subject,
        text: [
          `New Service Inquiry`,
          `Name: ${submission.name}`,
          `Phone: ${submission.phone}`,
          `Email: ${submission.email || "Not provided"}`,
          `Truck Type: ${submission.truckType || "Not specified"}`,
          `Service Needed: ${submission.serviceNeeded || "Not specified"}`,
          `Message: ${submission.message}`,
          `Submitted: ${submission.createdAt.toISOString()}`,
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; color: #0F172A; background: #F8FAFC; padding: 24px;">
            <div style="max-width: 640px; margin: 0 auto; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden;">
              <div style="padding: 20px 24px; background: #0F172A; color: #FFFFFF;">
                <div style="font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.8;">Goldman Truck Services</div>
                <div style="font-size: 22px; font-weight: 700; margin-top: 6px;">New Service Inquiry</div>
              </div>
              <div style="padding: 20px 24px;">
                <div style="font-size: 14px; color: #475569; margin-bottom: 16px;">
                  Submitted ${submittedAt}
                </div>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  ${details
                    .map(
                      (item) => `
                        <tr>
                          <td style="padding: 8px 0; color: #64748B; width: 140px;">${item.label}</td>
                          <td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${item.value}</td>
                        </tr>
                      `
                    )
                    .join("")}
                </table>
                <div style="margin-top: 16px; padding: 14px 16px; background: #F1F5F9; border-radius: 12px;">
                  <div style="font-size: 12px; color: #64748B; margin-bottom: 6px;">Message</div>
                  <div style="font-size: 14px; color: #0F172A; white-space: pre-wrap;">${submission.message}</div>
                </div>
                <div style="margin-top: 18px; display: flex; flex-wrap: wrap;">
                  <a href="tel:9173751002" style="display: inline-block; padding: 10px 16px; background: #2563EB; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Call Customer</a>
                  <a href="mailto:${submission.email || "service@goldmantruckrepair.com"}?subject=Re:%20${encodeURIComponent(
                    subject
                  )}" style="display: inline-block; margin-left: 10px; padding: 10px 16px; background: #0F172A; color: #FFFFFF; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Email Customer</a>
                </div>
              </div>
              <div style="padding: 16px 24px; background: #F8FAFC; color: #64748B; font-size: 12px;">
                Reply directly to this email to respond to the customer. Replies will go to their email address.
              </div>
            </div>
          </div>
        `,
      })
    } else {
      console.log("Contact submission saved. Email not configured.", submission.id)
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry. We'll contact you soon." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

