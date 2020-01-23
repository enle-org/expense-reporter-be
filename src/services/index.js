const users = require('./users/users.service.js');
const organisations = require('./organisations/organisations.service.js');
const dashboard = require('./dashboard/dashboard.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(organisations);
  app.configure(dashboard);
};
