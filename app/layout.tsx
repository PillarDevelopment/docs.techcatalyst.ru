import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TechCatalyst AI Documentation',
  description:
    'Public product information for TechCatalyst AI: architecture, functionality, lifecycle, licensing, tariffs, and expert review materials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  )
}
