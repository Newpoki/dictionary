'use server'

import { redirect } from 'next/navigation'
import { searchFormValuesSchema } from './header-schemas'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { FONT_FAMILY_COOKIE_NAME } from '../font-family/font-family-constants'

export const searchWord = async (state: unknown, formData: FormData) => {
    const result = searchFormValuesSchema.safeParse({
        query: formData.get('query'),
    })

    if (result.success) {
        redirect(`/word/${result.data.query}`)
    }

    return { error: result.error.format() }
}

export const setFontFamilyCookie = async (state: unknown, formData: FormData) => {
    const parsedFontFamilyValue = z.string().safeParse(formData.get(FONT_FAMILY_COOKIE_NAME))

    if (parsedFontFamilyValue.success) {
        cookies().set(FONT_FAMILY_COOKIE_NAME, parsedFontFamilyValue.data)

        return
    }

    return { error: parsedFontFamilyValue.error.format() }
}
