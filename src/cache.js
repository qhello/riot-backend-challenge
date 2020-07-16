import _ from 'lodash'

import config from './config'

const CACHE = {}

// In-memory object we will use as cache
export default CACHE

const cleanHistoricalData = () => {
  const timeLowerLimit = new Date().valueOf() - config.measurements.ttl

  // Here for each key, we will empty its array with "expired" entries we don't need anymore.
  Object.keys(CACHE).forEach(key => _.remove(CACHE[key], entry => entry.timestamp < timeLowerLimit))

  console.log('[SYSTEM] Cache purged!')
}

// Initialize garbage collector, to periodically purge the in-memory cache.
setInterval(() => cleanHistoricalData(), config.garbage.collector.interval)
