import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issueId = Number(getRouterParam(event, 'issueId'))
  await useStorage('redis').clear()
  await prisma.issue.delete({
    where: {
      id: issueId,
    },
  })
  return {
    message: 'issue deleted successfully',
  }
})
