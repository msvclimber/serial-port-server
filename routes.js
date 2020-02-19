const Router = require('koa-router');
const spController = require('./controllers/sp');
const _ = Router();

_.get('/api/v1/serialports', spController.getComPorts);

module.exports = function(app) {
  app.use(_.routes());
};
// master
