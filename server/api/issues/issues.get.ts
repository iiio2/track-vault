import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const { status, page, orderBy } = getQuery(event) as any
  if (status) {
    const issues = await prisma.issue.findMany({
      where: {
        status,
      },
    })
    return issues
  }
  if (orderBy) {
    const issues = await prisma.issue.findMany({
      orderBy: {
        [orderBy]: 'desc',
      },
    })
    return issues
  }
  const issues = await prisma.issue.findMany({
    skip: !page ? 0 : (page - 1) * 6,
    take: 6,
  })
  return issues
})
