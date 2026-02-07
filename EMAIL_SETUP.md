# Email Contact Form - Setup Guide

## 📧 What This Does

When visitors submit your contact form, you'll receive an email at **chanderaerialbirtravel@gmail.com** with all their details.

## ⚠️ Important: Email Address Limitation

With Resend's free tier, emails can only be sent to the email address you used to sign up with Resend. To send to different email addresses, you'll need to verify a domain (instructions below).

## ⚡ Quick Setup (2 Minutes)

### Step 1: Get Your Resend API Key

1. Go to **https://resend.com** and sign up (it's free!)
2. After login, go to **API Keys**: https://resend.com/api-keys
3. Click **"Create API Key"**
4. Name it "Aerial Bir Travel"
5. Copy the key (starts with `re_`)

### Step 2: Add API Key to Your Project

1. Create a new file `.env.local` in your project root folder:
   ```
   /home/rahul/Documents/arealbirtravels/.env.local
   ```

2. Add this line to the file:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
   
3. Save the file

### Step 3: Test It!

```bash
npm run dev
```

Visit http://localhost:3000/#contact and submit the form!

## 📬 What You'll Receive

Every form submission sends you an email like this:

```
Subject: New Contact Form Submission - [Customer Name]

New Contact Form Submission
Received on: Feb 7, 2026, 10:30 AM

Name: John Doe
Email: john@example.com
Phone: +91 78071 89316
Service Interest: Paragliding Adventures

Message:
I'm interested in booking a 3-day paragliding package...
```

## ✅ Features

- ✅ Instant email notifications to your Gmail
- ✅ Professional HTML formatted emails
- ✅ Loading spinner during submission
- ✅ Success/error messages to users
- ✅ Secure (API key only on server, never exposed)
- ✅ Free tier includes 100 emails/day

## 🔒 Security

- The `.env.local` file is automatically ignored by git (it's in `.gitignore`)
- Your API key is never sent to the browser
- All sensitive data stays on the server

## 📮 To Send Emails to a Different Address

If you want emails sent to `rahulthakurwork69@gmail.com` or any other email:

**Option 1: Change Resend Account (Easiest)**
1. Sign up for Resend with `rahulthakurwork69@gmail.com`
2. Get the new API key
3. Update `.env.local` with the new key
4. Update the `to` email in `/app/api/contact/route.js` (line 53)

**Option 2: Verify a Domain (For Production)**
1. Go to https://resend.com/domains
2. Add and verify your domain (e.g., `arealbirtravels.com`)
3. Change the `from` address in the code to use your domain:
   ```javascript
   from: 'Contact Form <noreply@arealbirtravels.com>'
   ```
4. Now you can send to any email address!

## 🚀 Deployment (Later)

When you deploy to Vercel/Netlify:

1. Add the `RESEND_API_KEY` in your hosting platform's environment variables settings
2. That's it! Your contact form will work in production

## 🎯 That's It!

Your contact form is ready. Just add your Resend API key and start receiving inquiries!

---

**Need Help?**
- Resend Documentation: https://resend.com/docs
- Resend has excellent free tier (100 emails/day)
- No credit card required for testing
