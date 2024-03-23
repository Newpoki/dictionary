'use client'

import { Switch } from '@/components/ui/switch'
import Moon from '@/public/moon.svg'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useCallback } from 'react'

export const HeaderThemeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme()

    const handleToggleThemeMode = useCallback(
        (isChecked: boolean) => {
            // We can't use the variable from the callback, because when app initialize
            // if user system preferencies is on dark
            setTheme(isChecked ? 'dark' : 'light')
        },
        [setTheme]
    )

    return (
        <div className="flex items-center">
            <Switch onCheckedChange={handleToggleThemeMode} checked={resolvedTheme === 'dark'} />

            <Image src={Moon} alt="Icon showing the quarter of a moon" width={20} height={20} />
        </div>
    )
}
