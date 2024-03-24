import Image from 'next/image'
import confusedEmoji from '@/public/confused-emoji.png'

type ErrorLayoutProps = {
    title: string
    description: string
}

export const ErrorLayout = ({ title, description }: ErrorLayoutProps) => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
            <Image
                src={confusedEmoji}
                width={64}
                height={64}
                alt="A confused emoji"
                className="mb-11"
            />
            <h2 className="mb-6 text-h-s text-grey-700 dark:text-white">{title}</h2>

            <p className="text-body-m text-grey-500">{description}</p>
        </div>
    )
}
