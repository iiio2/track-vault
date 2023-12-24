import { z } from 'zod'

export const issueFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).trim(),
  description: z.string().min(1, { message: 'Description is required' }).trim(),
})
