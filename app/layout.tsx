import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from './utils/cn'
import { Header } from './header/header'

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
            <body className={cn('px-6 pb-16 pt-6', inter.className)}>
                <Header />

                <main>{children}</main>
            </body>
        </html>
    )
}
