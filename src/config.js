import dotenv from 'dotenv'

dotenv.config()

export default {
  measurements: {
    ttl: process.env.MEASUREMENTS_TTL || 60 * 60 * 1000,
  },
  garbage: {
    collector: {
      interval: process.env.GC_INTERVAL || 5 * 60 * 1000,
    },
  },
  port: process.env.PORT || 3000,
}
