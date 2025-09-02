# Clerk Authentication Setup Guide

This guide will help you configure Clerk authentication for your HireFlow dashboard application.

## Prerequisites

- A Clerk account (sign up at https://clerk.com/)
- Google OAuth credentials (if using Google sign-in)

## Step 1: Create a Clerk Application

1. Go to https://dashboard.clerk.com/
2. Click "Create Application"
3. Choose a name for your application (e.g., "HireFlow Dashboard")
4. Select the authentication methods you want to enable:
   - ✅ Email
   - ✅ Password
   - ✅ Google (OAuth)
5. Click "Create Application"

## Step 2: Configure Environment Variables

1. In your Clerk Dashboard, go to the "API Keys" section
2. Copy the following values and update your `.env.local` file:

```env
# Replace these with your actual Clerk keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# URLs for sign-in and sign-up pages (already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# URL to redirect to after signing in (already configured)
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Step 3: Configure Google OAuth (Optional)

To enable Google sign-in, you need to configure Google OAuth:

### 3.1: Create Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set the application type to "Web application"
6. Add authorized redirect URIs:
   - For development: `https://your-clerk-domain.clerk.accounts.dev/v1/oauth_callback`
   - For production: `https://your-production-domain.clerk.accounts.dev/v1/oauth_callback`

### 3.2: Configure Google OAuth in Clerk

1. In your Clerk Dashboard, go to "User & Authentication" → "Social Connections"
2. Enable "Google"
3. Enter your Google OAuth Client ID and Client Secret
4. Save the configuration

## Step 4: Configure Email/Password Authentication

1. In your Clerk Dashboard, go to "User & Authentication" → "Email, Phone, Username"
2. Enable the following options:
   - ✅ "Sign-up with email"
   - ✅ "Sign-in with email"
3. Go to "Password" tab and enable:
   - ✅ "Sign-up with password"
   - ✅ "Require a password at sign-up"

## Step 5: Test Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000`

3. You should be redirected to the sign-in page

4. Test both authentication methods:
   - Create an account with email/password
   - Sign in with Google OAuth

## Authentication Flow

### Pages Structure
- `/` - Home page (redirects based on auth status)
- `/sign-in/[[...sign-in]]` - Custom sign-in page with Google OAuth and email/password
- `/sign-up/[[...sign-up]]` - Custom sign-up page with Google OAuth and email/password
- `/sign-in/sso-callback` - OAuth callback for sign-in
- `/sign-up/sso-callback` - OAuth callback for sign-up
- `/dashboard` - Protected dashboard page

### Protected Routes
The middleware protects the following routes:
- `/dashboard/*` - Main dashboard and all sub-pages
- `/profile/*` - User profile pages
- `/settings/*` - Application settings

### Authentication Features
- ✅ Email/Password sign-up and sign-in
- ✅ Google OAuth authentication
- ✅ Email verification for new accounts
- ✅ Password reset functionality
- ✅ Protected routes with middleware
- ✅ User session management
- ✅ Sign-out functionality

## Troubleshooting

### Common Issues

1. **"Invalid publishable key" error**
   - Make sure your `.env.local` file has the correct Clerk keys
   - Restart your development server after updating environment variables

2. **Google OAuth not working**
   - Check that your Google OAuth redirect URIs match your Clerk domain
   - Ensure Google OAuth is enabled in your Clerk Dashboard

3. **Redirects not working**
   - Verify your environment variables for redirect URLs
   - Check that middleware is correctly configured

4. **User data not showing**
   - Ensure you're using the `useUser` hook from `@clerk/nextjs`
   - Check that the ClerkProvider wraps your application

### Development vs Production

- For development: Use test keys (starting with `pk_test_` and `sk_test_`)
- For production: Use live keys (starting with `pk_live_` and `sk_live_`)
- Update your Google OAuth redirect URIs for production

## Support

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk Discord Community](https://clerk.com/discord)
- [Clerk Dashboard](https://dashboard.clerk.com/)

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive keys
- Keep your Clerk secret key secure and never expose it in client-side code
- Regularly rotate your API keys for production applications
