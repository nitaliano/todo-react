var React = require('react');

var ListHeader = React.createClass({
	propTypes:{
		header: React.PropTypes.string
	},

	render: function () {
		return (
			<div className="jumbotron">
				<div className="container">
					<h1>{this.props.header}</h1>
				</div>
			</div>
		);
	}
});

module.exports = ListHeader;