var ListConstants = require('../constants/ListConstants'),
	ADD_AN_ITEM = ListConstants.ADD_AN_ITEM,
	SAVED_LIST = ListConstants.SAVED_LIST,
	FAILED_SAVED_LIST = ListConstants.FAILED_SAVED_LIST,
	FAILED_GET_LIST = ListConstants.FAILED_GET_LIST,
	GET_LIST = ListConstants.GET_LIST,
	LIST_NAME_CHANGE = ListConstants.LIST_NAME_CHANGE,
	UPDATE_AN_ITEM = ListConstants.UPDATE_AN_ITEM,
	Dispatcher = require('../dispatcher/Dispatcher'),
	apiUtils = require('../utils/apiUtils');

module.exports = {
	addItem: function () {
		Dispatcher.dispatch({
			actionType: ADD_AN_ITEM,
			payload: {
				checked: false,
				name: 'New list item'
			}
		});
	},

	updateItem: function (id, checked, name) {
		Dispatcher.dispatch({
			actionType: UPDATE_AN_ITEM,
			payload: {
				id: id,
				checked: checked,
				name: name
			}
		});
	},

	updateListName: function (name) {
		Dispatcher.dispatch({
			actionType: LIST_NAME_CHANGE,
			payload: {
				name: name
			}
		});
	},

	saveList: function (list) {
		if (list.id) {
			apiUtils.updateList(list.id, list.name, list.items, function (err, data) {
				Dispatcher.dispatch({
					actionType: err ? FAILED_SAVED_LIST : SAVED_LIST
				});
			});
		} else {
			apiUtils.createList(list.name, list.items, function (err, data) {
				Dispatcher.dispatch({
					actionType: err ? FAILED_SAVED_LIST : SAVED_LIST
				});
			});
		}
	},

	getList: function (id) {
		apiUtils.getList(id, function (err, data) {
			if (err) {
				Dispatcher.dispatch({ actionType: FAILED_GET_LIST });
				return;
			}

			Dispatcher.dispatch({
				actionType: GET_LIST,
				payload: {
					id : data.body.id,
					name: data.body.name,
					items: data.body.items
				}
			});
		});
	}
};