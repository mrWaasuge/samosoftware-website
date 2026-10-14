const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// CORS - allow both local dev and production
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    process.env.FRONTEND_URL
].filter(Boolean)

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

app.use(express.json({ limit: '10kb' }))

// Input sanitizer - strip HTML tags
const sanitize = (str) => String(str).replace(/<[^>]*>/g, '').trim().slice(0, 2000)

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
})

// POST /api/contact
app.post('/api/contact', async (req, res) => {
    const { from_name, from_email, service, message } = req.body

    if (!from_name || !from_email || !message) {
        return res.status(400).json({ error: 'All fields are required' })
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(from_email)) {
        return res.status(400).json({ error: 'Invalid email address' })
    }

    // Sanitize all inputs before using in HTML
    const safeName    = sanitize(from_name)
    const safeEmail   = sanitize(from_email)
    const safeService = sanitize(service || 'Not specified')
    const safeMessage = sanitize(message)

    try {
        await transporter.sendMail({
            from: `"SamoSoftware Website" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            replyTo: safeEmail,
            subject: `New message from ${safeName} | ${safeService}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; border: 1px solid #e0e0e0; border-radius: 8px;">
                    <h2 style="color: #2E6DB4; margin-top: 0;">New Contact Message</h2>
                    <hr style="border: none; border-top: 2px solid #2E6DB4; margin-bottom: 20px;"/>
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${safeName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p>
                    <p style="margin: 8px 0;"><strong>Service:</strong> ${safeService}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;"/>
                    <p style="margin: 8px 0;"><strong>Message:</strong></p>
                    <p style="background: #f5f5f5; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${safeMessage}</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;"/>
                    <p style="color: #999; font-size: 12px; margin: 0;">Sent via SamoSoftware contact form</p>
                </div>
            `
        })

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ error: 'Failed to send email' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
