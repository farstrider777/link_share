// Require your controllers here
const UsersController = require("../controllers/users");

module.exports = (app) => {
  // Add your routes here
  app.post('/users', UsersController.create);
  app.post('/login', UsersController.login);
};
