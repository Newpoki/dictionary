import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dictionary',
    description: 'Search for the meaning of a word',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
