# Email Configuration Setup

This file contains instructions for setting up the email service using nodemailer.

## Environment Variables

Create a `.env.local` file in the `client` directory with the following content:

```
EMAIL_USER=sohamrc08@gmail.com
EMAIL_PASS=your-app-password-here
```

## Getting Your Gmail App Password

Since you're using Gmail (`sohamrc08@gmail.com`), you need to create an **App Password** instead of using your regular Gmail password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** section
3. Enable **2-Step Verification** (if not already enabled)
4. Once 2-Step Verification is enabled, go back to **Security**
5. Under "How you sign in to Google", click on **App passwords**
6. Select **Mail** as the app and **Other** as the device
7. Enter "Portfolio Email Service" as the device name
8. Click **Generate**
9. Copy the 16-character password (without spaces)
10. Paste this password as the value for `EMAIL_PASS` in your `.env.local` file

## Testing the Email Service

1. Start your development server:
   ```
   npm run dev
   ```

2. Navigate to any page with the ContactModal (e.g., `/services`)

3. Click "Get In Touch" to open the contact form

4. Fill out the form and submit

5. Check your email at `sohamrc08@gmail.com` for the message

## Email Features

✅ Sends emails to your Gmail address  
✅ Formatted HTML emails with sender information  
✅ Reply-to field set to sender's email for easy responses  
✅ Loading states during submission  
✅ Success/error feedback messages  
✅ Auto-close modal after successful submission  
✅ Form validation and error handling  

## Troubleshooting

**If emails are not sending:**

1. Verify your `.env.local` file is in the correct location (`client/.env.local`)
2. Make sure you're using an App Password, not your regular Gmail password
3. Check the browser console for error messages
4. Verify the API route is accessible at `/api/send-email`
5. Restart the development server after creating/editing `.env.local`

**Security Note:** Never commit your `.env.local` file to version control. It's already listed in `.gitignore` to prevent accidental commits.
