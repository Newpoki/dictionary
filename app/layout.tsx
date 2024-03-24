import type { Metadata } from 'next'
import { Inter as FontSans, Lora as FontSerif, Inconsolata as FontMono } from 'next/font/google'
import { Header } from './header/header'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

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
                    'font-sans antialiased',
                    fontSans.variable,
                    fontSerif.variable,
                    fontMono.variable
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="flex min-h-[100dvh] flex-col bg-white p-6 text-grey-700 dark:bg-grey-900 dark:text-white md:px-10 md:py-[58px] lg:mx-auto lg:w-[51dvw] lg:max-w-[1469px] lg:px-0">
                        <Header />

                        <main className="flex flex-1 flex-col">{children}</main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
