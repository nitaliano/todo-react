var React = require('react'),
	List = require('./List.react'),
	RouteHandler = require('react-router').RouteHandler;
	require('../stores/AlertStore');

var TodoApp = React.createClass({
	render: function () {
		return (
			<RouteHandler />
		);
	}
});

module.exports = TodoApp;