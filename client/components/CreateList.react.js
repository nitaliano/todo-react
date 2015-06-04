var React = require('react'),
	List = require('./List.react.js');

var CreateList = React.createClass({
	render: function () {
		return (
			<List name="Create a New List" hideEditName="false" />
		);
	}
});

module.exports = CreateList;