import GoogleProvider from '@auth/core/providers/google'
import type { AuthConfig } from '@auth/core/types'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/prisma/client'

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
