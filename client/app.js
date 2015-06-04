var React = require('react'),
	TodoApp = require('./components/TodoApp.react'),
	CreateList = require('./components/CreateList.react'),
	EditList = require('./components/EditList.react'),
	NotFound = require('./components/NotFound.react'),
	RouterContainer = require('./router/RouterContainer'),
	Router = require('react-router'),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	NotFoundRoute = Router.NotFoundRoute;

var routes = (
	<Route handler={TodoApp} path="/">
		<DefaultRoute handler={CreateList} />
		<Route name="list" path="list/:id" handler={EditList} />
		<NotFoundRoute handler={NotFound}/>
	</Route>
);

var router = Router.create({
	routes: routes,
	location: Router.HistoryLocation
});

RouterContainer.set(router);
router.run(function (Handler) {
	React.render(<Handler />, document.getElementById('react-app'));
});