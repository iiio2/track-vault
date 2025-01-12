import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
    },
  })
  return users
})
