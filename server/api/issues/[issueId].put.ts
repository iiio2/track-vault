import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = Number(getRouterParam(event, 'issueId'))
  const issue = await prisma.issue.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return issue
})
