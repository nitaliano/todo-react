var React = require('react'),
	TextField = require('./TextField.react'),
	ListItem = require('./ListItem.react.js'),
	ListFormButton = require('./ListFormButton.react'),
	ListStore = require('../stores/ListStore'),
	ListActions = require('../actions/ListActions');

var buttonStyle = {
	marginTop: 15
};

var ListForm = React.createClass({
	propTypes: {
		hideEditName: React.PropTypes.string
	},

	getInitialState: function () {
		return this._getStateFromStore();
	},

	componentDidMount: function () {
		ListStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function () {
		ListStore.removeChangeListener(this.onChange);
	},

	onChange: function () {
		this.setState(this._getStateFromStore());
	},

	_getStateFromStore: function () {
		return {
			id: ListStore.getId(),
			name: ListStore.getName(),
			items: ListStore.getItems()
		};
	},

	onListNameChange: function (e) {
		ListActions.updateListName(e.target.value);
	},

	onAddAnItemClick: function (e) {
		e.preventDefault();
		ListActions.addItem();
	},

	onSaveListClick: function (e) {
		e.preventDefault();
		ListActions.saveList(this.state);
	},

	hideEditName: function () {
		if (this.props.hideEditName === 'false') {
			return (
				<div className="form-group">
					<div className="col-sm-6">
						<TextField
							type="text"
							placeholder="Enter your list title here..."
							onTextChange={this.onListNameChange} />
					</div>
				</div>
			);
		}
	},

	render: function () {
		return (
			<form className="form-horizontal">
				{this.hideEditName()}

				{this.state.items.map(function (item) {
					return (
						<ListItem
							key={item.id}
							id={item.id}
							checked={item.checked}
							name={item.name}/>
					);
				})}

				<ListFormButton
					colSize='3'
					onClick={this.onAddAnItemClick}
					buttonText="Add an item" />

				<ListFormButton
					colSize='2'
					onClick={this.onSaveListClick}
					buttonText='Save' />
			</form>
		);
	}
});

module.exports = ListForm;