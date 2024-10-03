import { authOptions } from '../auth/[...]'
import { getServerSession } from '#auth'
import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event, authOptions)
  const issueId = Number(getRouterParam(event, 'issueId'))
  const issue = await prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  })
  const assignedUserId = session ? issue?.assignedUserId : undefined
  return {
    issue: {
      id: issue?.id,
      title: issue?.title,
      status: issue?.status,
      ...(assignedUserId ? { assignedUserId } : {}),
      description: issue?.description,
      createdAt: issue?.createdAt,
    },
  }
})
