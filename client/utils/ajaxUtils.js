var http = require('superagent');

module.exports = {
	get: function (url, data, cb) {
		http
			.get(url)
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.query(data)
			.end(end(cb));
	},

	put: function (url, data, cb) {
		http
			.put(url)
			.set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.send(data)
			.end(end(cb));
	},

	post: function (url, data, cb) {
		http
			.post(url)
			.set('Accept', 'application/json')
			.send(data)
			.end(end(cb));
	}
};

function end(cb) {
	return function (err, res) {
		if (err) {
			return cb(err);
		}
		return cb(null, res);
	};
}