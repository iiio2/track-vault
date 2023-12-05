import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issues = await prisma.issue.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return issues
})
