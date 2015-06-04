var React = require('react'),
	RouterContainer = require('../router/RouterContainer'),
	ListStore = require('../stores/ListStore'),
	ListActions = require('../actions/ListActions'),
	List = require('./List.react.js');

var EditList = React.createClass({
	getInitialState: function () {
		return this._getStateFromStore();
	},

	componentDidMount: function () {
		ListActions.getList(RouterContainer.get().getCurrentParams().id);
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
			name: ListStore.getName()
		};
	},

	render: function () {
		return (
			<List name={this.state.name} hideEditName="true" />
		);
	}
});

module.exports = EditList;