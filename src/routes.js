import Router from '@koa/router'

import getMetricsSum from './controllers/getMetricsSum'
import postMetrics from './controllers/postMetrics'

const router = new Router()

router.get('/metrics/:key/sum', getMetricsSum)
router.post('/metrics/:key', postMetrics)

export default router
