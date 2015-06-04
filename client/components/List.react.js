var React = require('react'),
	ListHeader = require('./ListHeader.react.js'),
	ListForm = require('./ListForm.react.js');

var List = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		hideEditName: React.PropTypes.string
	},

	render: function () {
		return (
			<div className="list">
				<ListHeader header={this.props.name} />
				<div className="container">
					<ListForm hideEditName={this.props.hideEditName} />
				</div>
			</div>
		);
	}
});

module.exports = List;