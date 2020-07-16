import _ from 'lodash'

import config from '../config'
import CACHE from '../cache'

export default async ctx => {
  // Input
  const { key } = ctx.params

  if (!CACHE[key]) {
    ctx.body = 0
    return
  }

  const timeUpperLimit = new Date().valueOf() - config.measurements.ttl

  // Let's ignore "expired" entries that are still in cache
  const elementsToSum = CACHE[key].filter(({ timestamp }) => timestamp > timeUpperLimit)

  // Pick their values
  const valuesToSum = elementsToSum.map(({ value }) => value)

  // Sum them & return!
  ctx.body = _.sum(valuesToSum)
}
