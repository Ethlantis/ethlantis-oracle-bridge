const Koa = require('koa');
const dotaRoutes = require('./routes/dota');

const app = new Koa();
const PORT = process.env.PORT || 8000;

app.use(dotaRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});

module.exports = server;
