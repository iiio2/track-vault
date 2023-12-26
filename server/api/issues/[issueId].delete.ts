import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issueId = Number(getRouterParam(event, 'issueId'))
  await prisma.issue.delete({
    where: {
      id: issueId,
    },
  })
  return {
    message: 'issue deleted successfully',
  }
})
