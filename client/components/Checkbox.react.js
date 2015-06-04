var React = require('react');

var Checkbox = React.createClass({
	propTypes: {
		checked: React.PropTypes.bool,
		onCheckChange: React.PropTypes.func
	},

	render: function () {
		return (
			<div className="checkbox">
				<label>
					<input
						type="checkbox"
						checked={this.props.checked}
						onChange={this.props.onCheckChange} />
				</label>
			</div>
		);
	}
});

module.exports = Checkbox;