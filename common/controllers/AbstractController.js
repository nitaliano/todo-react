var express = require('express');
var ApiError = require('../http/responses/ApiError');

module.exports = AbstractController;

function AbstractController() {
	this._router = express.Router();
	this.routes();
}

AbstractController.prototype.routes = function () {
	throw new Error('Child must implement routes');
};

AbstractController.prototype.getRouter = function () {
	return this._router;
};

AbstractController.prototype.setRoute = function (route) {
	return this._router.route(route);
};

AbstractController.prototype.sendError = function (err, res) {
	res.status(500);
	res.json(new ApiError(err));
};

AbstractController.prototype.sendData = function (data, res) {
	res.status(200);
	res.json(data);
};