import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const { status, page, orderBy } = getQuery(event) as any

  if (status) {
    const issues = await prisma.issue.findMany({
      where: {
        status,
      },
      select: {
        id: true,
        title: true,
        status: true,
        createdAt: true,
      },
    })
    return issues
  }
  if (orderBy) {
    const issues = await prisma.issue.findMany({
      orderBy: {
        [orderBy]: 'desc',
      },
      select: {
        id: true,
        title: true,
        status: true,
        createdAt: true,
      },
    })
    return issues
  }

  const keys = await useStorage('redis').getKeys()

  for (let key of keys) {
    if (key === `issues:${page}`) {
      const issues = await useStorage('redis').getItem(key)
      return issues
    }
  }

  const issues = await prisma.issue.findMany({
    skip: !page ? 0 : (page - 1) * 6,
    take: 6,
    select: {
      id: true,
      title: true,
      status: true,
      createdAt: true,
    },
  })
  await useStorage('redis').setItem(`issues:${page}`, issues)

  return issues
})
