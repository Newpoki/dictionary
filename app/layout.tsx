import type { Metadata } from 'next'
import { Inter as FontSans, Lora as FontSerif, Inconsolata as FontMono } from 'next/font/google'
import { Header } from './header/header'
import { cn } from '@/lib/utils'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cookies } from 'next/headers'
import { getFontFamilyOrDefault } from './font-family/get-font-family-or-default'
import { FONT_FAMILY_COOKIE_NAME } from './font-family/font-family-constants'
import { ScrollArea } from '@/components/ui/scroll-area'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['400', '700'],
})
const fontSerif = FontSerif({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['400', '700'],
})
const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
    weight: ['400', '700'],
    style: 'normal',
})

export const metadata: Metadata = {
    title: 'Dictionary',
    description: 'Search for the meaning of a word',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    const fontFamily = getFontFamilyOrDefault(cookies().get(FONT_FAMILY_COOKIE_NAME)?.value)

    return (
        <html lang="en">
            <body
                className={cn(
                    'bg-white antialiased dark:bg-grey-900',
                    fontSans.variable,
                    fontSerif.variable,
                    fontMono.variable,
                    {
                        'font-sans': fontFamily === 'sans',
                        'font-serif': fontFamily === 'serif',
                        'font-mono': fontFamily === 'mono',
                    }
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ScrollArea className="h-[100dvh]">
                        <div className="relative flex flex-col p-6 pt-0 text-grey-700 dark:text-white md:px-10 md:pb-[58px] lg:mx-auto lg:w-[51dvw] lg:max-w-[1469px] lg:px-0">
                            <Header />

                            <main className="flex flex-1 flex-col">{children}</main>
                        </div>
                    </ScrollArea>
                </ThemeProvider>
            </body>
        </html>
    )
}
