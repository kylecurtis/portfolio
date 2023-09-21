import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Kyle Curtis: Developer Portfolio',
  description: 'My professional career compiled into a single NextJS application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="ctp-mocha bg-ctp-crust">{children}</body>
    </html>
  )
}
