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
        <header className="sticky -top-16 z-10 flex flex-col gap-6 bg-white pb-6 pt-6 dark:bg-grey-900 md:-top-32 md:gap-[51.5px] md:pb-11 md:pt-[58px] lg:-top-28">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="Link to the home page"
                    className="dark:focus-ring-purple-500 rounded-sm outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-4 dark:focus:ring-offset-grey-900"
                >
                    <Dictionary className="h-8 w-7 text-grey-500 md:h-9 md:w-8" />
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
