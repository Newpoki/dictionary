import { z } from 'zod'

const wordLicence = z.object({
    name: z.string(),
    url: z.string(),
})

const wordPhoneticSchema = z.object({
    audio: z.string(),
    sourceUrl: z.string().optional(),
    license: wordLicence.optional(),
    text: z.string().optional(),
})

const wordMeaningDefinitionSchema = z.object({
    definition: z.string(),
    synonyms: z.array(z.string()),
    antonyms: z.array(z.string()),
})

const wordMeaningSchema = z.object({
    partOfSpeech: z.string(),
    definitions: z.array(wordMeaningDefinitionSchema),
    synonyms: z.array(z.string()),
})

export const wordSchema = z.object({
    word: z.string(),
    phonetics: z.array(wordPhoneticSchema),
    meanings: z.array(wordMeaningSchema),
    license: wordLicence,
    sourceUrls: z.array(z.string()),
})
