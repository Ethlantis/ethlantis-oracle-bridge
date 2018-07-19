const Router = require('koa-router');

const router = new Router();
const BASE_URL = '/api/dota';

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    ctx.body = {
      status: 'success',
    };
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
