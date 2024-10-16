import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issues = await prisma.issue.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  })
  const count = await prisma.issue.groupBy({
    by: ['status'],
    _count: true,
  })
  return {
    issues: issues.map((issue) => ({
      id: issue.id,
      title: issue.title,
      status: issue.status,
    })),
    count,
  }
})
