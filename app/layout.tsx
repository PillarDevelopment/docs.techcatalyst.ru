import './globals.css'
import type { Metadata } from 'next'

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
      <body className="antialiased">{children}</body>
    </html>
  )
}
