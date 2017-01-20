var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var MoviePrompt = require('../containers/MoviePrompt');
var MoviePreview = require('../containers/MoviePreview');
var MovieDemographics = require('../containers/MovieDemographics');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/search' component={MoviePrompt}/>
      <Route path='/movie/:movieID' component={MoviePreview}/>
      <Route path='/movie/:movieID/ratings' component={MovieDemographics}/>
    </Route>
  </Router>
);

module.exports = routes;
