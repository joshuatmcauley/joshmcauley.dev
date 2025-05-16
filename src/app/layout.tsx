import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Josh McAuley - Portfolio',
  description: 'Computer Science Graduate Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 