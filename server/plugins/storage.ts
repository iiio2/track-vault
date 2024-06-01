import redis from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const storage = useStorage()
  storage.mount(
    'redis',
    redis({
      base: 'redis',
      host: useRuntimeConfig().redis.host,
      port: +useRuntimeConfig().redis.port,
      username: useRuntimeConfig().redis.username,
      password: useRuntimeConfig().redis.password,
    })
  )
})
