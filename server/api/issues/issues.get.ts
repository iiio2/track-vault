import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const { status } = getQuery(event) as any
  if (status) {
    const issues = await prisma.issue.findMany({
      where: {
        status,
      },
    })
    return issues
  }
  const issues = await prisma.issue.findMany()
  return issues
})
