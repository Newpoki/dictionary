import { HeaderThemeSwitch } from './header-theme-switch'
import { Dictionary } from '@/components/icons/dictionnary'
import { HeaderSearch } from './header-search'
import Link from 'next/link'
import { HeaderFont } from './header-font'
import { cookies } from 'next/headers'
import { FONT_FAMILY_COOKIE_NAME } from '../font-family/font-family-constants'

export const Header = () => {
    const cookiesStore = cookies()

    return (
        <header className="flex flex-col gap-6 md:gap-[51.5px]">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="dark:focus-ring-purple-500 rounded-sm outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-4 dark:focus:ring-offset-grey-900"
                >
                    <Dictionary className="text-grey-500" width={28} height={32} />
                </Link>

                <section className="flex items-center gap-4 md:gap-[26px]">
                    <HeaderFont fontFamilyCookie={cookiesStore.get(FONT_FAMILY_COOKIE_NAME)} />

                    <div className="h-8 w-[1px] bg-grey-300" />

                    <HeaderThemeSwitch />
                </section>
            </div>

            <HeaderSearch />
        </header>
    )
}
