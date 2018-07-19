const Router = require('koa-router');
const axios = require('axios');

const router = new Router();
const BASE_URL = '/api/dota';

router.get(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const { params: { id } } = ctx;
    const res = await axios(`https://api.opendota.com/api/matches/${id}`);

    const { data: { radiant_win, radiant_team, dire_team } } = res;
    let matchWinner;

    if (radiant_win) {
      matchWinner = radiant_team.name;
    } else {
      matchWinner = dire_team.name;
    }

    ctx.status = 200;
    ctx.body = {
      matchWinner,
      id,
    };
  } catch (e) {
    ctx.status = 400;
    console.log(e);
  }
});

module.exports = router;
