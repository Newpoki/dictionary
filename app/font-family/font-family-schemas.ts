import { z } from 'zod'

export const fontFamilySchema = z.enum(['sans', 'serif', 'mono'])
