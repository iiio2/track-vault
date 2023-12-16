import moment from 'moment'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      time: (createdAt: Date) => moment(createdAt).format('DD MMM, YYYY'),
    },
  }
})
