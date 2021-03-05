const express = require('express');
const appRoute = express.Router();
const userController = require("../controller").userController;

appRoute.route("/").get(userController.index);
appRoute.route("/details").get(userController.details);
appRoute.route("/contact").get(userController.contact);


/* api routes */
appRoute.route("/api/v1/user").get(userController.readUser);
appRoute.route("/api/v1/user/:id").get(userController.readSingleUser);
appRoute.route("/api/v1/user").post(userController.createUser);
appRoute.route("/api/v1/user/:id").patch(userController.updateUser);
appRoute.route("/api/v1/user/:id").delete(userController.deleteUser);
appRoute.route("**").get(userController.api); /* un known route */

module.exports = appRoute;
