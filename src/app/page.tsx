import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Home() {
  const { userId } = await auth()
  
  // Redirect authenticated users to dashboard, unauthenticated users to sign-in
  if (userId) {
    redirect('/dashboard')
  } else {
    redirect('/sign-in')
  }
}
