var ajaxUtils = require('./ajaxUtils');

module.exports = {
	createList: function (name, items, cb) {
		ajaxUtils.post('/api/todolist', {
			name: name,
			items: items
		}, cb);
	},

	getList: function (id, cb) {
		ajaxUtils.get('/api/todolist/' + id, null, cb);
	},

	updateList: function (id, name, items, cb) {
		ajaxUtils.put('/api/todolist/' + id, {
			name: name,
			items: items
		}, cb);
	}
};