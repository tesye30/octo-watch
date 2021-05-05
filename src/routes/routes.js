const { Router } = require('express');
const UserController = require('../controller/UserController');
const routes = Router();

// Apenas para passar no teste
routes.get("/", (req, res) => {
  res.json({});
});

routes.get('/user', UserController.FindUserById);
routes.get('/users/', UserController.FindUsersByName);
routes.post('/user', UserController.CreateNewUser);
routes.delete('/user', UserController.DeleteUser);
routes.put('/user/:id', UserController.UpdateUserById);

module.exports = routes;