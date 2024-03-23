import type { Metadata } from 'next'
import { Inter as FontSans, Lora as FontSerif, Inconsolata as FontMono } from 'next/font/google'
import { Header } from './header/header'
import { cn } from '@/lib/utils'

import './globals.css'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })
const fontSerif = FontSerif({ subsets: ['latin'], variable: '--font-serif' })
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' })

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
            <body
                className={cn(
                    'min-h-[100dvh] px-6 pb-16 pt-6 font-sans antialiased',
                    fontSans.variable,
                    fontSerif.variable,
                    fontMono.variable
                )}
            >
                <Header />

                <main>{children}</main>
            </body>
        </html>
    )
}
