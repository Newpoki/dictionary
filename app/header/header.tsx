import Image from 'next/image'
import Dictionary from '@/public/dictionary.svg'
import Moon from '@/public/moon.svg'

export const Header = () => {
    return (
        <header>
            <div className="flex items-center">
                <Image src={Dictionary} alt="Dictionary logo" width={28} height={32} />
                <Image src={Moon} alt="Icon showing the quarter of a moon" width={20} height={20} />
            </div>
        </header>
    )
}
