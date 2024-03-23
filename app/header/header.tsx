import Image from 'next/image'
import Dictionary from '@/public/dictionary.svg'
import Moon from '@/public/moon.svg'
import ChevronDown from '@/public/chevron-down.svg'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'

export const Header = () => {
    return (
        <header>
            <div className="flex items-center">
                <Image src={Dictionary} alt="Dictionary logo" width={28} height={32} />

                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-4 px-2">
                        <span className="text-[14px] font-bold leading-[24px]">Sans Serif</span>

                        <Image
                            src={ChevronDown}
                            alt="A chevron pointing down"
                            width={12}
                            height={6}
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={18}>
                        <DropdownMenuItem className="font-sans">Sans Serif</DropdownMenuItem>
                        <DropdownMenuItem className="font-serif">Serif</DropdownMenuItem>
                        <DropdownMenuItem className="font-mono">Mono</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="h-8 w-[1px] bg-grey-300" />

                <Switch />

                <Image src={Moon} alt="Icon showing the quarter of a moon" width={20} height={20} />
            </div>
        </header>
    )
}
