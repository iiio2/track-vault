import GoogleProvider from '@auth/core/providers/google'
import type { AuthConfig } from '@auth/core/types'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/prisma/client'

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authSecret,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
