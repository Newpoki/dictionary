'use client'

import { Moon } from '@/components/icons/moon'
import { Skeleton } from '@/components/ui/skeleton'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

export const HeaderThemeSwitch = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const handleToggleThemeMode = useCallback(
        (isChecked: boolean) => {
            setTheme(isChecked ? 'dark' : 'light')
        },
        [setTheme]
    )

    // useEffect only runs on the client, so now we can safely show the UI
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="flex items-center gap-3">
            {mounted ? (
                <Switch
                    onCheckedChange={handleToggleThemeMode}
                    checked={resolvedTheme === 'dark'}
                />
            ) : (
                <Skeleton className="h-5 w-10 rounded-full" />
            )}

            {/* <Image src={Moon} alt="Icon showing the quarter of a moon" width={20} height={20} /> */}
            <Moon width={20} height={20} className="text-grey-500 dark:text-purple-500" />
        </div>
    )
}
