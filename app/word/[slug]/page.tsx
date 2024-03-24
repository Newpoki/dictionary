import { WordPhoneticButton } from './word-phonetic-button'
import { wordSchema } from './word-schemas'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        slug: string
    }
}

const fetchWordData = async (word: string) => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

    const data = await res.json()

    if (res.status === 404) {
        notFound()
    }

    const wordFound = wordSchema.safeParse(data[0])

    if (wordFound.success) {
        // There are many phonetics for a same word. As we do not have specific designs to handle this
        // We're keeping either the first found phonetics which include audio, or the first phonetic
        const phoneticWithAudio = wordFound.data.phonetics.find((phonetic) => phonetic.audio !== '')
        const fallbackPhonetic = wordFound.data.phonetics[0]

        return { ...wordFound.data, phonetic: phoneticWithAudio ?? fallbackPhonetic }
    }

    throw new Error('Failed to fetch API data')
}

export default async function Page({ params }: Props) {
    const wordData = await fetchWordData(params.slug)

    return (
        <article className="pt-6 md:pt-12">
            <section className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[32px] font-bold md:text-h-l">{wordData.word}</h1>
                    {wordData.phonetic && (
                        <h3 className="text-body-m text-purple-500 md:text-h-m">
                            {wordData.phonetic.text}
                        </h3>
                    )}
                </div>

                {wordData.phonetic?.audio !== '' && <WordPhoneticButton />}
            </section>
        </article>
    )
}
