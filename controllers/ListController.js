var util = require('util'),
	AbstractController = require('../common/controllers/AbstractController'),
	ListResponse = require('../common/http/responses/ListResponse'),
	ErrorCodes = require('../common/http/ErrorCodes'),
	List = require('../models/List');

module.exports = ListController;

function ListController() {
	ListController.super_.call(this);
}

util.inherits(ListController, AbstractController);

ListController.prototype.routes = function () {
	this.setRoute('/api/todolist/:id')
		.get(this.getListById.bind(this))
		.put(this.updateListById.bind(this));

	this.setRoute('/api/todolist')
		.post(this.createList.bind(this));
};

ListController.prototype.createList = function (req, res) {
	var self = this;

	if (this._isInvalidString(req.body.name)) {
		this.sendError(ErrorCodes.INVALID_LIST_NAME, res);
		return;
	}

	new List({ name: req.body.name, items: req.body.items }).save(function (err, list) {
		if (err) {
			self.sendError(ErrorCodes.UNABLE_TO_CREATE_LIST, res);
			return;
		}
		self.sendData(new ListResponse(list), res);
	});
};

ListController.prototype.getListById = function (req, res) {
	var self = this;

	if (this._isInvalidString(req.params.id)) {
		self.sendError(ErrorCodes.INVALID_LIST_ID, res);
		return;
	}

	List.findOne(req.params.id, function (err, list) {
		if (err) {
			self.sendError(err, res);
			return;
		}
		self.sendData(new ListResponse(list), res);
	});
};

ListController.prototype.updateListById = function (req, res) {
	var self = this;

	if (this._isInvalidString(req.params.id)) {
		self.sendError(ErrorCodes.INVALID_LIST_ID, res);
		return;
	}

	List.findOne(req.params.id, function (err, list) {
		var i, curItem;

		if (err) {
			self.sendError(ErrorCodes.UNABLE_TO_UPDATE_LIST, res);
			return;
		}

		if (req.body.name && typeof req.body.name === 'string' && req.body.name.length) {
			list.name = req.body.name;
		}

		if (req.body.items && Array.isArray(req.body.items)) {
			for (i = 0; i < req.body.items.length; i++) {
				curItem = req.body.items[i];

				if (typeof list.hasItem(curItem.id) === 'number') {
					list.updateItem(curItem);
				} else {
					list.addItem(curItem);
				}
			}
		}

		list.save(function (err) {
			if (err) {
				self.sendError(ErrorCodes.UNABLE_TO_UPDATE_LIST, res);
				return;
			}
			self.sendData(new ListResponse(list), res);
		});
	});
};

ListController.prototype._isInvalidString = function (str) {
	return !str || typeof str !== 'string' || str === '';
};