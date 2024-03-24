'use client'

import { ChevronDown } from '@/components/icons/chevron-down'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { setFontFamilyCookie } from './header-actions'
import { useFormState } from 'react-dom'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { getFontFamilyOrDefault } from '../font-family/get-font-family-or-default'
import { FONT_FAMILY_COOKIE_NAME } from '../font-family/font-family-constants'

const options = [
    {
        label: 'Sans Serif',
        value: 'sans',
    },
    {
        label: 'Serif',
        value: 'serif',
    },
    {
        label: 'Mono',
        value: 'mono',
    },
] as const

type HeaderFontProps = {
    fontFamilyCookie: RequestCookie | undefined
}

export const HeaderFont = ({ fontFamilyCookie }: HeaderFontProps) => {
    const [, formAction] = useFormState(setFontFamilyCookie, null)

    const fontFamily = getFontFamilyOrDefault(fontFamilyCookie?.value)

    const selectedOption = options.find((option) => option.value === fontFamily) ?? options[0]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-4 px-2 md:gap-[18px]">
                <span className="text-[14px] font-bold leading-[24px] md:text-[18px]">
                    {selectedOption?.label}
                </span>

                <ChevronDown className="text-purple-500" width={12} height={6} />
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={18} defaultValue={selectedOption.value}>
                <form action={formAction} className="flex flex-col gap-3">
                    {options.map((option) => {
                        return (
                            <DropdownMenuItem
                                className={cn({
                                    'font-sans': option.value === 'sans',
                                    'font-serif': option.value === 'serif',
                                    'font-mono': option.value === 'mono',
                                    'text-purple-500': option.value === fontFamily,
                                })}
                                key={option.value}
                            >
                                <label className="cursor-pointer">
                                    {option.label}
                                    {/* Hidden button with a value act as a submit button but also as a way to send the data to the form */}
                                    <button
                                        hidden
                                        name={FONT_FAMILY_COOKIE_NAME}
                                        value={option.value}
                                    />
                                </label>
                            </DropdownMenuItem>
                        )
                    })}
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
