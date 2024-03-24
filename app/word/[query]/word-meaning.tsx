import { z } from 'zod'
import { wordSchema } from './word-schemas'
import Link from 'next/link'

type WordMeaningProps = {
    meaning: z.infer<typeof wordSchema.shape.meanings>[number]
}

export const WordMeaning = ({ meaning }: WordMeaningProps) => {
    const hasSynonyms = meaning.synonyms.length > 0

    return (
        <li>
            <div className="mb-8 flex items-center gap-4 md:mb-8 md:gap-5">
                <h3 className="text-[18px] font-bold italic md:text-[24px]">
                    {meaning.partOfSpeech}
                </h3>
                <hr className="h-[1px] w-full border-none bg-grey-300" />
            </div>

            <h4 className="mb-4 text-[16px] text-grey-500 md:mb-6 md:text-h-s">Meaning</h4>

            <div className="flex flex-col gap-6 md:gap-10 lg:gap-16">
                <ul className="flex list-outside list-disc flex-col gap-3 pl-5 text-[15px] leading-6 marker:text-purple-700 md:pl-14 md:text-b-m">
                    {meaning.definitions.map((definition) => {
                        return (
                            <li key={definition.definition}>
                                <div className="flex flex-col gap-3">
                                    <p>{definition.definition}</p>

                                    {definition.example != null && (
                                        <blockquote className="text-grey-500">
                                            &#8220;{definition.example} &#8221;
                                        </blockquote>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>

                {hasSynonyms && (
                    <div className="flex items-baseline gap-6">
                        <h4 className="mb-4 text-[16px] text-grey-500 md:mb-6 md:text-h-s">
                            Synonyms
                        </h4>

                        <ul className="flex flex-wrap gap-2 text-[16px] font-bold text-purple-500 md:gap-3 md:text-[20px]">
                            {meaning.synonyms.map((synonym) => {
                                return (
                                    <li
                                        key={synonym}
                                        className="hover:underline hover:underline-offset-2 md:hover:underline-offset-4"
                                    >
                                        <Link
                                            href={`/word/${synonym}`}
                                            className="rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-grey-900"
                                        >
                                            {synonym}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </li>
    )
}
