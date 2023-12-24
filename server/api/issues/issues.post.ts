import prisma from '~/prisma/client'
import { issueFormSchema } from '../../../prisma/IssueFormSchema'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const result = issueFormSchema.safeParse(body)
  if (!result.success) {
    return result.error.issues[0].message
  }
  const issue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return { issue }
})
