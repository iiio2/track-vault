import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany()
  return users.map((user) => ({ id: user.id, name: user.name }))
})
