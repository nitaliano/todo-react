var BaseStore = require('./BaseStore'),
	ListConstants = require('../constants/ListConstants'),
	ADD_AN_ITEM = ListConstants.ADD_AN_ITEM,
	UPDATE_AN_ITEM = ListConstants.UPDATE_AN_ITEM,
	LIST_NAME_CHANGE = ListConstants.LIST_NAME_CHANGE,
	GET_LIST = ListConstants.GET_LIST,
	util = require('util');

function ListStore() {
	ListStore.super_.call(this);
	this._id = null;
	this._items = [];
	this._name = '';
}

util.inherits(ListStore, BaseStore);

ListStore.prototype.getId = function () {
	return this._id;
};

ListStore.prototype.getItems = function () {
	return this._items;
};

ListStore.prototype.getItemById = function (id) {
	for (var i = 0; i < this._items.length; i++) {
		if (this._items[i].id === id) {
			return this._items[i];
		}
	}
	return {};
};

ListStore.prototype.getName = function () {
	return this._name;
};

ListStore.prototype.clean = function () {
	this._id = null;
	this._items = [];
	this._name = '';
};

ListStore.prototype._registerToActions = function (action) {
	var item;

	switch (action.actionType) {
		case ADD_AN_ITEM:
			this._items.push({
				id: Date.now(),
				checked: action.payload.checked,
				name: action.payload.name
			});
			this.emitChange();
			break;
		case UPDATE_AN_ITEM:
			item = this.getItemById(action.payload.id);
			item.name = action.payload.name;
			item.checked = action.payload.checked;
			this.emitChange();
			break;
		case LIST_NAME_CHANGE:
			this._name = action.payload.name;
			this.emitChange();
			break;
		case GET_LIST:
			console.log(action.payload);
			this._name = action.payload.name;
			this._items = action.payload.items;
			this._id = action.payload.id;
			this.emitChange();
			break;
		default:
			break;
	}
};

module.exports = new ListStore();