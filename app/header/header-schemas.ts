import { z } from 'zod'

export const searchFormValuesSchema = z.object({
    query: z.string().min(1, "Whoops, can't be empty..."),
})
