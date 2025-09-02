/**
 * Format date consistently for server-side rendering
 * This prevents hydration mismatches by avoiding locale-dependent formatting
 */
export function formatDateConsistent(dateString: string): string {
  const date = new Date(dateString)
  
  // Use manual formatting to ensure consistency across server/client
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()
  
  return `${month}/${day}/${year}`
}

/**
 * Format date for relative display (e.g., "2 days ago")
 * Falls back to absolute date if too old
 */
export function formatDateRelative(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday' 
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  
  // Fall back to consistent date format for older dates
  return formatDateConsistent(dateString)
}
