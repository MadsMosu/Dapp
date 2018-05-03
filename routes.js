const routes = require('next-routes')();

routes.add('/blooddonations/:id', '/showBlood');
routes.add('/celltissuedonations/:id', '/showCellTissue');

module.exports = routes;