var EventEmitter = require('events').EventEmitter,
	Dispatcher = require('../dispatcher/Dispatcher'),
	util = require('util');

module.exports = BaseStore;

function BaseStore() {
	BaseStore.super_.call(this);
	this.subscribe(this._registerToActions.bind(this));
}

util.inherits(BaseStore, EventEmitter);

BaseStore.prototype.subscribe = function (actionSubscribe) {
	Dispatcher.register(actionSubscribe);
};

BaseStore.prototype.emitChange = function () {
	this.emit('change');
};

BaseStore.prototype.addChangeListener = function (cb) {
	this.on('change', cb);
};

BaseStore.prototype.removeChangeListener = function (cb) {
	this.removeListener('change', cb);
};

BaseStore.prototype._registerToActions = function () {
	throw new Error('Child store needs to implement _registerToActions :)');
};