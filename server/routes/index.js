// Require any middleware here.
const middleware = require("../middleware");
// Require your controllers here
const UsersController = require("../controllers/users");

module.exports = (app) => {
  // Add your routes here
  //app.post('/shelters', middleware.authenticate, ShelterController.create);
  app.get('/retrieveAll', UsersController.retrieveAll);
  app.post('/users', UsersController.create);
  app.post('/login', UsersController.login);
};
