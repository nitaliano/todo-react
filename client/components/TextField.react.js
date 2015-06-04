var React = require('react');

var TextField = React.createClass({
	propTypes: {
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		onTextChange: React.PropTypes.func,
		value: React.PropTypes.string
	},

	render: function () {
		return (
			<input
				type={this.props.type}
				className="form-control"
				placeholder={this.props.placeholder}
				onChange={this.props.onTextChange}
				value={this.props.value}/>
		);
	}
});

module.exports = TextField;