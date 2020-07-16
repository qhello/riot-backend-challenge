import CACHE from '../cache'

export default async ctx => {
  // Input
  const { key } = ctx.params
  const { value } = ctx.request.body

  if (!value || isNaN(value)) {
    ctx.status = 403
    ctx.body = 'Invalid value parameter, expected a Number!'
    return
  }

  const element = {
    value: Math.round(value),
    timestamp: new Date().valueOf(),
  }

  if (!CACHE[key]) CACHE[key] = []

  CACHE[key].push(element)

  ctx.status = 200
}
