'use client'

import confusedEmoji from '@/public/confused-emoji.png'
import Image from 'next/image'

export default function Error() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
            <Image
                src={confusedEmoji}
                width={64}
                height={64}
                alt="A confused emoji"
                className="mb-11"
            />
            <h2 className="mb-6 text-h-s text-grey-700 dark:text-white">Something went wrong!</h2>

            <p className="text-body-m text-grey-500">
                Sorry pal, an unexpected error happened and we don&apos;t know how nor why.
            </p>
        </div>
    )
}
