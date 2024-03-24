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
        return wordFound.data
    }

    throw new Error('Failed to fetch API data')
}

export default async function Page({ params }: Props) {
    const wordData = await fetchWordData(params.slug)

    console.log({ wordData })

    return (
        <>
            <h1 className="text-[32px] font-bold">{wordData.word}</h1>
        </>
    )
}
