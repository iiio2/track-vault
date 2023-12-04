import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const issueId = Number(getRouterParam(event, 'issueId'))
  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  })
  return {
    issue,
  }
})
