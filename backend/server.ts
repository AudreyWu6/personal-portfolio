import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// Ensure environment variables are set
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Email credentials are not set in environment variables.");
  process.exit(1);
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Nodemailer configuration error:", error);
  } else {
    console.log("Ready to Send");
  }
});

interface ContactRequestBody {
  firstName: string;
  lastName: string;
  email: string; // Made required
  phone: string;
  message: string;
}

router.post("/contact", async (req: Request<{}, {}, ContactRequestBody>, res: Response) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  // Basic validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ code: 400, status: "All fields are required." });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ code: 400, status: "Invalid email format." });
  }

  const name = `${firstName} ${lastName}`;
  
  const mailOptions = {
    from: EMAIL_USER, // Your email
    to: EMAIL_USER,   // Sending to your email
    replyTo: email,   // User's email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await contactEmail.sendMail(mailOptions);
    res.json({ code: 200, status: "Message Sent" });
  } catch (error: any) { // Using 'any' to handle unknown error types
    console.error("Error sending email:", error);
    res.status(500).json({ code: 500, status: "Failed to send message" });
  }
});
