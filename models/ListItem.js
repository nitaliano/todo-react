var uuid = require('node-uuid');

module.exports = ListItem;

function ListItem(data) {
	this.id = data.id || uuid.v4();
	this.name = data.name || '';
	this.checked = data.checked || false;
}

ListItem.prototype.update = function (updates) {
	if (!updates) {
		return;
	}

	if (typeof updates.name === 'string' && updates.name.length) {
		this.name = updates.name;
	}

	if (typeof updates.checked === 'boolean') {
		this.checked = updates.checked;
	}
};