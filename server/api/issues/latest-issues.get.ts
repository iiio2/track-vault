import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issues = await prisma.issue.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      title: true,
      status: true,
    },
  })
  const count = await prisma.issue.groupBy({
    by: ['status'],
    _count: true,
  })
  return {
    issues,
    count,
  }
})
