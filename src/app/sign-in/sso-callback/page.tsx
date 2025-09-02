import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export default function SSOCallback() {
  // Handle the redirect flow by rendering the Clerk component
  // This is the final step in the custom OAuth flow for sign-in
  return <AuthenticateWithRedirectCallback />
}
