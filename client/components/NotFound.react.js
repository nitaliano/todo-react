var React = require('react'),
	ListHeader = require('./ListHeader.react');

var NotFound = React.createClass({
	render: function () {
		return (
			<ListHeader header="Page Not Found" />
		);
	}
});

module.exports = NotFound;