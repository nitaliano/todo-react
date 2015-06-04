var React = require('react');

var buttonStyles = {
	marginTop: 15
};

var ListFormButton = React.createClass({
	propTypes: {
		colSize: React.PropTypes.string,
		buttonText: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	getColClassName: function () {
		return 'col-sm-' + this.props.colSize;
	},

	render: function () {
		return (
			<div className={this.getColClassName}>
				<button className="btn btn-default"
								style={buttonStyles}
								onClick={this.props.onClick}>
					{this.props.buttonText}
				</button>
			</div>
		);
	}
});

module.exports = ListFormButton;