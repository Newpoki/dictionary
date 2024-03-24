import { fontFamilySchema } from './font-family-schemas'
import { z } from 'zod'

export const getFontFamilyOrDefault = (
    value: string | undefined
): z.infer<typeof fontFamilySchema> => {
    const parsedValue = fontFamilySchema.safeParse(value)

    return parsedValue.success ? parsedValue.data : 'sans'
}
