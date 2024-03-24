'use server'

import { redirect } from 'next/navigation'
import { searchFormValuesSchema } from './header-schemas'

export const searchWord = async (state: unknown, formData: FormData) => {
    const result = searchFormValuesSchema.safeParse({
        query: formData.get('query'),
    })

    if (result.success) {
        redirect(`/word/${result.data.query}`)
    }

    return { error: result.error.format() }
}
