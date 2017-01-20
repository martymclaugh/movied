var React = require('react');
var transparentBg = require('../styles').transparentBg
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render(){
    return (
      <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
        <h1>movieD</h1>
        <p className="lead">Get the rating demographics from iMDB</p>
        <Link to="/search">
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit">Continue</button>
          </div>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
