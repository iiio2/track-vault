import prisma from '~/prisma/client'

export default defineEventHandler(async () => {
  const totalIssues = await prisma.issue.count()
  return totalIssues
})
