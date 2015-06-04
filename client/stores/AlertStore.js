var BaseStore = require('./BaseStore'),
	ListConstants = require('../constants/ListConstants'),
	SAVED_LIST = ListConstants.SAVED_LIST,
	FAILED_SAVED_LIST = ListConstants.FAILED_SAVED_LIST,
	FAILED_GET_LIST = ListConstants.FAILED_GET_LIST,
	util = require('util');

function AlertStore() {
	AlertStore.super_.call(this);
}

util.inherits(AlertStore, BaseStore);

AlertStore.prototype._registerToActions = function (action) {
	switch (action.actionType) {
		case SAVED_LIST:
			alert('List has been saved!');
			break;
		case FAILED_SAVED_LIST:
			alert('List could not be saved, please try again :)');
			break;
		case FAILED_GET_LIST:
			alert('Failed retrieving your list :(')
		default:
			break;
	}
};

module.exports = new AlertStore();