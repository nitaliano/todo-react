var React = require('react'),
	Checkbox = require('./Checkbox.react'),
	TextField = require('./TextField.react'),
	ListActions = require('../actions/ListActions');

var ListItem = React.createClass({
	propTypes: {
		id: React.PropTypes.number,
		checked: React.PropTypes.bool,
		name: React.PropTypes.string
	},

	onCheckedChange: function (e) {
		ListActions.updateItem(this.props.id, e.target.checked, this.props.name);
	},

 	onNameChange: function (e) {
		ListActions.updateItem(this.props.id, this.props.checked, e.target.value);
	},

	render: function () {
		return (
			<div className="form-group">
				<div className="col-sm-1">
					<Checkbox
						onCheckChange={this.onCheckedChange}
						checked={this.props.checked}/>
				</div>
				<div className="col-sm-5">
					<TextField
						type="text"
						placeholder="New list item"
						value={this.props.name}
						onTextChange={this.onNameChange} />
				</div>
			</div>
		);
	}
});

module.exports = ListItem;