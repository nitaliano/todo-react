module.exports = ListResponse;

function ListResponse(list) {
	this.id = list.id;
	this.name = list.name;
	this.items = list.items;
}