import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, service } = body;

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // Send email using Resend
    const emailSent = await sendEmail({ name, email, phone, message, service, timestamp });

    if (emailSent) {
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully!'
      });
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}

async function sendEmail({ name, email, phone, message, service, timestamp }) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    console.log(RESEND_API_KEY);
    
    if (!RESEND_API_KEY) {
      console.log('Resend API key not configured');
      return false;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Aerial Bir Travel <onboarding@resend.dev>',
        to: 'chanderaerialbirtravel@gmail.com',
        subject: `New Contact Form Submission - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <p style="color: #666;">Received on: ${timestamp}</p>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                ${message}
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <p style="color: #9ca3af; font-size: 12px;">
              This email was sent from the Aerial Bir Travel contact form.
            </p>
          </div>
        `
      })
    });

    if (response.ok) {
      console.log('Email sent successfully');
      return true;
    } else {
      const error = await response.json();
      console.error('Failed to send email:', error);
      return false;
    }
  } catch (error) {
    console.error('Email error:', error);
    return false;
  }
}

