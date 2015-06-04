var ListItem = require('./ListItem'),
	uuid = require('node-uuid'),
	util = require('util'),
	fs = require('fs');

module.exports = List;

function List(data) {
	this.id = data.id || uuid.v4();
	this.name = data.name || '';
	this.items = this._setItems(data.items) || [];
	this._itemsIndex = data._itemsIndex || this._setItemsIndex();
}

List.findOne = function (id, cb) {
	fs.readFile(util.format('data/lists/%s.json', id), 'utf8', function (err, data) {
		if (err) {
			return cb(err);
		}

		try {
			return cb(null, new List(JSON.parse(data)));
		} catch (e) {
			return cb(e);
		}
	});
};

List.prototype.addItem = function (data) {
	var item = new ListItem(data);
	this._itemsIndex[item.id] = this.items.length;
	this.items.push(item);
};

List.prototype.hasItem = function (id) {
	return this._itemsIndex[id];
};

List.prototype.updateItem = function (updates) {
	var item, itemIndex = this.hasItem(updates.id);

	if (typeof itemIndex === 'number') {
		item = new ListItem(this.items[itemIndex]);
		item.update(updates);
		this.items[itemIndex] = item;
	}
};

List.prototype.save = function (cb) {
	var self = this, data;

	try {
		data = JSON.stringify(this);
	} catch (e) {
		return cb(e);
	}

	fs.writeFile(util.format('data/lists/%s.json', this.id), data, function (err) {
		if (err) {
			return cb(err);
		}

		return cb(null, self);
	});
};

List.prototype._setItems = function (items) {
	var listItems;

	if (items.length) {
		listItems = [];
		for (var i = 0; i < items.length; i++) {
			listItems.push(new ListItem(items[i]));
		}
	}

	return listItems;
};

List.prototype._setItemsIndex = function () {
	var itemsIndex = {};

	if (this.items.length) {
		for (var i = 0; i < this.items.length; i++) {
			itemsIndex[this.items[i].id] = i;
		}
	}

	return itemsIndex;
};