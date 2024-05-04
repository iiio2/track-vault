import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const id = Number(getRouterParam(event, 'issueId'))
  await useStorage('redis').clear()
  const issue = await prisma.issue.update({
    where: {
      id,
    },
    data: {
      title: body.title,
      description: body.description,
      assignedUserId: body.assignedUserId ? body.assignedUserId : null,
    },
  })
  return issue
})
