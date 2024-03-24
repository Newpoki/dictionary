import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HeaderThemeSwitch } from './header-theme-switch'
import { ChevronDown } from '@/components/icons/chevron-down'
import { Dictionary } from '@/components/icons/dictionnary'
import { HeaderSearch } from './header-search'
import Link from 'next/link'

export const Header = () => {
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
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-4 px-2 md:gap-[18px]">
                            <span className="text-[14px] font-bold leading-[24px] md:text-[18px]">
                                Sans Serif
                            </span>

                            <ChevronDown className="text-purple-500" width={12} height={6} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent sideOffset={18}>
                            <DropdownMenuItem className="font-sans">Sans Serif</DropdownMenuItem>
                            <DropdownMenuItem className="font-serif">Serif</DropdownMenuItem>
                            <DropdownMenuItem className="font-mono">Mono</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className="h-8 w-[1px] bg-grey-300" />

                    <HeaderThemeSwitch />
                </section>
            </div>

            <HeaderSearch />
        </header>
    )
}
