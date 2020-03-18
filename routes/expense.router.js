const xx = require('../controllers/expense.controller.js');

const routes = (app) => {
 
  app.get('/crud', xx.get);
  app.put('/crud', xx.put);
  app.post('/crud', xx.post);
  app.delete('/crud', xx.del);
  app.get('/', xx.master);
  
}
module.exports = routes;