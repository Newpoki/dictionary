import { cn } from '@/lib/utils'
import { WordMeaning } from './word-meaning'
import { WordPhoneticButton } from './word-phonetic-button'
import { wordSchema } from './word-schemas'
import { notFound } from 'next/navigation'
import { External } from '@/components/icons/external'

type Props = {
    params: {
        query: string
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
    const wordData = await fetchWordData(params.query)

    const hasSources = wordData.sourceUrls.length > 0

    return (
        <article className="flex flex-col pt-6 md:pt-11">
            <section className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[32px] font-bold md:text-h-l">{wordData.word}</h1>
                    {wordData.phonetic && (
                        <h2 className="text-body-m text-purple-500 md:text-h-m">
                            {wordData.phonetic.text}
                        </h2>
                    )}
                </div>

                {wordData.phonetic?.audio !== '' && <WordPhoneticButton />}
            </section>

            <section
                className={cn('flex flex-col gap-8 pt-8 md:gap-10 md:pt-10', {
                    'mb-6 md:mb-10': hasSources,
                })}
            >
                <ul className="flex flex-col gap-8">
                    {wordData.meanings.map((meaning) => {
                        return <WordMeaning key={meaning.partOfSpeech} meaning={meaning} />
                    })}
                </ul>

                {hasSources && <hr className="h-[1px] w-full border-none bg-grey-300" />}
            </section>

            {hasSources && (
                <section className="flex flex-col gap-2 text-b-s md:flex-row md:gap-6">
                    <p className="text-grey-500 underline underline-offset-2 md:underline-offset-4">
                        Source
                    </p>

                    <ul className="flex flex-col gap-2 overflow-hidden md:gap-4">
                        {wordData.sourceUrls.map((sourceUrl) => (
                            <li key={sourceUrl}>
                                <a
                                    className="inline-flex w-full items-center gap-2 underline"
                                    href={sourceUrl}
                                    target="_blank"
                                >
                                    <span className="truncate">{sourceUrl}</span>
                                    <External className="h-3 w-3 flex-shrink-0 text-grey-500" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    )
}
