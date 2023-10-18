import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pekan Christian Fellowship',
  description: 'Established in 2023, Pekan Christian Fellowship is a vibrant community of Christian students united by faith. We are dedicated to connecting, supporting, and growing together in our shared journey with Christ. Join us, regardless of your denomination, and be part of an inclusive and faith-strengthening fellowship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
