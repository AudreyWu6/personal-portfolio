"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", router);
const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
// Ensure environment variables are set
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Email credentials are not set in environment variables.");
    process.exit(1);
}
const contactEmail = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});
contactEmail.verify((error) => {
    if (error) {
        console.log("Nodemailer configuration error:", error);
    }
    else {
        console.log("Ready to Send");
    }
});
router.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        to: EMAIL_USER, // Sending to your email
        replyTo: email, // User's email
        subject: "Contact Form Submission - Portfolio",
        html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };
    try {
        yield contactEmail.sendMail(mailOptions);
        res.json({ code: 200, status: "Message Sent" });
    }
    catch (error) { // Using 'any' to handle unknown error types
        console.error("Error sending email:", error);
        res.status(500).json({ code: 500, status: "Failed to send message" });
    }
}));
