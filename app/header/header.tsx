import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HeaderThemeSwitch } from './header-theme-switch'
import { ChevronDown } from '@/components/icons/chevron-down'
import { Dictionary } from '@/components/icons/dictionnary'

export const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <Dictionary className="text-grey-500" width={28} height={32} />

                <section className="flex items-center gap-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-4 px-2">
                            <span className="text-[14px] font-bold leading-[24px]">Sans Serif</span>

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
        </header>
    )
}
