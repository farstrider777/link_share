// Require any middleware here.
const middleware = require("../middleware");
// Require your controllers here
const UsersController = require("../controllers/users");

module.exports = (app) => {
  // Add your routes here
  app.get('/retrieveComments', UsersController.retrieveComments);
  app.post('/submitLink', middleware.authenticate, UsersController.submitLink);
  app.post('/comment', middleware.authenticate, UsersController.comment);
  app.get('/retrieveAll', UsersController.retrieveAll);
  app.post('/users', UsersController.create);
  app.post('/login', UsersController.login);
};
