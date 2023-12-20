import { z } from 'zod'

export const issueFormSchema = z.object({
  title: z.string({
    required_error: 'Name is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
})
