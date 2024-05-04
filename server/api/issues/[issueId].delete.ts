import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issueId = Number(getRouterParam(event, 'issueId'))

  await Promise.all([
    await useStorage('redis').clear(),
    await prisma.issue.delete({
      where: {
        id: issueId,
      },
    }),
  ])

  return {
    message: 'Issue has been deleted successfully',
  }
})
